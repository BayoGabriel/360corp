import type { ReactNode } from 'react'
import type { DepartmentIconName } from '../departments-content'
import styles from './DepartmentsPage.module.css'

const ICON_PATHS: Record<DepartmentIconName, ReactNode> = {
  'human-resources': (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="8" r="2.6" />
      <path d="M3.5 19.5a4.5 4.5 0 0 1 9 0M11.5 19.5a4.5 4.5 0 0 1 9 0" />
    </>
  ),
  marketing: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l4.5 3.8a0.6 0.6 0 0 0 1-.5V5.7a0.6 0.6 0 0 0-1-.5L7 9H5a1 1 0 0 0-1 1z" />
      <path d="M15.5 9.5a4 4 0 0 1 0 5M18 7a7.5 7.5 0 0 1 0 10" />
    </>
  ),
  accounting: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </>
  ),
  production: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="6.5" cy="12" r="2.2" />
      <circle cx="17.5" cy="12" r="2.2" />
      <circle cx="4" cy="19" r="2.2" />
      <circle cx="12" cy="19" r="2.2" />
      <circle cx="20" cy="19" r="2.2" />
      <path d="M10.5 6.6l-2.5 3.4M13.5 6.6l2.5 3.4M5.7 14l-1 3M7.3 14l2.7 3M16.7 14l-2.7 3M18.3 14l1 3" />
    </>
  ),
  inventory: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5h6v3H9zM8.5 12l2 2 4-4.5" />
    </>
  ),
  logistics: (
    <>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18.5" r="1.8" />
      <circle cx="17" cy="18.5" r="1.8" />
    </>
  ),
  employee: (
    <>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="8" r="2.6" />
      <path d="M3.5 19.5a4.5 4.5 0 0 1 9 0M11.5 19.5a4.5 4.5 0 0 1 9 0" />
    </>
  ),
  trainings: (
    <>
      <rect x="4" y="4" width="16" height="11" rx="1.5" />
      <path d="M8 8.5l3-2v6l-3-2M12 18.5v2M7 20.5h10" />
    </>
  ),
  salary: (
    <>
      <rect x="3" y="7" width="13" height="12" rx="2" />
      <path d="M3 10.5h13M7 15h3" />
      <path d="M17.5 5.5h2a1.5 1.5 0 0 1 0 3h-2zM19.5 3.5v2M19.5 8.5v2" />
    </>
  ),
  query: (
    <>
      <path d="M4 20.5c1-4 3-5.5 7-5.5h2l5 2c1 .4 1 1.6-.2 1.6H11" />
      <circle cx="15" cy="8" r="5.5" />
      <path d="M13.6 6.6a1.5 1.5 0 0 1 2.9.6c0 1-1.5 1.3-1.5 2.3M15 11.3v.2" />
    </>
  ),
  complaints: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M4 20a5 5 0 0 1 10 0" />
      <circle cx="16.5" cy="7" r="4.5" />
      <path d="M16.5 5.2v2.3M16.5 9.3v.2" />
    </>
  ),
  application: (
    <>
      <rect x="5" y="3" width="13" height="18" rx="2" />
      <path d="M8.5 8h6M8.5 11.5h6" />
      <circle cx="16.5" cy="17.5" r="4" />
      <path d="M14.8 17.5l1.2 1.2 2-2.2" />
    </>
  ),
  awards: (
    <>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M12 6.8l.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3z" />
      <path d="M9.5 12.8L8 20.5l4-1.8 4 1.8-1.5-7.7" />
    </>
  ),
  events: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3v4M15.5 3v4" />
      <circle cx="16" cy="16" r="3.5" />
      <path d="M16 14.3V16l1.3.9" />
    </>
  ),
  recruitments: (
    <>
      <circle cx="10" cy="8" r="3.5" />
      <path d="M4.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="16" cy="15.5" r="4" />
      <path d="M18.8 18.3L21.5 21" />
    </>
  ),
  attendance: (
    <>
      <circle cx="9.5" cy="7.5" r="3" />
      <path d="M4 20a5.5 5.5 0 0 1 11 0" />
      <path d="M14.5 14.5l2 2 3.5-4" />
    </>
  ),
  requests: (
    <>
      <circle cx="10" cy="7.5" r="3" />
      <path d="M4.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="7" r="4.5" />
      <path d="M15.7 5.8a1.4 1.4 0 0 1 2.7.5c0 .9-1.4 1.2-1.4 2.1M17 10v.2" />
    </>
  ),
  regulatory: (
    <>
      <rect x="4" y="3" width="12" height="18" rx="2" />
      <path d="M7 7.5h6M7 10.5h6" />
      <path d="M13 18.5l2.5-1v-2.5l2.5-1.5 2.5 1.5v2.5l-3.5 3z" />
      <path d="M16.5 16.5l1 1 1.8-2" />
    </>
  ),
  policy: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8.5 7.5h7M8.5 10.5h7" />
      <circle cx="12" cy="15.5" r="3" />
      <path d="M12 13.8v1.7l1.1.8" />
    </>
  ),
  exits: (
    <>
      <circle cx="10" cy="7.5" r="3" />
      <path d="M4.5 20a5.5 5.5 0 0 1 11 0" />
      <circle cx="17.5" cy="16.5" r="4" />
      <path d="M16.2 15.2l2.6 2.6M18.8 15.2l-2.6 2.6" />
    </>
  ),
  schedule: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3v4M15.5 3v4" />
      <path d="M9 15.5l2 2 4-4.5" />
    </>
  ),
  'complaints-employee': (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M4.5 19.5a4.5 4.5 0 0 1 9 0" />
      <circle cx="17" cy="7" r="4" />
      <path d="M17 5.2v2.5M17 9.5v.2" />
    </>
  ),
  'complaints-general': (
    <>
      <path d="M7 3h10a1 1 0 0 1 1 1v11M7 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5" />
      <path d="M9 7.5h6M9 10.5h6" />
      <path d="M14.5 21.5v-6.5l4.8 3.2-1.9.5z" />
    </>
  ),
  'request-sent': (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M4.5 19.5a4.5 4.5 0 0 1 9 0" />
      <circle cx="17" cy="7" r="4.5" />
      <path d="M17 9.2V5.3M15.5 6.8L17 5.3l1.5 1.5" />
    </>
  ),
  'request-received': (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M4.5 19.5a4.5 4.5 0 0 1 9 0" />
      <circle cx="17" cy="7" r="4.5" />
      <path d="M17 4.8v3.9M15.5 7.2L17 8.7l1.5-1.5" />
    </>
  ),
}

interface DepartmentIconProps {
  name: DepartmentIconName
}

export function DepartmentIcon({ name }: DepartmentIconProps) {
  return (
    <svg
      className={styles.cardIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}
