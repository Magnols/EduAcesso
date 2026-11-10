import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BookOpen, ClipboardCheck, Play } from 'lucide-react'
import { educationModules } from '../../../data/modulesMockData'
import { useModuleProgress } from '../../../context/moduleProgressContext'
import { continuationPath, itemStatus, moduleSummary } from '../../../services/moduleProgress'
import { ModuleBanner } from '../../../components/modules/ModuleBanner'
import { ModuleProgress } from '../../../components/modules/ModuleProgress'
import { ModuleAchievements } from '../../../components/modules/ModuleAchievements'
import { LessonCard } from '../../../components/modules/LessonCard'
import { ActivityCard } from '../../../components/modules/ActivityCard'
import { ModuleBreadcrumb, BackToModules } from '../../../components/modules/ModuleBreadcrumb'
import { ModuleTabs } from '../../../components/modules/ModuleTabs'
import type { ModuleTab } from '../../../components/modules/ModuleTabs'
import '../../../styles/modules.css'

export function ModuleOverview() {
  const { moduloId } = useParams()
  const module = educationModules.find(item => item.id === moduloId)
  const { state, announcement } = useModuleProgress()
  const [tab, setTab] = useState<ModuleTab>('lessons')
  if (!module) return <section className="module-detail modules-page"><h1>Módulo não encontrado</h1><BackToModules /></section>
  const communication = module.number === 3
  const availableActivity = module.activities.find(item => { const status = itemStatus(module, state, 'activities', item.id); return status !== 'completed' && status !== 'locked' }) || module.activities[0]
  const summary = moduleSummary(module, state)
  const lessons = <section className={`module-panel${communication ? ' module-visual-panel' : ''}`} aria-labelledby="lessons-heading"><h2 id="lessons-heading"><BookOpen aria-hidden="true" />Aulas do Módulo</h2>{module.number === 2 && <p>Assista, leia e aprenda com conteúdos acessíveis em preparação.</p>}<div className={communication ? 'module-visual-lessons' : 'module-items'}>{module.lessons.map((lesson, index) => <LessonCard key={lesson.id} module={module} lesson={lesson} index={index} visual={communication} />)}</div></section>
  const activities = <section className="module-panel" aria-labelledby="activities-heading"><h2 id="activities-heading"><ClipboardCheck aria-hidden="true" />{module.number === 1 ? 'Atividades do Módulo' : 'Atividades'}</h2><div className="module-items">{module.activities.map(activity => <ActivityCard key={activity.id} module={module} activity={activity} />)}</div></section>
  return (
    <div className={`modules-page module-overview module-variant-${module.number}`}>
      {communication ? <BackToModules /> : <ModuleBreadcrumb module={module} />}
      <ModuleBanner module={module} />
      <ModuleProgress module={module} compact={communication} />
      <p className="module-demo-notice">Progresso demonstrativo: conclusões iniciais de exemplo. Cada aula ou atividade concluída conta igualmente. Vídeos em Libras em preparação; nenhuma nota é atribuída automaticamente.{communication && ' Aproveitamento: não avaliado. O objetivo de 70% depende de futura avaliação e é diferente do progresso.'}</p>
      {communication ? <>
        <ModuleTabs selected={tab} onSelect={setTab} />
        <div role="tabpanel" id="module-panel-lessons" aria-labelledby="module-tab-lessons" tabIndex={0} className="module-tab-panel" hidden={tab !== 'lessons'}>
          <div className="module-communication-layout">{lessons}<aside className="module-panel module-activity-callout"><h2><ClipboardCheck aria-hidden="true" />Atividade do Módulo</h2><p>Pratique o que você aprendeu nas aulas e avalie seus conhecimentos.</p><p className="module-muted">Registro demonstrativo, sem atribuição de nota.</p><Link className="button" to={`/estudante/modulos/${module.id}/atividades/${availableActivity.id}`}>Realizar atividade</Link></aside></div>
        </div>
        <div role="tabpanel" id="module-panel-activities" aria-labelledby="module-tab-activities" tabIndex={0} className="module-tab-panel" hidden={tab !== 'activities'}>{activities}</div>
        <Link className="button module-bottom-continue" to={continuationPath(module, state)}><Play aria-hidden="true" />{summary.percent === 100 ? 'Rever módulo' : 'Continuar módulo'}</Link>
      </> : <div className="module-two-columns">{lessons}{activities}</div>}
      {module.number === 2 && <ModuleAchievements module={module} />}
      <p className="module-announcement" role="status">{announcement}</p>
    </div>
  )
}
