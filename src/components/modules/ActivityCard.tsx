import { ClipboardCheck, MessageSquare, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { EducationModule, ModuleActivityData } from '../../data/modulesMockData'
import { useModuleProgress } from '../../context/moduleProgressContext'
import { itemStatus } from '../../services/moduleProgress'
import { ModuleStatusBadge } from './ModuleStatusBadge'
export function ActivityCard({ module, activity }: { module: EducationModule; activity: ModuleActivityData }) {
  const { state } = useModuleProgress()
  const status = itemStatus(module, state, 'activities', activity.id)
  const Icon = activity.kind === 'forum' ? MessageSquare : activity.kind === 'quiz' ? ClipboardCheck : Pencil
  const content = <><span className={`module-item-icon ${activity.kind}`}><Icon aria-hidden="true" /></span><div><h3>{activity.title}</h3><p>{activity.description}</p></div><ModuleStatusBadge status={status} />{status === 'locked' && <span className="module-lock-hint">Conclua a atividade anterior para liberar.</span>}</>
  return status === 'locked' ? <div className="module-activity module-locked" aria-disabled="true">{content}</div> : <Link className="module-activity" to={`/estudante/modulos/${module.id}/atividades/${activity.id}`}>{content}</Link>
}
