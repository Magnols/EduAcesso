import { WelcomeBanner as DashboardWelcomeBanner } from '../dashboard/WelcomeBanner'
export function WelcomeBanner() {
  return <DashboardWelcomeBanner fallbackName="Estudante" description="Acesse seus materiais, consulte glossários em Libras e realize suas atividades." image="/images/student-welcome.png" imageAlt="Estudante com dispositivo auditivo se comunica em Libras ao lado de um notebook e de livros." />
}
