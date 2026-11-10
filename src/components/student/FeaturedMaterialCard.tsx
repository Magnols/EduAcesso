import { FileText, Video } from 'lucide-react'
import { ContentCard } from '../dashboard/ContentCard'
import type { StudentMaterial } from '../../data/studentMockData'
export function FeaturedMaterialCard({ material }: { material: StudentMaterial }) {
  return <ContentCard title={material.title} category={material.category} image={material.image} imageAlt={material.imageAlt} type={material.type} icon={material.type === 'Vídeo em Libras' ? Video : FileText} to={`/estudante/materiais/${material.id}`} note="Conteúdo demonstrativo — material em preparação" />
}
