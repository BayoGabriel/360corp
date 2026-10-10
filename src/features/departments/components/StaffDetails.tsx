import type { EmployeeProfile } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface StaffDetailsProps {
  profile: EmployeeProfile
}

export function StaffDetails({ profile }: StaffDetailsProps) {
  return (
    <details className={styles.detailsPanel} open>
      <summary className={styles.detailsSummary}>
        <svg
          className={styles.detailsIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
        {profile.detailsHeading}
      </summary>
      <dl className={styles.detailsList}>
        {profile.details.map((field) => (
          <div key={field.id} className={styles.detailsRow}>
            <dt className={styles.detailsLabel}>{field.label} :</dt>
            <dd className={styles.detailsValue}>{field.value}</dd>
          </div>
        ))}
      </dl>
    </details>
  )
}
