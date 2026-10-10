import { QUERY_COPY, QUERY_FILTERS, QUERY_RECORDS } from '../departments-content'
import { PageHeader } from './PageHeader'
import { RecordsToolbar } from './RecordsToolbar'
import { QueryTable } from './QueryTable'
import styles from './DepartmentsPage.module.css'

interface QueryPageProps {
  departmentId: string
}

export function QueryPage({ departmentId }: QueryPageProps) {
  const basePath = `/departments/${departmentId}`
  return (
    <div className={styles.page}>
      <PageHeader
        title={QUERY_COPY.title}
        backHref={basePath}
        backLabel={QUERY_COPY.backLabel}
      >
        <a className={styles.createButton} href={`${basePath}/query/new`}>
          {QUERY_COPY.createLabel}
        </a>
      </PageHeader>
      <RecordsToolbar filters={QUERY_FILTERS} searchId="query-search" />
      <QueryTable basePath={basePath} rows={QUERY_RECORDS} />
    </div>
  )
}
