import { ArrowRight, BookA, BookOpen, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WelcomeBanner } from '../../components/student/WelcomeBanner'
import { StudentFeatureCard } from '../../components/student/StudentFeatureCard'
import { FeaturedMaterialCard } from '../../components/student/FeaturedMaterialCard'
import { studentMaterials } from '../../data/studentMockData'
export function StudentDashboard() {
  return <><WelcomeBanner /><section className="student-features" aria-label="Acessos rápidos"><StudentFeatureCard title="Materiais" description="Acesse conteúdos adaptados, com recursos visuais e em Libras." icon={BookOpen} tone="blue" to="/estudante/materiais" /><StudentFeatureCard title="Glossários" description="Consulte o significado de termos e sinais em Libras." icon={BookA} tone="teal" to="/estudante/glossarios" /><StudentFeatureCard title="Atividades" description="Realize exercícios e acompanhe seu progresso." icon={ClipboardCheck} tone="purple" to="/estudante/atividades" /></section><section className="student-featured" aria-labelledby="featured-title"><div className="student-section-heading"><h2 id="featured-title"><BookOpen aria-hidden="true" />Materiais em destaque</h2><Link to="/estudante/materiais">Ver todos<ArrowRight aria-hidden="true" /></Link></div><div className="student-material-grid">{studentMaterials.map(material => <FeaturedMaterialCard key={material.id} material={material} />)}</div></section><p className="student-demo-note">Ambiente demonstrativo. Os recursos educacionais estão em preparação; o controle de acesso é uma simulação de interface.</p></>
}
