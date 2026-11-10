import { useRef } from 'react'
import { ClipboardCheck, Play } from 'lucide-react'
export type ModuleTab = 'lessons' | 'activities'
export function ModuleTabs({ selected, onSelect }: { selected: ModuleTab; onSelect: (tab: ModuleTab) => void }) {
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const tabs = [{ id: 'lessons' as const, label: 'Aulas', icon: Play }, { id: 'activities' as const, label: 'Atividades', icon: ClipboardCheck }]
  return <div role="tablist" className="module-tabs" aria-label="Conteúdo do módulo">{tabs.map(({ id, label, icon: Icon }, index) => <button key={id} ref={node => { refs.current[index] = node }} role="tab" id={`module-tab-${id}`} type="button" aria-selected={selected === id} aria-controls={`module-panel-${id}`} tabIndex={selected === id ? 0 : -1} onClick={() => onSelect(id)} onKeyDown={event => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : index === 0 ? 1 : 0; onSelect(tabs[next].id); refs.current[next]?.focus() } }}><Icon aria-hidden="true" />{label}</button>)}</div>
}
