import type { ReactNode } from 'react'
import type { StatIconName } from '../dashboard-content'
import styles from './DashboardPage.module.css'

const STAT_ICONS: Record<StatIconName, ReactNode> = {
  products: (
    <>
      <path d="M3.5 8.5L12 4l8.5 4.5L12 13z" />
      <path d="M3.5 8.5v7L12 20l8.5-4.5v-7" />
      <path d="M12 13v7" />
    </>
  ),
  sales: (
    <>
      <path d="M4 19.5l5.5-6.5 4 3.5 6.5-8.5" />
      <path d="M15 8h5v5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5c.8-3 2.9-4.6 5.5-4.6s4.7 1.6 5.5 4.6" />
      <circle cx="16.5" cy="9.5" r="2.4" />
      <path d="M15.6 15c2.7.2 4.3 1.7 4.9 4.2" />
    </>
  ),
  departments: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="1.5" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
    </>
  ),
}

interface StatIconProps {
  name: StatIconName
}

export function StatIcon({ name }: StatIconProps) {
  return (
    <svg
      className={styles.statIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {STAT_ICONS[name]}
    </svg>
  )
}
