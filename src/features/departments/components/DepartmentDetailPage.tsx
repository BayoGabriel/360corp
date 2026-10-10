import {
  DEPARTMENT_DETAIL_COPY,
  DEPARTMENT_MODULES,
  DEPARTMENTS,
} from '../departments-content'
import { DepartmentHeadChip } from './DepartmentHeadChip'
import { ModuleCard } from './ModuleCard'
import { PageHeader } from './PageHeader'
import styles from './DepartmentsPage.module.css'

interface DepartmentDetailPageProps {
  departmentId: string
}

export function DepartmentDetailPage({
  departmentId,
}: DepartmentDetailPageProps) {
  const department = DEPARTMENTS.find((dept) => dept.id === departmentId)
  const title = department ? department.name : 'Department'

  return (
    <div className={styles.page}>
      <PageHeader
        title={title}
        backHref="/departments"
        backLabel={DEPARTMENT_DETAIL_COPY.backLabel}
      >
        {department && <DepartmentHeadChip head={department.head} />}
      </PageHeader>
      <ul className={styles.cardGrid}>
        {DEPARTMENT_MODULES.map((module) => (
          <li key={module.id}>
            <ModuleCard
              label={module.label}
              icon={module.icon}
              href={`/departments/${departmentId}/${module.path}`}
              badge={module.badge}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
