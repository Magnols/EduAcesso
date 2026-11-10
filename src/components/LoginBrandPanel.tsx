import { Link } from 'react-router-dom'
import { Brand } from './Brand'

export function LoginBrandPanel() {
  return (
    <aside className="login-brand-panel" aria-label="EduAcesso — educação inclusiva">
      <div className="login-brand-copy">
        <Link to="/" aria-label="EduAcesso — voltar ao início"><Brand /></Link>
        <p>Tecnologia que aproxima,<br />{' '}educação que inclui.</p>
        <span className="login-brand-accent" aria-hidden="true" />
      </div>
      <div className="login-illustration">
        <img src="/images/login-libras.png" width="780" height="510" alt="Ilustração de um estudante com dispositivo auditivo e dois educadores conversando em Libras, com livros e um notebook sobre a mesa." />
      </div>
      <div className="login-wave" aria-hidden="true" />
    </aside>
  )
}

