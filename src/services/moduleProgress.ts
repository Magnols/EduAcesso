import { educationModules } from '../data/modulesMockData'
import type { EducationModule, ItemStatus, ProgressValue } from '../data/modulesMockData'
export type ModuleProgressState = Record<string, { lessons: Record<string, ProgressValue>; activities: Record<string, ProgressValue> }>
export type ItemKind = 'lessons' | 'activities'
export function createInitialProgress(): ModuleProgressState {
  return Object.fromEntries(educationModules.map(module => [module.id, {
    lessons: Object.fromEntries(module.lessons.map(item => [item.id, item.initial])),
    activities: Object.fromEntries(module.activities.map(item => [item.id, item.initial])),
  }]))
}
export function itemStatus(module: EducationModule, state: ModuleProgressState, kind: ItemKind, id: string): ItemStatus {
  const items = module[kind]
  const index = items.findIndex(item => item.id === id)
  if (index < 0 || !state[module.id]) return 'locked'
  const values = state[module.id][kind]
  if (values[id] === 'completed') return 'completed'
  if (items.slice(0, index).some(item => values[item.id] !== 'completed')) return 'locked'
  return values[id] || 'pending'
}
export function completeItem(state: ModuleProgressState, moduleId: string, kind: ItemKind, id: string): ModuleProgressState {
  const module = educationModules.find(item => item.id === moduleId)
  if (!module || itemStatus(module, state, kind, id) === 'locked' || state[moduleId][kind][id] === 'completed') return state
  return { ...state, [moduleId]: { ...state[moduleId], [kind]: { ...state[moduleId][kind], [id]: 'completed' } } }
}
export function moduleSummary(module: EducationModule, state: ModuleProgressState) {
  const lessonsCompleted = module.lessons.filter(item => state[module.id]?.lessons[item.id] === 'completed').length
  const activitiesCompleted = module.activities.filter(item => state[module.id]?.activities[item.id] === 'completed').length
  const total = module.lessons.length + module.activities.length
  return { lessonsCompleted, activitiesCompleted, percent: total ? Math.round((lessonsCompleted + activitiesCompleted) / total * 100) : 0 }
}
export function continuationPath(module: EducationModule, state: ModuleProgressState): string {
  for (const kind of ['lessons', 'activities'] as const) {
    const next = module[kind].find(item => {
      const status = itemStatus(module, state, kind, item.id)
      return status !== 'locked' && status !== 'completed'
    })
    if (next) return `/estudante/modulos/${module.id}/${kind === 'lessons' ? 'aulas' : 'atividades'}/${next.id}`
  }
  return `/estudante/modulos/${module.id}`
}
