import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { educationModules } from '../../../data/modulesMockData'
import { useModuleProgress } from '../../../context/moduleProgressContext'
import { itemStatus } from '../../../services/moduleProgress'
import { ModuleStatusBadge } from '../../../components/modules/ModuleStatusBadge'
import '../../../styles/modules.css'
export function ModuleActivity() {
  const { moduloId, atividadeId } = useParams()
  return <ModuleActivityContent key={`${moduloId}/${atividadeId}`} />
}
function ModuleActivityContent() {
  const { moduloId, atividadeId } = useParams()
  const module = educationModules.find(item => item.id === moduloId)
  const activity = module?.activities.find(item => item.id === atividadeId)
  const { state, complete, announcement } = useModuleProgress()
  const [response, setResponse] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [error, setError] = useState('')
  if (!module || !activity) return <section className="module-detail modules-page"><h1>Atividade não encontrada</h1><Link to="/estudante/modulos" className="button">Voltar aos módulos</Link></section>
  const status = itemStatus(module, state, 'activities', activity.id)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!module || !activity || status === 'locked' || status === 'completed') return
    if (!confirmed || (activity.kind !== 'quiz' && !response.trim())) { setError('Registre uma resposta fictícia quando solicitada e confirme a revisão para concluir.'); return }
    setError('')
    complete(module.id, 'activities', activity.id)
    setResponse('')
  }
  return <article className="module-detail modules-page"><Link className="module-back-link" to={`/estudante/modulos/${module.id}`}>← Voltar ao módulo</Link><p className="module-number">{module.title}</p>{status === 'locked' ? <><h1>Atividade bloqueada</h1><p>Conclua a atividade anterior para liberar esta interação.</p></> : <><h1>{activity.title}</h1><ModuleStatusBadge status={status} /><p>{activity.description}</p><p className="module-demo-notice">Interação demonstrativa, sem avaliação ou nota automática. Use apenas dados fictícios. A conclusão registra avanço no protótipo, não comprova aprendizagem. Nenhum texto é enviado ou publicado.</p><h2>Instruções</h2><p>{activity.instructions}</p>{status === 'completed' ? <p className="module-completed-message">Atividade concluída nesta demonstração. Nenhuma nota foi atribuída.</p> : <form className="module-activity-form" onSubmit={submit} noValidate>{activity.kind !== 'quiz' && <><label htmlFor="activity-response">{activity.kind === 'forum' ? 'Rascunho local de participação' : 'Sua resposta fictícia'}</label><textarea id="activity-response" value={response} onChange={event => { setResponse(event.target.value); setError('') }} rows={5} aria-invalid={Boolean(error)} aria-describedby={error ? 'activity-error' : 'activity-privacy'} /><p id="activity-privacy">O texto não será armazenado. Somente a conclusão fica em memória nesta sessão.</p></>}<label className="module-confirmation"><input type="checkbox" checked={confirmed} onChange={event => { setConfirmed(event.target.checked); setError('') }} aria-invalid={Boolean(error)} aria-describedby={error ? 'activity-error' : undefined} />Revisei esta interação demonstrativa e desejo registrar a conclusão.</label>{error && <p id="activity-error" className="field-error" role="alert">{error}</p>}<button type="submit" className="button">Registrar conclusão demonstrativa</button></form>}<p className="module-announcement" role="status">{announcement}</p></>}<Link className="module-back-link" to={`/estudante/modulos/${module.id}`}>Voltar ao módulo</Link></article>
}
