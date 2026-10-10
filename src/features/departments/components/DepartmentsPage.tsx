import { DEPARTMENTS, DEPARTMENTS_PAGE_COPY } from '../departments-content'
import { ModuleCard } from './ModuleCard'
import { PageHeader } from './PageHeader'
import styles from './DepartmentsPage.module.css'

export function DepartmentsPage() {
  return (
    <div className={styles.page}>
      <PageHeader title={DEPARTMENTS_PAGE_COPY.title}>
        <a className={styles.createButton} href={DEPARTMENTS_PAGE_COPY.createHref}>
          {DEPARTMENTS_PAGE_COPY.createLabel}
        </a>
      </PageHeader>
      <ul className={styles.cardGrid}>
        {DEPARTMENTS.map((department) => (
          <li key={department.id}>
            <ModuleCard
              label={department.name}
              icon={department.icon}
              href={`/departments/${department.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
