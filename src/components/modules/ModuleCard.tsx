import { Link } from 'react-router-dom'
import { BookOpen, ClipboardCheck } from 'lucide-react'
import type { EducationModule } from '../../data/modulesMockData'
import { useModuleProgress } from '../../context/moduleProgressContext'
import { moduleSummary } from '../../services/moduleProgress'
export function ModuleCard({ module }: { module: EducationModule }) {
  const { state } = useModuleProgress()
  const summary = moduleSummary(module, state)
  return <article className="education-module-card"><img src={module.image} alt="Ilustração educacional de estudante com notebook; gestos apenas ilustrativos." width="670" height="266" /><span className="module-number">Módulo {module.number}</span><h2>{module.title}</h2><p>{module.description}</p><div className="module-card-counts"><span><BookOpen aria-hidden="true" />{module.lessons.length} aulas</span><span><ClipboardCheck aria-hidden="true" />{module.activities.length} atividades</span></div><label>Progresso demonstrativo: {summary.percent}%<progress max="100" value={summary.percent} aria-label={`Progresso de ${module.title}`}>{summary.percent}%</progress></label><Link className="button" to={`/estudante/modulos/${module.id}`}>Acessar módulo</Link></article>
}
