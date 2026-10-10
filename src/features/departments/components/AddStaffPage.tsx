import {
  ADD_STAFF_COPY,
  ADD_STAFF_FILTERS,
  EMPLOYEES,
  EMPLOYEES_PAGINATION,
} from '../departments-content'
import { PageHeader } from './PageHeader'
import { PaginationFooter } from './PaginationFooter'
import { RecordsToolbar } from './RecordsToolbar'
import { StaffSelectTable } from './StaffSelectTable'
import styles from './DepartmentsPage.module.css'

interface AddStaffPageProps {
  departmentId: string
}

export function AddStaffPage({ departmentId }: AddStaffPageProps) {
  return (
    <div className={styles.page}>
      <PageHeader
        title={ADD_STAFF_COPY.title}
        backHref={`/departments/${departmentId}/trainings`}
        backLabel={ADD_STAFF_COPY.backLabel}
      />
      <RecordsToolbar
        filters={ADD_STAFF_FILTERS}
        searchId="add-staff-search"
        actions={
          <button
            type="button"
            className={styles.createButton}
            aria-label={ADD_STAFF_COPY.addSelectedLabel}
          >
            <svg
              className={styles.createButtonIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            {ADD_STAFF_COPY.addLabel}
          </button>
        }
      />
      <StaffSelectTable employees={EMPLOYEES} />
      <PaginationFooter pagination={EMPLOYEES_PAGINATION} />
    </div>
  )
}
