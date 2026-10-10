import { useState } from 'react'
import type { ReactNode } from 'react'
import { DASHBOARD_TOPBAR_COPY } from './dashboard-nav'
import { DashboardSidebar } from './DashboardSidebar'
import { DashboardTopbar } from './DashboardTopbar'
import styles from './DashboardLayout.module.css'

interface DashboardLayoutProps {
  children?: ReactNode
  activeHref?: string
}

export function DashboardLayout({ children, activeHref }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className={styles.layout}>
      <DashboardSidebar
        activeHref={activeHref}
        open={sidebarOpen}
        onNavigate={closeSidebar}
      />
      <div className={styles.body}>
        <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} />
        <main className={styles.main}>{children}</main>
      </div>
      {sidebarOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label={DASHBOARD_TOPBAR_COPY.menuCloseLabel}
          onClick={closeSidebar}
        />
      )}
    </div>
  )
}
