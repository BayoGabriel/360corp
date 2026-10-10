import type { ReactNode } from 'react'
import type { DashboardNavIconName } from './dashboard-nav'
import styles from './DashboardLayout.module.css'

const ICON_PATHS: Record<DashboardNavIconName, ReactNode> = {
  dashboard: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  feeds: <path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-5 4v-15a1 1 0 0 1 1-1z" />,
  contacts: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h4M8 13h6" />
      <circle cx="15" cy="10" r="1.4" />
    </>
  ),
  branch: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M4 15V5a1 1 0 0 1 1-1h10" />
    </>
  ),
  departments: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="18.5" r="2.4" />
      <circle cx="19" cy="18.5" r="2.4" />
      <path d="M12 7.4V11m0 0H5v5.1m7-5.1h7v5.1" />
    </>
  ),
  schedule: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </>
  ),
  tasks: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 12.5l2.6 2.6L16.4 9" />
    </>
  ),
  inventory: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <circle cx="14.5" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  sales: (
    <>
      <path d="M3.5 3.5H11L20 12.5 11.5 21 3.5 12.5z" />
      <circle cx="8.5" cy="8.5" r="1.3" />
    </>
  ),
  constants: (
    <>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <circle cx="4.5" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="18" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  messaging: <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />,
  conferencing: (
    <>
      <rect x="3" y="7" width="12" height="10" rx="2" />
      <path d="M15 10.5l6-3v9l-6-3" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.6m0 13.8v2.6M2.5 12h2.6m13.8 0h2.6M5.2 5.2l1.8 1.8m10 10 1.8 1.8m0-13.6-1.8 1.8m-10 10-1.8 1.8" />
    </>
  ),
}

interface DashboardNavIconProps {
  name: DashboardNavIconName
}

export function DashboardNavIcon({ name }: DashboardNavIconProps) {
  return (
    <svg
      className={styles.navIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}
