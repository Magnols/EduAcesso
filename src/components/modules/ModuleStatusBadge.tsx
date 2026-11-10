import { Check, Clock3, LockKeyhole, Play } from 'lucide-react'
import type { ItemStatus } from '../../data/modulesMockData'
const statuses = {
  completed: { label: 'Concluída', icon: Check },
  inProgress: { label: 'Em andamento', icon: Play },
  pending: { label: 'Pendente', icon: Clock3 },
  locked: { label: 'Bloqueada', icon: LockKeyhole },
}
export function ModuleStatusBadge({ status }: { status: ItemStatus }) {
  const { label, icon: Icon } = statuses[status]
  return <span className={`module-status ${status}`}><Icon aria-hidden="true" />{label}</span>
}
