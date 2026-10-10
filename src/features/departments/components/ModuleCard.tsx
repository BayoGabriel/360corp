import type { DepartmentIconName } from '../departments-content'
import { DepartmentIcon } from './DepartmentIcon'
import styles from './DepartmentsPage.module.css'

interface ModuleCardProps {
  label: string
  icon: DepartmentIconName
  href: string
  badge?: number
}

export function ModuleCard({ label, icon, href, badge }: ModuleCardProps) {
  return (
    <a className={styles.moduleCard} href={href}>
      <span className={styles.moduleLabel}>{label}</span>
      <DepartmentIcon name={icon} />
      {badge !== undefined && (
        <span className={styles.moduleBadge}>{badge}</span>
      )}
      <span className={styles.moduleArrow} aria-hidden="true">
        →
      </span>
    </a>
  )
}
