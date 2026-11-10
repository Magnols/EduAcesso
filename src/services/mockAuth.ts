import { useSyncExternalStore } from 'react'

export type Profile = 'ESTUDANTE' | 'PROFESSOR' | 'INTERPRETE'
export type DemoSession = { name: string; email: string; profile: Profile }
export type RegistrationData = {
  name: string
  email: string
  password: string
  confirmPassword: string
  profile: Profile | ''
}
export type RegistrationErrors = Partial<Record<keyof RegistrationData, string>>
type RegistrationResult = { ok: true } | { ok: false; errors: RegistrationErrors }

export const profileInfo: Record<Profile, { label: string; path: string }> = {
  ESTUDANTE: { label: 'Estudante surdo', path: '/estudante' },
  PROFESSOR: { label: 'Professor', path: '/professor' },
  INTERPRETE: { label: 'Intérprete de Libras', path: '/interprete' },
}

// Demonstração pública: não fornece autenticação ou segurança de produção.
// Sessão e cadastros são descartados ao recarregar. Senhas ficam apenas em memória.
type DemoAccount = { name: string; profile: Profile; password: string }
const accounts = new Map<string, DemoAccount>([
  ['estudante@eduacesso.local', { name: 'Estudante demonstrativo', profile: 'ESTUDANTE', password: 'EduAcesso@2026' }],
  ['professor@eduacesso.local', { name: 'Professor demonstrativo', profile: 'PROFESSOR', password: 'EduAcesso@2026' }],
  ['interprete@eduacesso.local', { name: 'Intérprete demonstrativo', profile: 'INTERPRETE', password: 'EduAcesso@2026' }],
])

export function register(data: RegistrationData): RegistrationResult {
  const errors: RegistrationErrors = {}
  const name = data.name.trim().replace(/\s+/g, ' ')
  const email = data.email.trim().toLowerCase()
  if (!name) errors.name = 'Informe seu nome completo.'
  if (!email) errors.email = 'Informe seu e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Informe um e-mail válido.'
  else if (accounts.has(email)) errors.email = 'Este e-mail já está cadastrado. Entre na plataforma ou use outro e-mail.'
  if (!data.password) errors.password = 'Crie uma senha.'
  else if (data.password.length < 8) errors.password = 'Use uma senha com pelo menos 8 caracteres.'
  if (!data.confirmPassword) errors.confirmPassword = 'Confirme sua senha.'
  else if (data.confirmPassword !== data.password) errors.confirmPassword = 'As senhas precisam ser iguais.'
  if (!data.profile || !Object.hasOwn(profileInfo, data.profile)) errors.profile = 'Selecione um perfil para continuar.'
  if (Object.keys(errors).length > 0) return { ok: false, errors }
  // O perfil foi validado acima. A conta criada não inicia uma sessão automaticamente.
  accounts.set(email, { name, profile: data.profile as Profile, password: data.password })
  return { ok: true }
}
let session: DemoSession | null = null
const listeners = new Set<() => void>()
function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => { listeners.delete(listener) }
}
function publish() { listeners.forEach(listener => listener()) }
export function useDemoSession() {
  return useSyncExternalStore(subscribe, () => session, () => null)
}
export function signIn(email: string, password: string): DemoSession | null {
  const normalizedEmail = email.trim().toLowerCase()
  const account = accounts.get(normalizedEmail)
  if (!account || password !== account.password) return null
  session = { name: account.name, email: normalizedEmail, profile: account.profile }
  publish()
  return session
}
export function signOut() {
  session = null
  publish()
}
