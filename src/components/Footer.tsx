import { Brand } from './Brand'
export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="brand-link" href="#inicio" aria-label="EduAcesso — voltar ao início"><Brand /></a><p className="project-credit"><strong>Global Solution FIAP 2026</strong><br />Desafio CitizenTech — Tecnologia a Serviço das Pessoas</p><nav aria-label="Links institucionais"><a href="#sobre">Sobre o projeto</a><a href="#privacidade">Privacidade</a><a href="#acessibilidade">Acessibilidade</a></nav></div></footer>
}
