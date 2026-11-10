import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bell, Check, ChevronDown, LogOut, Menu, Settings, UserRound } from 'lucide-react'
import { signOut, useDemoSession } from '../../services/mockAuth'

import type { DashboardConfig } from '../../data/dashboardConfigs'

type HeaderDisclosureProps = { id: string; label: string; trigger: ReactNode; children: ReactNode }
function HeaderDisclosure({ id, label, trigger, children }: HeaderDisclosureProps) {
  const [open, setOpen] = useState(false)
  const hostRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    hostRef.current?.querySelector<HTMLElement>('.student-popover a, .student-popover button')?.focus()
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); buttonRef.current?.focus() }
    }
    function handleOutside(event: PointerEvent) {
      if (!hostRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handleOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handleOutside)
    }
  }, [open])
  return (
    <div className="student-disclosure" ref={hostRef} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
      <button ref={buttonRef} className="student-header-control" aria-label={label} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>{trigger}</button>
      {open && <div id={id} className="student-popover" onClick={event => { if ((event.target as HTMLElement).closest('a')) setOpen(false) }}>{children}</div>}
    </div>
  )
}

export function DashboardHeader({ config, onOpenMenu, menuOpen }: { config: DashboardConfig; onOpenMenu: () => void; menuOpen: boolean }) {
  const Icon = config.icon
  const session = useDemoSession()
  const navigate = useNavigate()
  const [read, setRead] = useState(false)
  return (
    <header className="student-header">
      <div className="student-header-title"><button className="student-mobile-toggle student-icon-button" aria-label={`Abrir menu do ${config.label.toLocaleLowerCase()}`} aria-expanded={menuOpen} aria-haspopup="dialog" aria-controls={`${config.role}-mobile-menu`} onClick={onOpenMenu}><Menu aria-hidden="true" /></button><Icon aria-hidden="true" /><span>{config.title}</span></div>
      <div className="student-header-actions">
        <HeaderDisclosure id={`${config.role}-notifications`} label={read ? 'Notificações: nenhuma nova' : 'Notificações: uma demonstrativa não lida'} trigger={<span className="notification-icon"><Bell aria-hidden="true" />{!read && <span className="notification-dot" />}</span>}>
          <h2>Notificações</h2>
          <p className="student-notification-label">Notificação demonstrativa</p>
          <p>{config.notification}</p>
          <p role="status">{read ? 'Nenhuma notificação nova.' : 'Uma notificação demonstrativa não lida.'}</p>
          <button className="student-popover-action" onClick={() => setRead(true)} aria-disabled={read}><Check aria-hidden="true" />{read ? 'Lida' : 'Marcar como lida'}</button>
        </HeaderDisclosure>
        <HeaderDisclosure id={`${config.role}-user-options`} label="Abrir opções do usuário" trigger={<><span className="student-avatar"><UserRound aria-hidden="true" /></span><span className="student-user-name">{session?.name || config.label}</span><ChevronDown aria-hidden="true" className="user-chevron" /></>}>
          <p className="student-popover-name">{session?.name || config.label}</p>
          <nav aria-label="Opções do usuário"><Link to={`${config.basePath}/perfil`}><UserRound aria-hidden="true" />Meu Perfil</Link><Link to={`${config.basePath}/configuracoes`}><Settings aria-hidden="true" />Configurações</Link><button onClick={() => { signOut(); navigate('/login', { replace: true }) }}><LogOut aria-hidden="true" />Sair</button></nav>
        </HeaderDisclosure>
      </div>
    </header>
  )
}



