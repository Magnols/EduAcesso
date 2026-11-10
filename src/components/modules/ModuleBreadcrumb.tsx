import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import type { EducationModule } from '../../data/modulesMockData'
export function ModuleBreadcrumb({ module }: { module?: EducationModule }) {
  return <nav className="module-breadcrumb" aria-label="Caminho dos módulos"><Link to="/estudante">Início</Link><ChevronRight aria-hidden="true" /><Link to="/estudante/modulos" aria-current={!module ? 'page' : undefined}>Meus Módulos</Link>{module && <><ChevronRight aria-hidden="true" /><span aria-current="page">Módulo Educacional {module.number}</span></>}</nav>
}
export function BackToModules() { return <Link className="module-back-link" to="/estudante/modulos"><ArrowLeft aria-hidden="true" />Voltar aos módulos</Link> }
