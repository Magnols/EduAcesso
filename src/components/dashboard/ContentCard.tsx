import type { LucideIcon } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ContentCardProps = {
  title: string
  category: string
  image: string
  imageAlt: string
  type: string
  icon: LucideIcon
  to: string
  note: string
  badge?: ReactNode
  adaptedExample?: boolean
}
export function ContentCard({ title, category, image, imageAlt, type, icon: Icon, to, note, badge, adaptedExample }: ContentCardProps) {
  return (
    <Link className="student-material-card" to={to}>
      <img src={image} alt={imageAlt} width="395" height="116" />
      <span className="student-material-category">{category}</span>
      <h3>{title}</h3>
      <div className="dashboard-content-meta"><p className="student-material-type"><Icon aria-hidden="true" />{type}{adaptedExample && <Sparkles className="content-ai-icon" aria-hidden="true" />}</p>{badge}</div>
      <p className="student-material-status">{note}</p>
    </Link>
  )
}
