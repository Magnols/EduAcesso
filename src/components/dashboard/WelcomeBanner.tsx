import { useDemoSession } from '../../services/mockAuth'
type WelcomeBannerProps = { fallbackName: string; description: string; image: string; imageAlt: string }
export function WelcomeBanner({ fallbackName, description, image, imageAlt }: WelcomeBannerProps) {
  const session = useDemoSession()
  const firstName = session?.name.trim().split(/\s+/)[0] || fallbackName
  return (
    <section className="student-welcome" aria-labelledby="dashboard-welcome-title">
      <div className="student-welcome-copy"><h1 id="dashboard-welcome-title">Olá, {firstName}!</h1><p>{description}</p><span className="student-accent" aria-hidden="true" /></div>
      <img src={image} width="766" height="266" alt={imageAlt} fetchPriority="high" />
    </section>
  )
}
