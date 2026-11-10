import { BookA, BookOpen, CalendarDays, ChartColumn, ClipboardCheck, FileCheck2, GraduationCap, Hand, Home, Presentation, Settings, Sparkles, UserRound, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type DashboardConfig = {
  role: 'estudante' | 'professor' | 'interprete'
  label: string
  title: string
  basePath: string
  icon: LucideIcon
  notification: string
  items: { path: string; label: string; icon: LucideIcon }[]
}
export const studentDashboardConfig: DashboardConfig = {
  role: 'estudante', label: 'Estudante', title: 'Painel do Estudante', basePath: '/estudante', icon: GraduationCap,
  notification: 'Boas-vindas ao EduAcesso! Os materiais apresentados são prévias em preparação.',
  items: [
    { path: '/estudante', label: 'Início', icon: Home },
    { path: '/estudante/materiais', label: 'Materiais', icon: BookOpen },
    { path: '/estudante/glossarios', label: 'Glossários', icon: BookA },
    { path: '/estudante/atividades', label: 'Atividades', icon: ClipboardCheck },
    { path: '/estudante/perfil', label: 'Meu Perfil', icon: UserRound },
    { path: '/estudante/configuracoes', label: 'Configurações', icon: Settings },
  ],
}
export const professorDashboardConfig: DashboardConfig = {
  role: 'professor', label: 'Professor', title: 'Painel do Professor', basePath: '/professor', icon: Presentation,
  notification: 'Demonstração: conheça o fluxo planejado de adaptação e revisão. Os status dos conteúdos são exemplos fictícios.',
  items: [
    { path: '/professor', label: 'Início', icon: Home },
    { path: '/professor/conteudos', label: 'Conteúdos', icon: BookOpen },
    { path: '/professor/adaptacao', label: 'Adaptação por IA', icon: Sparkles },
    { path: '/professor/revisao', label: 'Revisão', icon: ClipboardCheck },
    { path: '/professor/turmas', label: 'Turmas', icon: UsersRound },
    { path: '/professor/relatorios', label: 'Relatórios', icon: ChartColumn },
    { path: '/professor/perfil', label: 'Meu Perfil', icon: UserRound },
    { path: '/professor/configuracoes', label: 'Configurações', icon: Settings },
  ],
}

export const interpreterDashboardConfig: DashboardConfig = {
  role: 'interprete', label: 'Intérprete', title: 'Painel do Intérprete de Libras', basePath: '/interprete', icon: Hand,
  notification: 'Demonstração: conheça os fluxos planejados de preparação linguística e revisão. Os recursos em destaque são exemplos; os conteúdos estão em preparação.',
  items: [
    { path: '/interprete', label: 'Início', icon: Home },
    { path: '/interprete/materiais', label: 'Materiais de Apoio', icon: BookOpen },
    { path: '/interprete/preparacao', label: 'Preparação Linguística', icon: Hand },
    { path: '/interprete/traducao', label: 'Tradução e Revisão', icon: FileCheck2 },
    { path: '/interprete/agenda', label: 'Agenda', icon: CalendarDays },
    { path: '/interprete/relatorios', label: 'Relatórios', icon: ChartColumn },
    { path: '/interprete/perfil', label: 'Meu Perfil', icon: UserRound },
    { path: '/interprete/configuracoes', label: 'Configurações', icon: Settings },
  ],
}
