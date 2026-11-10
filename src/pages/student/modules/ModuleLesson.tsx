import { Link, useParams } from 'react-router-dom'
import { Check, LockKeyhole, VideoOff } from 'lucide-react'
import { educationModules } from '../../../data/modulesMockData'
import { useModuleProgress } from '../../../context/moduleProgressContext'
import { itemStatus } from '../../../services/moduleProgress'
import { ModuleStatusBadge } from '../../../components/modules/ModuleStatusBadge'
import '../../../styles/modules.css'
export function ModuleLesson() {
  const { moduloId, aulaId } = useParams()
  const module = educationModules.find(item => item.id === moduloId)
  const lesson = module?.lessons.find(item => item.id === aulaId)
  const { state, complete, announcement } = useModuleProgress()
  if (!module || !lesson) return <section className="module-detail modules-page"><h1>Aula não encontrada</h1><Link to="/estudante/modulos" className="button">Voltar aos módulos</Link></section>
  const status = itemStatus(module, state, 'lessons', lesson.id)
  const next = module.lessons[module.lessons.findIndex(item => item.id === lesson.id) + 1]
  const nextLocked = next && itemStatus(module, state, 'lessons', next.id) === 'locked'
  return <article className="module-detail modules-page"><Link className="module-back-link" to={`/estudante/modulos/${module.id}`}>← Voltar ao módulo</Link><p className="module-number">{module.title}</p>{status === 'locked' ? <><h1><LockKeyhole aria-hidden="true" />Aula bloqueada</h1><p>Conclua a aula anterior para liberar esta aula. O conteúdo não está disponível enquanto estiver bloqueado.</p></> : <><h1>{lesson.title}</h1><ModuleStatusBadge status={status} /><p className="module-demo-notice">Conteúdo introdutório demonstrativo. Não é uma aula completa nem uma tradução validada em Libras.</p><h2>Objetivos de aprendizagem</h2><p>{lesson.objective}</p><h2>Texto demonstrativo</h2><p>{lesson.text}</p><div className="module-video-placeholder"><VideoOff aria-hidden="true" /><h2>Vídeo em Libras em preparação</h2><p>Não há vídeo disponível nesta aula. Nenhum sinal é gerado ou apresentado como tradução real.</p></div><div className="module-detail-actions"><button className="button" disabled={status === 'completed'} onClick={() => complete(module.id, 'lessons', lesson.id)}><Check aria-hidden="true" />{status === 'completed' ? 'Aula concluída' : 'Marcar como concluída'}</button>{next && (nextLocked ? <button className="button secondary" disabled>Próxima aula — bloqueada</button> : <Link className="button secondary" to={`/estudante/modulos/${module.id}/aulas/${next.id}`}>Próxima aula</Link>)}</div><p className="module-announcement" role="status">{announcement}</p></>}<Link className="module-back-link" to={`/estudante/modulos/${module.id}`}>Voltar ao módulo</Link></article>
}
