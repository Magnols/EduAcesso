import { Navigate } from 'react-router-dom'
import { LoginBrandPanel } from '../components/LoginBrandPanel'
import { LoginForm } from '../components/LoginForm'
import { profileInfo, useDemoSession } from '../services/mockAuth'
import '../styles/login.css'

export function Login() {
  const session = useDemoSession()
  if (session) return <Navigate to={profileInfo[session.profile].path} replace />
  return (
    <main className="login-page">
      <LoginBrandPanel />
      <div className="login-form-panel"><LoginForm /></div>
    </main>
  )
}
