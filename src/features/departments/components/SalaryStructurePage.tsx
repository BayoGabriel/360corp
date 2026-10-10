import {
  SALARY_BANDS,
  SALARY_STRUCTURE_COPY,
  SALARY_STRUCTURE_FILTERS,
  SALARY_STRUCTURE_PAGINATION,
} from '../departments-content'
import { PageHeader } from './PageHeader'
import { RecordsToolbar } from './RecordsToolbar'
import { SalaryStructureTable } from './SalaryStructureTable'
import { PaginationFooter } from './PaginationFooter'
import styles from './DepartmentsPage.module.css'

interface SalaryStructurePageProps {
  departmentId: string
}

export function SalaryStructurePage({
  departmentId,
}: SalaryStructurePageProps) {
  const basePath = `/departments/${departmentId}`
  return (
    <div className={styles.page}>
      <PageHeader
        title={SALARY_STRUCTURE_COPY.title}
        backHref={basePath}
        backLabel={SALARY_STRUCTURE_COPY.backLabel}
      />
      <RecordsToolbar
        filters={SALARY_STRUCTURE_FILTERS}
        searchId="salary-structure-search"
      />
      <SalaryStructureTable basePath={basePath} rows={SALARY_BANDS} />
      <PaginationFooter pagination={SALARY_STRUCTURE_PAGINATION} />
    </div>
  )
}
