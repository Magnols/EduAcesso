import { ArrowRight, BookOpen, ClipboardCheck, Cpu, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WelcomeBanner } from '../../components/dashboard/WelcomeBanner'
import { FeatureCard } from '../../components/dashboard/FeatureCard'
import { ContentCard } from '../../components/dashboard/ContentCard'
import { ContentStatus } from '../../components/dashboard/ContentStatus'
import { professorContents } from '../../data/professorMockData'

export function ProfessorDashboard() {
  return (
    <>
      <WelcomeBanner fallbackName="Professor" description="Crie, adapte e revise conteúdos acessíveis com o apoio da IA e recursos em Libras." image="/images/professor-welcome.png" imageAlt="Ilustração de uma professora utilizando Libras junto a um notebook, livros e representações de IA e conteúdo em Libras em um monitor." />
      <section className="student-features" aria-label="Acessos rápidos">
        <FeatureCard title="Conteúdos" description="Crie e gerencie materiais pedagógicos da sua disciplina." icon={BookOpen} tone="blue" to="/professor/conteudos" />
        <FeatureCard title="Adaptação por IA" description="Adapte textos e atividades para uma linguagem acessível." icon={Cpu} tone="teal" to="/professor/adaptacao" />
        <FeatureCard title="Revisão" description="Revise e valide os conteúdos adaptados antes de publicar." icon={ClipboardCheck} tone="purple" to="/professor/revisao" />
      </section>
      <section className="student-featured" aria-labelledby="professor-recent-title">
        <div className="student-section-heading"><h2 id="professor-recent-title"><BookOpen aria-hidden="true" />Meus Conteúdos Recentes</h2><Link to="/professor/conteudos">Ver todos<ArrowRight aria-hidden="true" /></Link></div>
        <p className="professor-examples-note">Dados fictícios do protótipo. Tipos e status ilustram o fluxo planejado; nenhum conteúdo foi adaptado por IA real.</p>
        <div className="student-material-grid">{professorContents.map(content => <ContentCard key={content.id} title={content.title} category={content.category} image={content.image} imageAlt={content.imageAlt} type={content.type} icon={FileText} to={`/professor/conteudos/${content.id}`} note="Exemplo fictício — sem adaptação por IA real." badge={<ContentStatus status={content.status} />} adaptedExample />)}</div>
      </section>
      <p className="student-demo-note">Ambiente demonstrativo. As funcionalidades estão em desenvolvimento. O controle de acesso é uma simulação de interface.</p>
    </>
  )
}
