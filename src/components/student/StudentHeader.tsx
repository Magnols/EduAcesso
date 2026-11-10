import { DashboardHeader } from '../dashboard/DashboardHeader'
import { studentDashboardConfig } from '../../data/dashboardConfigs'
export function StudentHeader(props: { onOpenMenu: () => void; menuOpen: boolean }) {
  return <DashboardHeader config={studentDashboardConfig} {...props} />
}
