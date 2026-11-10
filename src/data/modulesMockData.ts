export type ProgressValue = 'completed' | 'inProgress' | 'pending'
export type ItemStatus = ProgressValue | 'locked'
export type Lesson = { id: string; title: string; duration: number; type: 'Vídeo em Libras' | 'Leitura adaptada'; initial: ProgressValue; image?: string; objective: string; text: string }
export type ModuleActivityData = { id: string; title: string; description: string; instructions: string; initial: ProgressValue; kind: 'practice' | 'quiz' | 'forum' }
export type EducationModule = { id: string; number: number; title: string; description: string; image: string; lessons: Lesson[]; activities: ModuleActivityData[] }

export const educationModules: EducationModule[] = [
  {
    id: 'educacao-inclusiva', number: 1, title: 'Educação Inclusiva e Libras',
    description: 'Conheça os fundamentos da inclusão escolar, a importância da Libras e práticas para uma comunicação mais acessível no ambiente educacional.',
    image: '/images/module-inclusive.png',
    lessons: [
      { id: 'educacao-inclusiva', title: 'O que é Educação Inclusiva?', duration: 12, type: 'Vídeo em Libras', initial: 'completed', objective: 'Reconhecer barreiras à participação na escola.', text: 'Uma escola inclusiva procura assegurar a participação de cada estudante. Materiais claros, diferentes formas de comunicação e um ambiente acolhedor podem ampliar as oportunidades de aprender.' },
      { id: 'introducao-libras', title: 'Introdução à Libras', duration: 15, type: 'Vídeo em Libras', initial: 'completed', objective: 'Reconhecer a Libras como língua e valorizar seus usuários.', text: 'A Libras é uma língua de modalidade visual e espacial. A comunicação com pessoas surdas envolve atenção às suas preferências linguísticas e respeito à comunidade surda. Esta prévia não ensina sinais específicos.' },
      { id: 'comunicacao-acessibilidade', title: 'Comunicação e Acessibilidade', duration: 14, type: 'Leitura adaptada', initial: 'inProgress', objective: 'Identificar possibilidades de tornar uma mensagem mais acessível.', text: 'Combinar textos claros, imagens contextualizadas e recursos de acessibilidade pode favorecer a compreensão. É importante verificar com os estudantes quais recursos atendem às suas necessidades e oferecer tempo para perguntas.' },
      { id: 'praticas-inclusivas', title: 'Práticas Inclusivas na Escola', duration: 16, type: 'Leitura adaptada', initial: 'pending', objective: 'Relacionar a participação escolar a práticas de acolhimento.', text: 'Organizar a sala para favorecer a visibilidade, disponibilizar materiais com antecedência e planejar atividades em colaboração são exemplos de práticas que podem apoiar a inclusão. Cada contexto precisa ser considerado com os participantes.' },
    ],
    activities: [
      { id: 'quiz-fixacao', title: 'Quiz de Fixação', description: 'Teste seus conhecimentos sobre inclusão.', instructions: 'Esta é uma prévia do futuro quiz. Leia as instruções e confirme a revisão demonstrativa. Não há perguntas avaliativas nem atribuição de nota nesta etapa.', initial: 'completed', kind: 'quiz' },
      { id: 'atividade-pratica', title: 'Atividade Prática', description: 'Analise uma situação escolar e proponha soluções.', instructions: 'Situação fictícia: uma atividade depende apenas de explicações orais. Registre uma proposta para ampliar as formas de acesso à informação. Use somente exemplos fictícios, sem nomes ou dados pessoais.', initial: 'inProgress', kind: 'practice' },
      { id: 'forum-discussao', title: 'Fórum de Discussão', description: 'Troque ideias sobre acessibilidade e Libras.', instructions: 'Escreva uma observação fictícia sobre comunicação acessível. Este é um rascunho local de participação: nada será publicado ou enviado a outras pessoas.', initial: 'pending', kind: 'forum' },
    ],
  },
  {
    id: 'diversidade-da-vida', number: 2, title: 'Diversidade da Vida',
    description: 'Estude os seres vivos, suas características e a importância da diversidade biológica no nosso planeta.', image: '/images/module-biodiversity.png',
    lessons: [
      { id: 'biodiversidade', title: 'O que é Biodiversidade?', duration: 10, type: 'Vídeo em Libras', initial: 'completed', objective: 'Reconhecer diferentes dimensões da diversidade biológica.', text: 'Biodiversidade abrange a variedade de seres vivos, suas diferenças e os ambientes em que vivem. Observar uma área verde pode revelar plantas, animais e relações entre organismos.' },
      { id: 'seres-vivos', title: 'Seres Vivos e suas Características', duration: 12, type: 'Vídeo em Libras', initial: 'pending', objective: 'Observar características e diferenças entre os seres vivos.', text: 'Os seres vivos apresentam grande variedade de formas e modos de vida. Plantas, animais e microrganismos participam de relações com o ambiente. Comparar exemplos ajuda a perceber semelhanças e diferenças.' },
      { id: 'conservacao', title: 'Conservação da Biodiversidade', duration: 15, type: 'Leitura adaptada', initial: 'pending', objective: 'Relacionar a conservação à proteção de ambientes e espécies.', text: 'Conservar a biodiversidade envolve proteger habitats e considerar os efeitos das ações humanas. Cuidar de áreas verdes e reduzir impactos sobre os ambientes são temas que podem ser discutidos na escola.' },
    ],
    activities: [
      { id: 'identificando-seres-vivos', title: 'Atividade 1 — Identificando Seres Vivos', description: 'Observe exemplos de seres vivos.', instructions: 'Descreva um ser vivo de um cenário fictício e uma característica que você observou. Não inclua dados pessoais.', initial: 'completed', kind: 'practice' },
      { id: 'diversidade-ambiente', title: 'Atividade 2 — Diversidade no Ambiente', description: 'Observe a diversidade de um ambiente.', instructions: 'Imagine um jardim e descreva dois seres vivos que poderiam estar nesse ambiente. A resposta é apenas um registro demonstrativo, sem avaliação automática.', initial: 'inProgress', kind: 'practice' },
      { id: 'preservacao-vida', title: 'Atividade 3 — Preservação da Vida', description: 'Reflita sobre a conservação.', instructions: 'Proponha uma ação fictícia para cuidar de uma área verde da escola e explique sua ideia.', initial: 'pending', kind: 'practice' },
    ],
  },
  {
    id: 'comunicacao-inclusao', number: 3, title: 'Comunicação e Inclusão',
    description: 'Desenvolva habilidades de comunicação, conheça recursos de acessibilidade e práticas para uma convivência escolar mais inclusiva.', image: '/images/module-communication.png',
    lessons: [
      { id: 'inclusao', title: 'O que é Inclusão?', duration: 10, type: 'Leitura adaptada', initial: 'completed', image: '/images/lesson-inclusion.png', objective: 'Relacionar inclusão e participação.', text: 'Incluir envolve reconhecer diferenças e remover barreiras à participação. Na escola, isso exige ouvir os estudantes e planejar oportunidades de aprendizagem com diferentes recursos.' },
      { id: 'recursos-acessibilidade', title: 'Recursos de Acessibilidade', duration: 12, type: 'Leitura adaptada', initial: 'completed', image: '/images/lesson-accessibility.png', objective: 'Reconhecer recursos que apoiam o acesso à informação.', text: 'Legendas, textos claros, imagens contextualizadas e materiais em Libras são exemplos de recursos de acesso à informação. A escolha dos recursos deve considerar as necessidades e preferências dos estudantes.' },
      { id: 'inclusao-escola', title: 'Inclusão na Escola', duration: 14, type: 'Leitura adaptada', initial: 'inProgress', image: '/images/lesson-school.png', objective: 'Identificar oportunidades de colaboração no cotidiano escolar.', text: 'A inclusão na escola depende da colaboração entre estudantes, professores, intérpretes e outros profissionais. Planejar em conjunto e conversar sobre barreiras pode ajudar a construir atividades mais acessíveis.' },
      { id: 'convivencia', title: 'Boas Práticas de Convivência', duration: 16, type: 'Leitura adaptada', initial: 'pending', image: '/images/lesson-coexistence.png', objective: 'Reconhecer atitudes de respeito na convivência.', text: 'Respeitar o tempo de comunicação, acolher perguntas e evitar suposições sobre as pessoas são atitudes que favorecem a convivência. Perguntar como colaborar é um caminho para conhecer as preferências de cada pessoa.' },
    ],
    activities: [
      { id: 'pratica-comunicacao', title: 'Atividade de Comunicação', description: 'Pratique o que você aprendeu nas aulas e avalie seus conhecimentos.', instructions: 'Situação fictícia: um aviso escolar só está disponível em áudio. Proponha duas formas de tornar a mensagem mais acessível. O registro não recebe nota automática.', initial: 'pending', kind: 'practice' },
      { id: 'reflexao-inclusao', title: 'Reflexão sobre Inclusão', description: 'Reflita sobre uma convivência escolar mais inclusiva.', instructions: 'Escreva uma sugestão para melhorar a participação dos estudantes em uma atividade fictícia. Esta interação não comprova o objetivo de 70% de aproveitamento.', initial: 'pending', kind: 'practice' },
    ],
  },
]
