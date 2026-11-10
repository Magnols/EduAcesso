import { FileText, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { StudentMaterial } from '../../data/studentMockData'
export function FeaturedMaterialCard({ material }: { material: StudentMaterial }) {
  const Icon = material.type === 'Vídeo em Libras' ? Video : FileText
  return (
    <Link className="student-material-card" to={`/estudante/materiais/${material.id}`}>
      <img src={material.image} alt={material.imageAlt} width="395" height="116" />
      <span className="student-material-category">{material.category}</span>
      <h3>{material.title}</h3>
      <p className="student-material-type"><Icon aria-hidden="true" />{material.type}</p>
      <p className="student-material-status">Conteúdo demonstrativo — material em preparação</p>
    </Link>
  )
}
