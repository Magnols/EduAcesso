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
