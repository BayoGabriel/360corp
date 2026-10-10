import { ROW_ACTIONS_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface RowActionsProps {
  viewHref: string
  viewLabel?: string
  viewVariant?: 'view' | 'assign'
}

export function RowActions({
  viewHref,
  viewLabel = ROW_ACTIONS_COPY.viewLabel,
  viewVariant = 'view',
}: RowActionsProps) {
  return (
    <div className={styles.rowActions}>
      <a
        className={`${styles.rowAction} ${styles.rowActionView}`}
        href={viewHref}
        aria-label={viewLabel}
      >
        {viewVariant === 'assign' ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="10" cy="8" r="3.2" />
            <path d="M4.5 19a5.5 5.5 0 0 1 11 0M17 12.5v5M14.5 15h5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </a>
      <button
        type="button"
        className={`${styles.rowAction} ${styles.rowActionEdit}`}
        aria-label={ROW_ACTIONS_COPY.editLabel}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14.5 5.5l4 4L8 20H4v-4zM12.5 7.5l4 4" />
        </svg>
      </button>
      <button
        type="button"
        className={`${styles.rowAction} ${styles.rowActionDelete}`}
        aria-label={ROW_ACTIONS_COPY.deleteLabel}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M6.5 7l1 13h9l1-13M10 11v6M14 11v6" />
        </svg>
      </button>
    </div>
  )
}
