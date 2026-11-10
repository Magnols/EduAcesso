import type { EducationModule } from '../../data/modulesMockData'
export function ModuleBanner({ module }: { module: EducationModule }) {
  return <section className="module-banner" aria-labelledby="module-title"><div><span className="module-number">{module.number === 2 ? 'Módulo Educacional 2' : `Módulo ${module.number}`}</span><h1 id="module-title">{module.title}</h1><p>{module.description}</p><span className="student-accent" aria-hidden="true" /></div><img src={module.image} alt="Ilustração educacional de um estudante com notebook e elementos de comunicação visual. Os gestos são apenas ilustrativos." width="670" height="266" /></section>
}
