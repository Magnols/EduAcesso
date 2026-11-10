import { Check, Clock3 } from 'lucide-react'
import type { InterpreterResource } from '../../data/interpreterMockData'
export function ResourceStatus({ status }: { status: InterpreterResource['status'] }) {
  const availableExample = status === 'Disponível'
  const Icon = availableExample ? Check : Clock3
  return <span className={`interpreter-status ${availableExample ? 'available-example' : 'in-preparation'}`}><Icon aria-hidden="true" />{status}{availableExample ? ' (exemplo)' : ''}</span>
}
