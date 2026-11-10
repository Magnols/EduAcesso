import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { professorContents } from '../../data/professorMockData'
import { ContentStatus } from '../../components/dashboard/ContentStatus'

export function ProfessorContentPreview() {
  const { contentId } = useParams()
  const content = professorContents.find(item => item.id === contentId)
  return (
    <section className="student-placeholder student-material-preview" aria-labelledby="professor-preview-title">
      {content ? <>
        <p className="student-page-eyebrow">Prévia demonstrativa · dados fictícios</p>
        <span className="student-material-category">{content.category}</span>
        <h1 id="professor-preview-title">{content.title}</h1>
        <img src={content.image} alt={content.imageAlt} width="790" height="232" />
        <p>{content.description}</p>
        <div className="professor-preview-meta"><p>Tipo de exemplo: {content.type}</p><ContentStatus status={content.status} /></div>
        <p className="student-preview-status" role="status">Tipo e status são exemplos do fluxo planejado. Este conteúdo não foi adaptado por IA, revisado nem publicado de verdade. O material está em preparação.</p>
        <Link className="professor-inline-link" to={content.status === 'Revisado' ? '/professor/conteudos' : '/professor/revisao'}>{content.status === 'Revisado' ? 'Conhecer a proposta de gestão de conteúdos' : 'Conhecer o fluxo de revisão'}</Link>
      </> : <><h1 id="professor-preview-title">Conteúdo não encontrado</h1><p>Esta prévia não existe. Volte ao painel para consultar os exemplos disponíveis.</p></>}
      <Link className="button" to="/professor"><ArrowLeft aria-hidden="true" />Voltar aos conteúdos recentes</Link>
    </section>
  )
}
