import { DashboardLayout } from './DashboardLayout'
import { studentDashboardConfig } from '../data/dashboardConfigs'
export function StudentLayout() {
  return <DashboardLayout config={studentDashboardConfig} />
}
