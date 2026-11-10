import { BookOpen, ClipboardCheck, Play, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { EducationModule } from '../../data/modulesMockData'
import { useModuleProgress } from '../../context/moduleProgressContext'
import { continuationPath, moduleSummary } from '../../services/moduleProgress'
export function ModuleProgress({ module, compact = false }: { module: EducationModule; compact?: boolean }) {
  const { state } = useModuleProgress()
  const summary = moduleSummary(module, state)
  return <section className={`module-progress${compact ? ' with-summary' : ''}`} aria-label="Progresso demonstrativo do módulo"><div className="module-progress-intro"><Target aria-hidden="true" /><div><h2>{compact ? 'Seu progresso no módulo' : 'Seu Progresso'}</h2><p>{summary.percent === 100 ? 'Avanço demonstrativo concluído' : 'Módulo em andamento'}</p></div></div><div className="module-progress-meter"><strong>{summary.percent}% concluído</strong><progress max="100" value={summary.percent} aria-label="Progresso demonstrativo do módulo">{summary.percent}%</progress></div>{compact ? <div className="module-summary-facts"><p><BookOpen aria-hidden="true" /><span><strong>{module.lessons.length} aulas</strong><small>Conteúdos demonstrativos</small></span></p><p><ClipboardCheck aria-hidden="true" /><span><strong>{module.activities.length} atividades</strong><small>Exercícios práticos</small></span></p><p><Target aria-hidden="true" /><span><strong>Objetivo</strong><small>Concluir o módulo com pelo menos 70% de aproveitamento.</small></span></p></div> : <Link className="button module-continue" to={continuationPath(module, state)}><Play aria-hidden="true" />{summary.percent === 100 ? 'Rever módulo' : 'Continuar módulo'}</Link>}</section>
}
