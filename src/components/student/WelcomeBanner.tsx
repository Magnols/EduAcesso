import { useDemoSession } from '../../services/mockAuth'
export function WelcomeBanner() {
  const session = useDemoSession()
  const firstName = session?.name.trim().split(/\s+/)[0] || 'Estudante'
  return (
    <section className="student-welcome" aria-labelledby="student-welcome-title">
      <div className="student-welcome-copy"><h1 id="student-welcome-title">Olá, {firstName}!</h1><p>Acesse seus materiais, consulte glossários em Libras e realize suas atividades.</p><span className="student-accent" aria-hidden="true" /></div>
      <img src="/images/student-welcome.png" width="654" height="264" alt="Estudante com dispositivo auditivo se comunica em Libras ao lado de um notebook e de livros." fetchPriority="high" />
    </section>
  )
}
