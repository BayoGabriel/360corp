import {
  EMPLOYEE_FILTERS,
  EMPLOYEES,
  EMPLOYEES_COPY,
  EMPLOYEES_PAGINATION,
} from '../departments-content'
import { EmployeeTable } from './EmployeeTable'
import { PageHeader } from './PageHeader'
import { PaginationFooter } from './PaginationFooter'
import { RecordsToolbar } from './RecordsToolbar'
import styles from './DepartmentsPage.module.css'

interface EmployeesPageProps {
  departmentId: string
}

export function EmployeesPage({ departmentId }: EmployeesPageProps) {
  return (
    <div className={styles.page}>
      <PageHeader
        title={EMPLOYEES_COPY.title}
        backHref={EMPLOYEES_COPY.backHref}
        backLabel={EMPLOYEES_COPY.backLabel}
      >
        <a className={styles.createButton} href={EMPLOYEES_COPY.createHref}>
          {EMPLOYEES_COPY.createLabel}
        </a>
      </PageHeader>
      <RecordsToolbar filters={EMPLOYEE_FILTERS} searchId="employees-search" />
      <EmployeeTable employees={EMPLOYEES} departmentId={departmentId} />
      <PaginationFooter pagination={EMPLOYEES_PAGINATION} />
    </div>
  )
}
