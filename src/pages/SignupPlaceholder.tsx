import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import '../styles/login.css'

export function SignupPlaceholder() {
  return (
    <main className="demo-page">
      <section className="demo-card" aria-labelledby="signup-title">
        <p className="eyebrow">EduAcesso</p>
        <h1 id="signup-title">Cadastro em desenvolvimento</h1>
        <p>A criação de contas estará disponível futuramente. Por enquanto, o acesso está limitado aos perfis demonstrativos.</p>
        <Link to="/login" className="button"><ArrowLeft aria-hidden="true" />Voltar ao login</Link>
      </section>
    </main>
  )
}
