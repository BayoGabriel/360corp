import {
  TRAINING_FILTERS,
  TRAININGS,
  TRAININGS_COPY,
  TRAININGS_PAGINATION,
} from '../departments-content'
import { PageHeader } from './PageHeader'
import { PaginationFooter } from './PaginationFooter'
import { RecordsToolbar } from './RecordsToolbar'
import { TrainingTable } from './TrainingTable'
import styles from './DepartmentsPage.module.css'

interface TrainingsPageProps {
  departmentId: string
}

export function TrainingsPage({ departmentId }: TrainingsPageProps) {
  return (
    <div className={styles.page}>
      <PageHeader
        title={TRAININGS_COPY.title}
        backHref={TRAININGS_COPY.backHref}
        backLabel={TRAININGS_COPY.backLabel}
      >
        <a className={styles.createButton} href={TRAININGS_COPY.createHref}>
          {TRAININGS_COPY.createLabel}
        </a>
      </PageHeader>
      <RecordsToolbar filters={TRAINING_FILTERS} searchId="trainings-search" />
      <TrainingTable trainings={TRAININGS} departmentId={departmentId} />
      <PaginationFooter pagination={TRAININGS_PAGINATION} />
    </div>
  )
}
