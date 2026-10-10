import { SiteLogo } from '../../../shared/components/SiteLogo/SiteLogo'
import { DASHBOARD_NAV_ITEMS } from './dashboard-nav'
import { DashboardNavIcon } from './DashboardNavIcon'
import styles from './DashboardLayout.module.css'

interface DashboardSidebarProps {
  activeHref?: string
  open: boolean
  onNavigate: () => void
}

export function DashboardSidebar({
  activeHref,
  open,
  onNavigate,
}: DashboardSidebarProps) {
  const sidebarClass = open
    ? `${styles.sidebar} ${styles.sidebarOpen}`
    : styles.sidebar

  return (
    <aside className={sidebarClass} aria-label="Dashboard navigation">
      <div className={styles.brand}>
        <SiteLogo tone="light" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {DASHBOARD_NAV_ITEMS.map((item) => {
            const isActive = item.href === activeHref
            const linkClass = isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={linkClass}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={onNavigate}
                >
                  <DashboardNavIcon name={item.icon} />
                  <span>{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
