export type StudentMaterial = {
  id: string
  category: string
  title: string
  type: 'Vídeo em Libras' | 'Material adaptado'
  image: string
  imageAlt: string
  description: string
}

export const studentMaterials: StudentMaterial[] = [
  { id: 'introducao-genetica', category: 'Ciências', title: 'Introdução à Genética', type: 'Vídeo em Libras', image: '/images/material-genetics.png', imageAlt: 'Representação azul de uma molécula de DNA em dupla hélice.', description: 'Proposta de introdução ao DNA e à hereditariedade, com recursos visuais e apoio em Libras.' },
  { id: 'leitura-interpretacao', category: 'Língua Portuguesa', title: 'Leitura e Interpretação de Textos', type: 'Material adaptado', image: '/images/material-reading.png', imageAlt: 'Pilha de livros com capas coloridas.', description: 'Proposta de material em linguagem clara para apoiar a leitura e a interpretação de textos.' },
  { id: 'formas-geometricas', category: 'Matemática', title: 'Formas Geométricas', type: 'Vídeo em Libras', image: '/images/material-geometry.png', imageAlt: 'Sólidos geométricos amarelos e azuis: pirâmide, cone e cubo.', description: 'Proposta de apresentação visual das formas geométricas e de suas características, com apoio em Libras.' },
]

export const studentSections = {
  materiais: { title: 'Materiais', description: 'Aqui você poderá encontrar conteúdos adaptados, recursos visuais e materiais em Libras. A biblioteca está em desenvolvimento; as prévias demonstrativas estão disponíveis no início.' },
  glossarios: { title: 'Glossários', description: 'Esta seção reunirá explicações de termos escolares e referências em Libras. Os glossários estão em preparação e ainda não há sinais ou vídeos disponíveis.' },
  atividades: { title: 'Atividades', description: 'Aqui você poderá realizar exercícios e acompanhar seu progresso. As atividades e o acompanhamento de resultados estão em desenvolvimento.' },
  perfil: { title: 'Meu Perfil', description: 'Este espaço permitirá consultar e atualizar seus dados e preferências. A edição do perfil está em desenvolvimento.' },
  configuracoes: { title: 'Configurações', description: 'Este espaço reunirá as preferências da plataforma. As opções de personalização estão em desenvolvimento.' },
} as const
export type StudentSection = keyof typeof studentSections
