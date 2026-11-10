import { Clock3, FileText, LockKeyhole, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { EducationModule, Lesson } from '../../data/modulesMockData'
import { useModuleProgress } from '../../context/moduleProgressContext'
import { itemStatus } from '../../services/moduleProgress'
import { ModuleStatusBadge } from './ModuleStatusBadge'
export function LessonCard({ module, lesson, index, visual = false }: { module: EducationModule; lesson: Lesson; index: number; visual?: boolean }) {
  const { state } = useModuleProgress()
  const status = itemStatus(module, state, 'lessons', lesson.id)
  const Icon = status === 'locked' ? LockKeyhole : lesson.type === 'Vídeo em Libras' ? Play : FileText
  const content = <>{visual && lesson.image ? <img src={lesson.image} alt="Ilustração de apoio à aula, sem representação linguística validada de sinais." width="198" height="91" /> : <span className="module-item-icon"><Icon aria-hidden="true" /></span>}<div><span className="lesson-number">Aula {index + 1}</span><h3>{!visual && `Aula ${index + 1} — `}{lesson.title}</h3>{!visual && <p><Clock3 aria-hidden="true" />{lesson.duration} min · {lesson.type} (previsto)</p>}</div><ModuleStatusBadge status={status} />{status === 'locked' && <span className="module-lock-hint">Conclua a aula anterior para liberar.</span>}</>
  return status === 'locked' ? <div className={`module-lesson module-locked${visual ? ' visual' : ''}`} aria-disabled="true">{content}</div> : <Link className={`module-lesson ${status}${visual ? ' visual' : ''}`} to={`/estudante/modulos/${module.id}/aulas/${lesson.id}`}>{content}</Link>
}
