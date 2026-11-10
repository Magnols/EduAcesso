import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { profileInfo, useDemoSession } from '../services/mockAuth'
import type { Profile } from '../services/mockAuth'

type ProtectedRouteProps = { profile: Profile; children: ReactNode }
export function ProtectedRoute({ profile, children }: ProtectedRouteProps) {
  const session = useDemoSession()
  if (!session) return <Navigate to="/login" replace />
  if (session.profile !== profile) return <Navigate to={profileInfo[session.profile].path} replace />
  return children
}
