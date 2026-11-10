import { BookOpen, ClipboardCheck, Trophy } from 'lucide-react'
import type { EducationModule } from '../../data/modulesMockData'
import { useModuleProgress } from '../../context/moduleProgressContext'
import { moduleSummary } from '../../services/moduleProgress'
export function ModuleAchievements({ module }: { module: EducationModule }) {
  const { state } = useModuleProgress()
  const summary = moduleSummary(module, state)
  return <section className="module-achievements" aria-labelledby="achievements-title"><div><h2 id="achievements-title">Conquistas do Módulo</h2><p>Acompanhe suas conquistas e avance no aprendizado.</p></div><div><BookOpen aria-hidden="true" /><p><strong>{summary.lessonsCompleted}/{module.lessons.length}</strong>Aulas concluídas</p></div><div><ClipboardCheck aria-hidden="true" /><p><strong>{summary.activitiesCompleted}/{module.activities.length}</strong>Atividades concluídas</p></div><div><Trophy aria-hidden="true" /><p><strong>{summary.percent === 100 ? 'Avanço concluído' : 'Em andamento'}</strong>{summary.percent === 100 ? 'Demonstração concluída' : 'Continue estudando!'}</p></div></section>
}
