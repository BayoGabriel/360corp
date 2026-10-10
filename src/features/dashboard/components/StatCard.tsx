import type { DashboardStat } from '../dashboard-content'
import { StatIcon } from './StatIcon'
import styles from './DashboardPage.module.css'

interface StatCardProps {
  stat: DashboardStat
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className={styles.statCard}>
      <p className={styles.statLabel}>{stat.label}</p>
      <p className={styles.statValue}>{stat.value}</p>
      <StatIcon name={stat.icon} />
      <a
        className={styles.statLink}
        href={stat.href}
        aria-label={`View ${stat.label}`}
      >
        <span className={styles.statArrow} aria-hidden="true">
          →
        </span>
      </a>
    </article>
  )
}
