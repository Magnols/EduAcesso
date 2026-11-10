import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { runInNewContext } from 'node:vm'
import test from 'node:test'
import ts from 'typescript'
const require = createRequire(import.meta.url)
function load(path, mocks = {}) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } })
  const exports = {}
  runInNewContext(outputText, { exports, require: name => Object.hasOwn(mocks, name) ? mocks[name] : require(name) })
  return exports
}
const data = load('../src/data/modulesMockData.ts')
const progress = load('../src/services/moduleProgress.ts', { '../data/modulesMockData': data })

test('progresso inicial deriva de conclusões e continuidade ignora itens concluídos', () => {
  const state = progress.createInitialProgress()
  const expected = [[3, 7, 'comunicacao-acessibilidade'], [2, 6, 'seres-vivos'], [2, 6, 'inclusao-escola']]
  data.educationModules.forEach((module, index) => {
    const [done, total, next] = expected[index]
    assert.equal(progress.moduleSummary(module, state).percent, Math.round(done / total * 100))
    assert.equal(progress.continuationPath(module, state), `/estudante/modulos/${module.id}/aulas/${next}`)
  })
})

test('aulas bloqueadas não abrem por conclusão direta e sequência é liberada explicitamente', () => {
  const module = data.educationModules[0]
  const initial = progress.createInitialProgress()
  assert.equal(progress.itemStatus(module, initial, 'lessons', 'praticas-inclusivas'), 'locked')
  assert.equal(progress.completeItem(initial, module.id, 'lessons', 'praticas-inclusivas'), initial)
  const after = progress.completeItem(initial, module.id, 'lessons', 'comunicacao-acessibilidade')
  assert.notEqual(after, initial)
  assert.equal(progress.moduleSummary(module, after).percent, 57)
  assert.equal(progress.moduleSummary(module, initial).percent, 43)
  assert.equal(progress.itemStatus(module, after, 'lessons', 'praticas-inclusivas'), 'pending')
  assert.equal(progress.continuationPath(module, after), `/estudante/modulos/${module.id}/aulas/praticas-inclusivas`)
  assert.equal(progress.completeItem(after, module.id, 'lessons', 'comunicacao-acessibilidade'), after)
  assert.equal(progress.completeItem(after, 'inexistente', 'lessons', 'qualquer'), after)
  assert.equal(progress.completeItem(after, module.id, 'lessons', 'inexistente'), after)
})

test('atividades liberam a sequência e 100% não exige valores fixos nem nota', () => {
  const module = data.educationModules[0]
  let state = progress.createInitialProgress()
  assert.equal(progress.completeItem(state, module.id, 'activities', 'forum-discussao'), state)
  state = progress.completeItem(state, module.id, 'lessons', 'comunicacao-acessibilidade')
  state = progress.completeItem(state, module.id, 'lessons', 'praticas-inclusivas')
  assert.equal(progress.continuationPath(module, state), `/estudante/modulos/${module.id}/atividades/atividade-pratica`)
  state = progress.completeItem(state, module.id, 'activities', 'atividade-pratica')
  assert.equal(progress.itemStatus(module, state, 'activities', 'forum-discussao'), 'pending')
  state = progress.completeItem(state, module.id, 'activities', 'forum-discussao')
  const summary = progress.moduleSummary(module, state)
  assert.equal(summary.percent, 100)
  assert.equal(summary.lessonsCompleted, 4)
  assert.equal(summary.activitiesCompleted, 3)
  assert.equal(progress.continuationPath(module, state), `/estudante/modulos/${module.id}`)
})

test('módulos são independentes e uma nova sessão recebe dados iniciais', () => {
  const initial = progress.createInitialProgress()
  const module = data.educationModules[1]
  const after = progress.completeItem(initial, module.id, 'lessons', 'seres-vivos')
  assert.equal(progress.moduleSummary(module, after).lessonsCompleted, 2)
  assert.equal(progress.moduleSummary(data.educationModules[2], after).lessonsCompleted, 2)
  assert.equal(progress.moduleSummary(module, progress.createInitialProgress()).lessonsCompleted, 1)
  assert.equal(progress.itemStatus(module, after, 'lessons', 'conservacao'), 'pending')
})
