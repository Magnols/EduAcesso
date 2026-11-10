import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { interpreterResources } from '../../data/interpreterMockData'
import { ResourceStatus } from '../../components/dashboard/ResourceStatus'

export function InterpreterResourcePreview() {
  const { resourceId } = useParams()
  const resource = interpreterResources.find(item => item.id === resourceId)
  return (
    <section className="student-placeholder student-material-preview" aria-labelledby="resource-preview-title">
      {resource ? <>
        <p className="student-page-eyebrow">Prévia demonstrativa</p><span className="student-material-category">{resource.category}</span>
        <h1 id="resource-preview-title">{resource.title}</h1>
        <img src={resource.image} alt={resource.imageAlt} width="790" height="234" />
        <p>{resource.description}</p>
        <div className="interpreter-preview-meta"><p>Formato planejado: {resource.type}</p><ResourceStatus status={resource.status} /></div>
        <p className="student-preview-status" role="status">Conteúdo demonstrativo — material em preparação. O status “Disponível” é apenas um exemplo do protótipo. Não há vídeo, glossário validado ou arquivo disponível para consumo nesta prévia.</p>
      </> : <><h1 id="resource-preview-title">Recurso não encontrado</h1><p>Esta prévia não existe. Volte ao painel para conhecer os exemplos disponíveis.</p></>}
      <Link className="button" to="/interprete"><ArrowLeft aria-hidden="true" />Voltar aos recursos em destaque</Link>
    </section>
  )
}
