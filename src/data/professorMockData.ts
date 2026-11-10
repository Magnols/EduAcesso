export type ProfessorContent = {
  id: string
  category: string
  title: string
  image: string
  imageAlt: string
  type: 'Adaptado com IA'
  status: 'Revisado' | 'Pendente de revisão'
  description: string
}
export const professorContents: ProfessorContent[] = [
  { id: 'genetica-conceitos-iniciais', category: 'Ciências', title: 'Genética: Conceitos Iniciais', image: '/images/material-genetics.png', imageAlt: 'Representação de uma molécula de DNA em dupla hélice azul.', type: 'Adaptado com IA', status: 'Revisado', description: 'Exemplo planejado de material sobre DNA e hereditariedade, com linguagem clara e recursos visuais.' },
  { id: 'interpretacao-textos', category: 'Língua Portuguesa', title: 'Interpretação de Textos', image: '/images/material-reading.png', imageAlt: 'Pilha de livros com capas coloridas.', type: 'Adaptado com IA', status: 'Pendente de revisão', description: 'Exemplo planejado de material para apoiar a compreensão de textos e a identificação de ideias principais.' },
  { id: 'formas-geometricas', category: 'Matemática', title: 'Formas Geométricas', image: '/images/material-geometry.png', imageAlt: 'Formas geométricas amarelas e azuis sobre uma superfície clara.', type: 'Adaptado com IA', status: 'Revisado', description: 'Exemplo planejado de material visual sobre formas geométricas e suas características.' },
]

export const adaptationSteps = [
  'Professor cria ou seleciona um conteúdo.',
  'Envia o texto para adaptação.',
  'A IA sugere uma versão com linguagem mais acessível.',
  'O professor analisa a sugestão.',
  'O conteúdo é encaminhado para revisão.',
  'Após aprovação, poderá ser disponibilizado aos estudantes.',
]
export const reviewSteps = [
  'Conteúdo criado pelo professor.', 'Sugestão de adaptação.', 'Revisão pedagógica.',
  'Verificação de acessibilidade.', 'Revisão linguística em Libras quando aplicável.',
  'Aprovação.', 'Publicação para os estudantes.',
]
export const professorSections = {
  conteudos: { title: 'Conteúdos', description: 'Este espaço permitirá criar e gerenciar materiais pedagógicos da sua disciplina. A gestão de conteúdos está em desenvolvimento. No início do painel, você encontra prévias fictícias do fluxo planejado.' },
  adaptacao: { title: 'Adaptação por IA', description: 'Este recurso está em desenvolvimento. Futuramente, a inteligência artificial poderá sugerir adaptações de textos e atividades para uma linguagem mais acessível. A IA será uma ferramenta de apoio pedagógico e não substituirá a revisão humana.' },
  revisao: { title: 'Revisão', description: 'Este recurso está em desenvolvimento. O fluxo planejado combina revisão pedagógica, verificação de acessibilidade e revisão linguística em Libras quando aplicável. A aprovação e a publicação ainda não estão disponíveis.' },
  turmas: { title: 'Turmas', description: 'Aqui o professor poderá organizar suas turmas e acompanhar a distribuição de materiais. A gestão de turmas está em desenvolvimento; não há estudantes ou turmas reais cadastrados nesta demonstração.' },
  relatorios: { title: 'Relatórios', description: 'Este espaço reunirá informações sobre o uso dos conteúdos e o acompanhamento pedagógico. Os relatórios estão em desenvolvimento e nenhum dado real de aprendizagem é processado nesta etapa.' },
  perfil: { title: 'Meu Perfil', description: 'Consulte abaixo os dados da sessão demonstrativa. A edição do perfil e das informações profissionais está em desenvolvimento.' },
  configuracoes: { title: 'Configurações', description: 'Este espaço reunirá as preferências do professor na plataforma. As opções de personalização estão em desenvolvimento.' },
} as const
export type ProfessorSection = keyof typeof professorSections
