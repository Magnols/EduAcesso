import { useState } from 'react'
import type { ReactNode } from 'react'
import { ModuleProgressContext } from './moduleProgressContext'
import { completeItem, createInitialProgress } from '../services/moduleProgress'
import type { ItemKind } from '../services/moduleProgress'
import { educationModules } from '../data/modulesMockData'
export function ModuleProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(createInitialProgress)
  const [announcement, setAnnouncement] = useState('')
  function complete(moduleId: string, kind: ItemKind, id: string) {
    setState(current => completeItem(current, moduleId, kind, id))
    const item = educationModules.find(module => module.id === moduleId)?.[kind].find(entry => entry.id === id)
    setAnnouncement(`Conclusão demonstrativa registrada: ${item?.title || 'item'}. O progresso foi atualizado; o próximo item da sequência está liberado quando houver.`)
  }
  return <ModuleProgressContext.Provider value={{ state, complete, announcement }}>{children}</ModuleProgressContext.Provider>
}
