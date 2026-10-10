import type { RecordsPagination } from '../departments-content'
import { RECORDS_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface PaginationFooterProps {
  pagination: RecordsPagination
}

export function PaginationFooter({ pagination }: PaginationFooterProps) {
  return (
    <div className={styles.paginationBar}>
      <p className={styles.paginationSummary}>
        Showing {pagination.start} to {pagination.end} of {pagination.total}{' '}
        entries
      </p>
      <nav className={styles.paginationNav} aria-label="Records pagination">
        <button type="button" className={styles.pageButton}>
          {RECORDS_COPY.previousLabel}
        </button>
        <button
          type="button"
          className={`${styles.pageButton} ${styles.pageButtonActive}`}
          aria-current="page"
        >
          {pagination.currentPage}
        </button>
        <button type="button" className={styles.pageButton}>
          {RECORDS_COPY.nextLabel}
        </button>
      </nav>
    </div>
  )
}
