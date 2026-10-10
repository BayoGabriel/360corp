import {
  POSITION_SALARIES_COPY,
  POSITION_SALARIES_FILTERS,
  POSITION_SALARIES_PAGINATION,
  POSITION_SALARY_RECORDS,
  SALARY_BANDS,
} from '../departments-content'
import { PageHeader } from './PageHeader'
import { RecordsToolbar } from './RecordsToolbar'
import { SalaryTable } from './SalaryTable'
import { PaginationFooter } from './PaginationFooter'
import styles from './DepartmentsPage.module.css'

interface PositionSalariesPageProps {
  departmentId: string
  positionId: string
}

export function PositionSalariesPage({
  departmentId,
  positionId,
}: PositionSalariesPageProps) {
  const position =
    SALARY_BANDS.find((band) => band.id === positionId)?.position ?? positionId
  const basePath = `/departments/${departmentId}`
  return (
    <div className={styles.page}>
      <PageHeader
        title={`${position} ${POSITION_SALARIES_COPY.titleSuffix}`}
        backHref={`${basePath}/salary-structure`}
        backLabel={POSITION_SALARIES_COPY.backLabel}
      />
      <RecordsToolbar
        filters={POSITION_SALARIES_FILTERS}
        searchId="position-salaries-search"
      />
      <SalaryTable rows={POSITION_SALARY_RECORDS} />
      <PaginationFooter pagination={POSITION_SALARIES_PAGINATION} />
    </div>
  )
}
