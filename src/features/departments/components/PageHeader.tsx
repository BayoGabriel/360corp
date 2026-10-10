import type { ReactNode } from 'react'
import styles from './DepartmentsPage.module.css'

interface PageHeaderProps {
  title: string
  backHref?: string
  backLabel?: string
  children?: ReactNode
}

export function PageHeader({
  title,
  backHref,
  backLabel = 'Go back',
  children,
}: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      {backHref && (
        <a className={styles.backLink} href={backHref} aria-label={backLabel}>
          <svg
            className={styles.backIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
        </a>
      )}
      <h1 className={styles.pageTitle}>{title}</h1>
      {children && <div className={styles.pageAction}>{children}</div>}
    </div>
  )
}
