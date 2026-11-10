import { BookA, BookOpen, ChartColumn, ClipboardCheck, GraduationCap, Home, Presentation, Settings, Sparkles, UserRound, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type DashboardConfig = {
  role: 'estudante' | 'professor'
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
