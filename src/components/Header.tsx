import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, UserRound, X } from 'lucide-react'
import { Brand } from './Brand'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header" id="inicio"><div className="header-inner container">
    <a href="#inicio" className="brand-link" aria-label="EduAcesso — início"><Brand /></a>
    <p className="slogan">Tecnologia que aproxima,<br />educação que inclui.</p>
    <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-nav" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal" onClick={() => setOpen(false)}>
      <a className="nav-home" href="#inicio">Início</a><a href="#recursos">Recursos</a><a href="#sobre">Sobre</a>
      <Link className="button login-button" to="/login"><UserRound size={20} />Entrar</Link>
    </nav>
  </div></header>
}
