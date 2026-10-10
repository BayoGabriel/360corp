import { DashboardLayout } from '../../app/layouts/dashboard/DashboardLayout'
import { DashboardPage } from '../../features/dashboard'
import { FeedsPage } from '../../features/feeds'

interface DashboardRouteProps {
  activeHref: string
}

export function DashboardRoute({ activeHref }: DashboardRouteProps) {
  return (
    <DashboardLayout activeHref={activeHref}>
      {activeHref === '/dashboard' && <DashboardPage />}
      {activeHref === '/feeds' && <FeedsPage />}
    </DashboardLayout>
  )
}
