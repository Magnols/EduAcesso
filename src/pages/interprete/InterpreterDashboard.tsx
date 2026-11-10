import { ArrowRight, BookOpen, ClipboardCheck, FileText, Hand, SquarePlay } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WelcomeBanner } from '../../components/dashboard/WelcomeBanner'
import { FeatureCard } from '../../components/dashboard/FeatureCard'
import { ContentCard } from '../../components/dashboard/ContentCard'
import { ResourceStatus } from '../../components/dashboard/ResourceStatus'
import { interpreterResources } from '../../data/interpreterMockData'

export function InterpreterDashboard() {
  return (
    <>
      <WelcomeBanner fallbackName="Intérprete" description="Acesse materiais de apoio, aprimore sua preparação linguística e organize suas traduções." image="/images/interpreter-welcome.png" imageAlt="Ilustração de uma intérprete junto a um notebook, livros e um monitor com uma pessoa gesticulando. Os gestos são ilustrativos." />
      <section className="student-features" aria-label="Acessos rápidos">
        <FeatureCard title="Materiais de Apoio" description="Acesse guias, referências e recursos para interpretação." icon={BookOpen} tone="blue" to="/interprete/materiais" />
        <FeatureCard title="Preparação Linguística" description="Aprimore seus conhecimentos em Libras e contextos educacionais." icon={Hand} tone="teal" to="/interprete/preparacao" />
        <FeatureCard title="Tradução e Revisão" description="Gerencie, traduza e revise conteúdos em Libras." icon={ClipboardCheck} tone="purple" to="/interprete/traducao" />
      </section>
      <section className="student-featured" aria-labelledby="interpreter-resources-title">
        <div className="student-section-heading"><h2 id="interpreter-resources-title"><BookOpen aria-hidden="true" />Recursos em Destaque</h2><Link to="/interprete/materiais">Ver todos<ArrowRight aria-hidden="true" /></Link></div>
        <p className="interpreter-examples-note">Exemplos demonstrativos. “Disponível” é um status fictício do fluxo planejado; todos os conteúdos estão em preparação.</p>
        <div className="student-material-grid">{interpreterResources.map(resource => <ContentCard key={resource.id} title={resource.title} category={resource.category} image={resource.image} imageAlt={resource.imageAlt} type={resource.type} icon={resource.type === 'Videoaula' ? SquarePlay : FileText} to={`/interprete/materiais/${resource.id}`} badge={<ResourceStatus status={resource.status} />} note="Exemplo demonstrativo — conteúdo em preparação." />)}</div>
      </section>
      <p className="student-demo-note">Ambiente demonstrativo. As funcionalidades estão em desenvolvimento. O controle de acesso é uma simulação de interface.</p>
    </>
  )
}
