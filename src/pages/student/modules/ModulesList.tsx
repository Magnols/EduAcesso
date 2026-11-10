import { educationModules } from '../../../data/modulesMockData'
import { ModuleCard } from '../../../components/modules/ModuleCard'
import { ModuleBreadcrumb } from '../../../components/modules/ModuleBreadcrumb'
import '../../../styles/modules.css'
export function ModulesList() {
  return <div className="modules-page"><ModuleBreadcrumb /><h1>Meus Módulos</h1><p className="modules-intro">Explore os módulos educacionais e acompanhe seu avanço demonstrativo.</p><p className="module-demo-notice">Protótipo educacional. Textos e conclusões são demonstrativos; os vídeos em Libras não estão disponíveis. O progresso é calculado pelas aulas e atividades concluídas e permanece apenas nesta sessão. Ele não representa avaliação de aprendizagem.</p><div className="education-modules-grid">{educationModules.map(module => <ModuleCard key={module.id} module={module} />)}</div></div>
}
