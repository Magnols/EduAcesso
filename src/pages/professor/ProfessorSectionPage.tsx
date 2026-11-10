import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { adaptationSteps, professorSections, reviewSteps } from '../../data/professorMockData'
import type { ProfessorSection } from '../../data/professorMockData'
import { useDemoSession } from '../../services/mockAuth'

export function ProfessorSectionPage({ section }: { section: ProfessorSection }) {
  const data = professorSections[section]
  const session = useDemoSession()
  const steps = section === 'adaptacao' ? adaptationSteps : section === 'revisao' ? reviewSteps : undefined
  return (
    <section className="student-placeholder" aria-labelledby="professor-section-title">
      <p className="student-page-eyebrow">Recurso em desenvolvimento</p>
      <h1 id="professor-section-title">{data.title}</h1>
      <p>{data.description}</p>
      {steps && <div className="professor-planned-flow"><h2>Fluxo planejado</h2><ol>{steps.map(step => <li key={step}>{step}</li>)}</ol><p>Esta página explica a proposta. Não há processamento por IA, aprovação ou publicação real nesta etapa.</p></div>}
      {section === 'perfil' && <dl className="student-profile-data"><dt>Nome</dt><dd>{session?.name}</dd><dt>E-mail demonstrativo</dt><dd>{session?.email}</dd><dt>Perfil</dt><dd>Professor</dd></dl>}
      <Link className="button" to="/professor"><ArrowLeft aria-hidden="true" />Voltar ao início do professor</Link>
    </section>
  )
}
