import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { profileInfo, signOut, useDemoSession } from '../services/mockAuth'
import '../styles/login.css'

export function DemoDashboard() {
  const session = useDemoSession()
  const navigate = useNavigate()
  if (!session) return null
  return (
    <main className="demo-page">
      <section className="demo-card" aria-labelledby="demo-title">
        <p className="eyebrow">{profileInfo[session.profile].label}</p>
        <h1 id="demo-title">Boas-vindas ao EduAcesso!</h1>
        <p>Esta é uma página provisória do perfil {profileInfo[session.profile].label.toLowerCase()}.</p>
        <p className="demo-disclaimer">Acesso local demonstrativo. A proteção de rotas no navegador não representa segurança real de produção. A sessão termina ao recarregar a página.</p>
        <button className="button" onClick={() => { signOut(); navigate('/login', { replace: true }) }}><LogOut aria-hidden="true" />Sair</button>
      </section>
    </main>
  )
}
