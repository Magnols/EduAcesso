import { useSyncExternalStore } from 'react'

export type Profile = 'ESTUDANTE' | 'PROFESSOR' | 'INTERPRETE'
export type DemoSession = { email: string; profile: Profile }

export const profileInfo: Record<Profile, { label: string; path: string }> = {
  ESTUDANTE: { label: 'Estudante surdo', path: '/estudante' },
  PROFESSOR: { label: 'Professor', path: '/professor' },
  INTERPRETE: { label: 'Intérprete de Libras', path: '/interprete' },
}

// Demonstração pública: não fornece autenticação ou segurança de produção.
// A sessão é descartada ao recarregar a página; nenhuma senha é persistida.
const accounts: Record<string, Profile> = {
  'estudante@eduacesso.local': 'ESTUDANTE',
  'professor@eduacesso.local': 'PROFESSOR',
  'interprete@eduacesso.local': 'INTERPRETE',
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
  const profile = Object.hasOwn(accounts, normalizedEmail) ? accounts[normalizedEmail] : undefined
  if (!profile || password !== 'EduAcesso@2026') return null
  session = { email: normalizedEmail, profile }
  publish()
  return session
}
export function signOut() {
  session = null
  publish()
}
