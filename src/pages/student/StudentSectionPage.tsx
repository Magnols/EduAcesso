import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { studentSections } from '../../data/studentMockData'
import type { StudentSection } from '../../data/studentMockData'
import { useDemoSession } from '../../services/mockAuth'
export function StudentSectionPage({ section }: { section: StudentSection }) {
  const data = studentSections[section]
  const session = useDemoSession()
  return (
    <section className="student-placeholder" aria-labelledby="student-section-title">
      <p className="student-page-eyebrow">Em desenvolvimento</p><h1 id="student-section-title">{data.title}</h1><p>{data.description}</p>
      {section === 'perfil' && <dl className="student-profile-data"><dt>Nome</dt><dd>{session?.name}</dd><dt>E-mail demonstrativo</dt><dd>{session?.email}</dd><dt>Perfil</dt><dd>Estudante</dd></dl>}
      <Link className="button" to="/estudante"><ArrowLeft aria-hidden="true" />Voltar ao início do estudante</Link>
    </section>
  )
}
