import { DASHBOARD_STATS } from '../dashboard-content'
import { DepartmentMembersSection } from './DepartmentMembersSection'
import { RecentFeedsPanel } from './RecentFeedsPanel'
import { SalesReportSection } from './SalesReportSection'
import { StatCard } from './StatCard'
import styles from './DashboardPage.module.css'

export function DashboardPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.srOnly}>Dashboard</h1>
      <ul className={styles.statsGrid}>
        {DASHBOARD_STATS.map((stat) => (
          <li key={stat.id}>
            <StatCard stat={stat} />
          </li>
        ))}
      </ul>
      <div className={styles.overviewGrid}>
        <div className={styles.overviewMain}>
          <SalesReportSection />
          <DepartmentMembersSection />
        </div>
        <RecentFeedsPanel />
      </div>
    </div>
  )
}
