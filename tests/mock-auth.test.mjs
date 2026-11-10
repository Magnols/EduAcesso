import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { runInNewContext } from 'node:vm'
import test from 'node:test'
import ts from 'typescript'

const require = createRequire(import.meta.url)
function loadTypeScript(path, mocks = {}) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8')
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  })
  const exports = {}
  runInNewContext(outputText, {
    exports,
    require: name => Object.hasOwn(mocks, name) ? mocks[name] : require(name),
  })
  return exports
}

test('sessão demonstrativa, credenciais e proteção por perfil', () => {
  const auth = loadTypeScript('../src/services/mockAuth.ts', {
    react: { useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot() },
  })
  const router = { Navigate: () => null }
  const { ProtectedRoute } = loadTypeScript('../src/components/ProtectedRoute.tsx', {
    '../services/mockAuth': auth,
    'react-router-dom': router,
  })
  assert.equal(auth.useDemoSession(), null)
  assert.equal(ProtectedRoute({ profile: 'PROFESSOR', children: 'protected' }).props.to, '/login')
  assert.equal(auth.signIn('estudante@eduacesso.local', 'errada'), null)
  assert.equal(auth.signIn('desconhecido@eduacesso.local', 'EduAcesso@2026'), null)
  assert.equal(auth.signIn('__proto__', 'EduAcesso@2026'), null)
  assert.equal(auth.useDemoSession(), null)

  for (const [email, profile, path] of [
    ['estudante@eduacesso.local', 'ESTUDANTE', '/estudante'],
    ['professor@eduacesso.local', 'PROFESSOR', '/professor'],
    ['interprete@eduacesso.local', 'INTERPRETE', '/interprete'],
  ]) {
    const session = auth.signIn(` ${email.toUpperCase()} `, 'EduAcesso@2026')
    assert.equal(session.profile, profile)
    assert.equal(session.email, email)
    assert.ok(session.name)
    assert.equal('password' in session, false)
    assert.equal(auth.profileInfo[profile].path, path)
    assert.equal(ProtectedRoute({ profile, children: 'protected' }), 'protected')
    const otherProfile = profile === 'PROFESSOR' ? 'ESTUDANTE' : 'PROFESSOR'
    const denied = ProtectedRoute({ profile: otherProfile, children: 'protected' })
    assert.equal(denied.type, router.Navigate)
    assert.equal(denied.props.to, path)
    auth.signOut()
    assert.equal(auth.useDemoSession(), null)
    assert.equal(ProtectedRoute({ profile, children: 'protected' }).props.to, '/login')
  }
})

test('cadastro valida campos e não cria contas inválidas', () => {
  const auth = loadTypeScript('../src/services/mockAuth.ts', {
    react: { useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot() },
  })
  const valid = {
    name: 'Pessoa Fictícia', email: 'validacao@teste.local', password: 'Teste@2026',
    confirmPassword: 'Teste@2026', profile: 'ESTUDANTE',
  }
  const empty = auth.register({ name: '   ', email: '', password: '', confirmPassword: '', profile: '' })
  assert.equal(empty.ok, false)
  assert.deepEqual(Object.keys(empty.errors), ['name', 'email', 'password', 'confirmPassword', 'profile'])
  for (const [field, value] of [
    ['name', ' \t '], ['email', 'invalido'], ['password', 'curta'],
    ['confirmPassword', 'diferente'], ['profile', ''], ['profile', '__proto__'],
  ]) {
    const result = auth.register({ ...valid, [field]: value })
    assert.equal(result.ok, false)
    assert.ok(result.errors[field])
    assert.equal(auth.signIn(valid.email, valid.password), null)
  }
  const duplicate = auth.register({ ...valid, email: ' PROFESSOR@EDUACESSO.LOCAL ' })
  assert.equal(duplicate.ok, false)
  assert.match(duplicate.errors.email, /já está cadastrado/)
  assert.equal(auth.signIn('professor@eduacesso.local', 'EduAcesso@2026').profile, 'PROFESSOR')
})

test('novas contas entram nos três perfis, impedem duplicação e não persistem', () => {
  const mocks = { react: { useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot() } }
  const auth = loadTypeScript('../src/services/mockAuth.ts', mocks)
  for (const profile of ['ESTUDANTE', 'PROFESSOR', 'INTERPRETE']) {
    const email = `${profile.toLowerCase()}@teste.local`
    const data = { name: '  Pessoa   Fictícia  ', email: ` ${email.toUpperCase()} `, password: 'Ficticio@2026', confirmPassword: 'Ficticio@2026', profile }
    assert.equal(auth.register(data).ok, true)
    assert.equal(auth.useDemoSession(), null)
    assert.equal(auth.register({ ...data, email }).ok, false)
    assert.equal(auth.signIn(email, 'errada'), null)
    const session = auth.signIn(email, data.password)
    assert.equal(session.profile, profile)
    assert.equal(session.email, email)
    assert.equal(session.name, 'Pessoa Fictícia')
    assert.equal('password' in session, false)
    auth.signOut()
    const reloaded = loadTypeScript('../src/services/mockAuth.ts', mocks)
    assert.equal(reloaded.signIn(email, data.password), null)
    assert.equal(reloaded.signIn('estudante@eduacesso.local', 'EduAcesso@2026').profile, 'ESTUDANTE')
  }
})
