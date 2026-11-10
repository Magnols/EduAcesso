import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = { title: string; description: string; icon: LucideIcon; tone: 'teal' | 'blue' | 'green' }
export function FeatureCard({ title, description, icon: Icon, tone }: FeatureCardProps) {
  return <article className="feature-card"><span className={`feature-icon ${tone}`}><Icon aria-hidden="true" strokeWidth={1.7} /></span><div><h2>{title}</h2><p>{description}</p></div></article>
}
