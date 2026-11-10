import type { LucideIcon } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
type FeatureCardProps = { title: string; description: string; to: string; icon: LucideIcon; tone: 'blue' | 'teal' | 'purple' }
export function FeatureCard({ title, description, to, icon: Icon, tone }: FeatureCardProps) {
  return <Link className="student-feature-card" to={to}><span className={`student-feature-icon ${tone}`}><Icon aria-hidden="true" /></span><div><h2>{title}</h2><p>{description}</p></div><ChevronRight aria-hidden="true" className="student-card-arrow" /></Link>
}

