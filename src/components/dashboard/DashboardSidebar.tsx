import { NavLink, useNavigate } from 'react-router-dom'
import { LogOut, X } from 'lucide-react'
import { Brand } from '../Brand'
import { signOut } from '../../services/mockAuth'
import type { DashboardConfig } from '../../data/dashboardConfigs'

type DashboardSidebarProps = { config: DashboardConfig; mobile?: boolean; onNavigate?: () => void }
export function DashboardSidebar({ config, mobile = false, onNavigate }: DashboardSidebarProps) {
  const navigate = useNavigate()
  return (
    <aside className={`student-sidebar${mobile ? ' mobile-sidebar' : ''}`} aria-label={`Menu do ${config.role}`}>
      {mobile && <button className="sidebar-close student-icon-button" onClick={onNavigate} aria-label="Fechar menu"><X aria-hidden="true" /></button>}
      <div className="student-sidebar-brand">
        <NavLink to={config.basePath} onClick={onNavigate} aria-label={`EduAcesso — início do ${config.role}`}><Brand /></NavLink>
        <p>Tecnologia que aproxima,<br />educação que inclui.</p>
        <span className="student-accent" aria-hidden="true" />
      </div>
      <nav aria-label={`Navegação do ${config.role}`}>
        {config.items.map(({ path, label, icon: Icon }) => (
          <NavLink key={path} to={path} end={path === config.basePath} onClick={onNavigate} className={({ isActive }) => `student-nav-link${isActive ? ' active' : ''}`}><Icon aria-hidden="true" />{label}</NavLink>
        ))}
        <div className="student-sidebar-divider" />
        <button className="student-nav-link student-logout" onClick={() => { onNavigate?.(); signOut(); navigate('/login', { replace: true }) }}><LogOut aria-hidden="true" />Sair</button>
      </nav>
      <div className="student-sidebar-wave" aria-hidden="true" />
    </aside>
  )
}
