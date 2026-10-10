import type { Training } from '../departments-content'
import { AvatarStack } from './AvatarStack'
import { RowActions } from './RowActions'
import styles from './DepartmentsPage.module.css'

interface TrainingTableProps {
  trainings: Training[]
  departmentId: string
}

export function TrainingTable({ trainings, departmentId }: TrainingTableProps) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.serialCell}>S/N</th>
            <th>Training Title</th>
            <th>Duration</th>
            <th>Conduct Organisation</th>
            <th>Address / Platform</th>
            <th>Training Cost</th>
            <th>Employee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((item, index) => (
            <tr key={item.id}>
              <td className={styles.serialCell}>
                {String(index + 1).padStart(2, '0')}
              </td>
              <td>{item.title}</td>
              <td>{item.duration}</td>
              <td>{item.organisation}</td>
              <td>{item.platform}</td>
              <td>{item.cost}</td>
              <td>
                <AvatarStack extraCount={item.employeeCount} />
              </td>
              <td>
                <RowActions
                  viewHref={`/departments/${departmentId}/trainings/${item.id}`}
                  viewLabel={`View ${item.title}`}
                  viewVariant="assign"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
