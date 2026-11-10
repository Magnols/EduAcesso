import { NavLink, useNavigate } from 'react-router-dom'
import { BookA, BookOpen, ClipboardCheck, Home, LogOut, Settings, UserRound, X } from 'lucide-react'
import { Brand } from '../Brand'
import { signOut } from '../../services/mockAuth'

const items = [
  { path: '/estudante', label: 'Início', icon: Home },
  { path: '/estudante/materiais', label: 'Materiais', icon: BookOpen },
  { path: '/estudante/glossarios', label: 'Glossários', icon: BookA },
  { path: '/estudante/atividades', label: 'Atividades', icon: ClipboardCheck },
  { path: '/estudante/perfil', label: 'Meu Perfil', icon: UserRound },
  { path: '/estudante/configuracoes', label: 'Configurações', icon: Settings },
]

type StudentSidebarProps = { mobile?: boolean; onNavigate?: () => void }
export function StudentSidebar({ mobile = false, onNavigate }: StudentSidebarProps) {
  const navigate = useNavigate()
  return (
    <aside className={`student-sidebar${mobile ? ' mobile-sidebar' : ''}`} aria-label="Menu do estudante">
      {mobile && <button className="sidebar-close student-icon-button" onClick={onNavigate} aria-label="Fechar menu"><X aria-hidden="true" /></button>}
      <div className="student-sidebar-brand">
        <NavLink to="/estudante" onClick={onNavigate} aria-label="EduAcesso — início do estudante"><Brand /></NavLink>
        <p>Tecnologia que aproxima,<br />educação que inclui.</p>
        <span className="student-accent" aria-hidden="true" />
      </div>
      <nav aria-label="Navegação do estudante">
        {items.map(({ path, label, icon: Icon }) => (
          <NavLink key={path} to={path} end={path === '/estudante'} onClick={onNavigate} className={({ isActive }) => `student-nav-link${isActive ? ' active' : ''}`}><Icon aria-hidden="true" />{label}</NavLink>
        ))}
        <div className="student-sidebar-divider" />
        <button className="student-nav-link student-logout" onClick={() => { onNavigate?.(); signOut(); navigate('/login', { replace: true }) }}><LogOut aria-hidden="true" />Sair</button>
      </nav>
      <div className="student-sidebar-wave" aria-hidden="true" />
    </aside>
  )
}
