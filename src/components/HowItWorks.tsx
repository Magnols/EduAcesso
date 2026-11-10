import { UserRoundPlus, Sparkles, CircleCheck, GraduationCap, ChevronRight } from 'lucide-react'
const steps = [
  { icon: UserRoundPlus, text: 'Professor cadastra o conteúdo' },
  { icon: Sparkles, text: 'IA sugere uma adaptação' },
  { icon: CircleCheck, text: 'Professor revisa e publica' },
  { icon: GraduationCap, text: 'Estudante acessa, estuda e realiza atividades' },
]
export function HowItWorks() {
  return <section className="how-it-works" aria-labelledby="how-title"><h2 id="how-title">Como funciona<br />o EduAcesso?</h2><ol>{steps.map(({ icon: Icon, text }, index) => <li key={text}><span className={`step-icon ${index === 2 ? 'teal' : 'blue'}`}><Icon aria-hidden="true" /></span><p><strong>{index + 1}.</strong> {text}</p>{index < steps.length - 1 && <ChevronRight className="step-arrow" aria-hidden="true" />}</li>)}</ol></section>
}
