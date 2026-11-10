export type InterpreterResource = {
  id: string
  category: string
  title: string
  type: 'Guia em vídeo' | 'Glossário ilustrado' | 'Videoaula'
  status: 'Disponível' | 'Em preparação'
  image: string
  imageAlt: string
  description: string
}
export const interpreterResources: InterpreterResource[] = [
  { id: 'educacao-inclusiva-libras', category: 'Guia Prático', title: 'Educação Inclusiva em Libras', type: 'Guia em vídeo', status: 'Disponível', image: '/images/resource-inclusive.png', imageAlt: 'Imagem ilustrativa de duas pessoas se comunicando por videochamada em um ambiente educacional.', description: 'Proposta de guia sobre educação inclusiva e contextos de atuação do intérprete. O vídeo ainda não está disponível.' },
  { id: 'sinais-academicos', category: 'Vocabulário', title: 'Sinais Acadêmicos', type: 'Glossário ilustrado', status: 'Disponível', image: '/images/resource-hands.png', imageAlt: 'Imagem ilustrativa de mãos em diferentes posições, sem correspondência validada com sinais de Libras.', description: 'Proposta de glossário temático para preparação em contextos educacionais. Não há sinais ou traduções validados nesta prévia; a imagem é apenas ilustrativa.' },
  { id: 'atuacao-interprete-escola', category: 'Formação', title: 'Atuação do Intérprete na Escola', type: 'Videoaula', status: 'Em preparação', image: '/images/resource-training.png', imageAlt: 'Livros de capa verde-água e fones de ouvido sobre uma superfície clara.', description: 'Proposta de formação sobre a atuação do intérprete no ambiente escolar. A videoaula está em preparação.' },
]
export const preparationSteps = [
  'Consultar os conteúdos que serão trabalhados em aula.',
  'Identificar termos técnicos e conceitos específicos.',
  'Pesquisar equivalentes e sinais em Libras.',
  'Organizar glossários temáticos.',
  'Registrar observações sobre estratégias de interpretação.',
  'Preparar recursos visuais de apoio.',
]
export const translationSteps = [
  'Professor disponibiliza o conteúdo.',
  'Intérprete analisa o material.',
  'Intérprete identifica necessidades linguísticas.',
  'Prepara estratégias de tradução e interpretação.',
  'Registra observações e sugestões de acessibilidade.',
  'Realiza revisão linguística quando aplicável.',
  'O material revisado poderá ser disponibilizado aos estudantes.',
]
export const interpreterSections = {
  materiais: { title: 'Materiais de Apoio', description: 'Esta seção reunirá guias, referências e recursos para interpretação em contextos educacionais. A biblioteca está em desenvolvimento. As prévias do início são exemplos demonstrativos, e os conteúdos estão em preparação.' },
  preparacao: { title: 'Preparação Linguística', description: 'Esta área apoiará a preparação do intérprete antes das atividades escolares. O recurso está em desenvolvimento e não oferece glossários completos, sinais gerados automaticamente ou traduções nesta etapa.' },
  traducao: { title: 'Tradução e Revisão', description: 'Esta área apoiará a organização das traduções, observações e revisões linguísticas. O recurso está em desenvolvimento. A tradução e a interpretação devem respeitar as particularidades linguísticas e culturais da comunidade surda.' },
  agenda: { title: 'Agenda', description: 'A agenda está em desenvolvimento. Será planejada para organizar atividades, preparação de aulas, compromissos de interpretação e prazos de revisão. Não há compromissos reais nem calendário interativo nesta demonstração.' },
  relatorios: { title: 'Relatórios', description: 'Os relatórios estão em desenvolvimento. A proposta é reunir materiais consultados, preparações realizadas, revisões registradas e atividades acompanhadas. Nenhum relatório real é gerado nesta etapa.' },
  perfil: { title: 'Meu Perfil', description: 'Consulte os dados da sessão demonstrativa. A edição do perfil e das informações profissionais está em desenvolvimento.' },
  configuracoes: { title: 'Configurações', description: 'Este espaço reunirá as preferências do intérprete na plataforma. As opções de personalização estão em desenvolvimento.' },
} as const
export type InterpreterSection = keyof typeof interpreterSections
