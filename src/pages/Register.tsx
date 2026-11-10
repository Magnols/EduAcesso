import { Navigate } from 'react-router-dom'
import { LoginBrandPanel } from '../components/LoginBrandPanel'
import { RegisterForm } from '../components/RegisterForm'
import { profileInfo, useDemoSession } from '../services/mockAuth'
import '../styles/login.css'
import '../styles/register.css'

export function Register() {
  const session = useDemoSession()
  if (session) return <Navigate to={profileInfo[session.profile].path} replace />
  return (
    <main className="login-page register-page">
      <LoginBrandPanel />
      <div className="login-form-panel"><RegisterForm /></div>
    </main>
  )
}
