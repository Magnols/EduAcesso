import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { studentMaterials } from '../../data/studentMockData'
export function StudentMaterialPreview() {
  const { materialId } = useParams()
  const material = studentMaterials.find(item => item.id === materialId)
  return (
    <section className="student-placeholder student-material-preview" aria-labelledby="preview-title">
      {material ? <><span className="student-material-category">{material.category}</span><h1 id="preview-title">{material.title}</h1><img src={material.image} alt={material.imageAlt} width="790" height="232" /><p className="student-preview-status" role="status">Conteúdo demonstrativo — material em preparação</p><p>{material.description}</p><p>Formato planejado: {material.type}. {material.type === 'Vídeo em Libras' ? 'Ainda não há vídeo disponível nesta prévia.' : 'O material adaptado ainda não está disponível para leitura ou download.'}</p></> : <><h1 id="preview-title">Material não encontrado</h1><p>Esta prévia não existe. Retorne ao painel para conhecer os materiais demonstrativos.</p></>}
      <Link className="button" to="/estudante"><ArrowLeft aria-hidden="true" />Voltar aos destaques</Link>
    </section>
  )
}
