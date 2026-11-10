import { ArrowRight, CirclePlay } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return <section className="hero" aria-labelledby="hero-title"><div className="hero-inner container">
    <div className="hero-copy"><p className="eyebrow">Educação inclusiva com tecnologia</p>
      <h1 id="hero-title">Aprender sem barreiras.<br />Ensinar com mais possibilidades.</h1>
      <p className="hero-description">Uma plataforma educacional que conecta estudantes surdos, professores e intérpretes de Libras, com conteúdos acessíveis e apoio de inteligência artificial.</p>
      <div className="hero-actions"><Link to="/login" className="button primary"><ArrowRight />Começar agora</Link><a href="#recursos" className="button secondary"><CirclePlay />Conhecer recursos</a></div>
    </div>
    <div className="hero-image"><img src="/images/hero-libras.png" alt="Estudante com dispositivo auditivo, professora e intérprete se comunicam em língua de sinais em uma sala de aula." width="882" height="412" fetchPriority="high" /></div>
  </div></section>
}
