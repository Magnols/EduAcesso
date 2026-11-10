import { DashboardSidebar } from '../dashboard/DashboardSidebar'
import { studentDashboardConfig } from '../../data/dashboardConfigs'
export function StudentSidebar(props: { mobile?: boolean; onNavigate?: () => void }) {
  return <DashboardSidebar config={studentDashboardConfig} {...props} />
}
