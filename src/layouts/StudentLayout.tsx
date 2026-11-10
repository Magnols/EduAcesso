import { DashboardLayout } from './DashboardLayout'
import { studentDashboardConfig } from '../data/dashboardConfigs'
import { ModuleProgressProvider } from '../context/ModuleProgressProvider'
import { useLocation } from 'react-router-dom'
import { Layers3 } from 'lucide-react'
export function StudentLayout() {
  const { pathname } = useLocation()
  const inModules = pathname.startsWith('/estudante/modulos')
  const title = pathname.includes('/educacao-inclusiva') ? 'Módulo Educacional' : pathname.includes('/comunicacao-inclusao') ? 'Painel do Estudante' : 'Meus Módulos'
  const config = inModules ? { ...studentDashboardConfig, title, icon: pathname.includes('/educacao-inclusiva') ? Layers3 : studentDashboardConfig.icon } : studentDashboardConfig
  return <ModuleProgressProvider><DashboardLayout config={config} /></ModuleProgressProvider>
}
