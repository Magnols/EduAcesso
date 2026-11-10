import { Check, Clock3 } from 'lucide-react'
import type { ProfessorContent } from '../../data/professorMockData'
export function ContentStatus({ status }: { status: ProfessorContent['status'] }) {
  const reviewed = status === 'Revisado'
  const Icon = reviewed ? Check : Clock3
  return <span className={`professor-status ${reviewed ? 'reviewed' : 'pending'}`}><Icon aria-hidden="true" />{status}</span>
}
