import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { interpreterSections, preparationSteps, translationSteps } from '../../data/interpreterMockData'
import type { InterpreterSection } from '../../data/interpreterMockData'
import { useDemoSession } from '../../services/mockAuth'

export function InterpreterSectionPage({ section }: { section: InterpreterSection }) {
  const data = interpreterSections[section]
  const session = useDemoSession()
  const steps = section === 'preparacao' ? preparationSteps : section === 'traducao' ? translationSteps : undefined
  return (
    <section className="student-placeholder" aria-labelledby="interpreter-section-title">
      <p className="student-page-eyebrow">Recurso em desenvolvimento</p>
      <h1 id="interpreter-section-title">{data.title}</h1><p>{data.description}</p>
      {steps && <div className="interpreter-planned-flow"><h2>Fluxo planejado</h2><ol>{steps.map(step => <li key={step}>{step}</li>)}</ol><p>Esta página apresenta somente a proposta. Não há geração de sinais, tradução automática ou publicação real de materiais.</p></div>}
      {section === 'perfil' && <dl className="student-profile-data"><dt>Nome</dt><dd>{session?.name}</dd><dt>E-mail demonstrativo</dt><dd>{session?.email}</dd><dt>Perfil</dt><dd>Intérprete de Libras</dd></dl>}
      <Link className="button" to="/interprete"><ArrowLeft aria-hidden="true" />Voltar ao início do intérprete</Link>
    </section>
  )
}
