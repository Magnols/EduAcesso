import { createContext, useContext } from 'react'
import type { ModuleProgressState, ItemKind } from '../services/moduleProgress'
export type ModuleProgressContextValue = { state: ModuleProgressState; complete: (moduleId: string, kind: ItemKind, id: string) => void; announcement: string }
export const ModuleProgressContext = createContext<ModuleProgressContextValue | null>(null)
export function useModuleProgress() {
  const value = useContext(ModuleProgressContext)
  if (!value) throw new Error('O progresso dos módulos precisa de um provedor de sessão.')
  return value
}
