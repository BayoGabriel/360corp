import type { ProfileStat } from '../departments-content'
import { DepartmentIcon } from './DepartmentIcon'
import styles from './DepartmentsPage.module.css'

interface ProfileStatCardProps {
  stat: ProfileStat
}

export function ProfileStatCard({ stat }: ProfileStatCardProps) {
  return (
    <a className={styles.profileStat} href={stat.href}>
      {stat.badge !== undefined && (
        <span className={styles.profileStatBadge}>{stat.badge}</span>
      )}
      <span className={styles.profileStatLabel}>{stat.label}</span>
      <span className={styles.profileStatValue}>{stat.value}</span>
      <span className={styles.profileStatIcon}>
        <DepartmentIcon name={stat.icon} />
      </span>
      <span className={styles.moduleArrow} aria-hidden="true">
        →
      </span>
    </a>
  )
}
