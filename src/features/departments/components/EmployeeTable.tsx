import type { Employee } from '../departments-content'
import { RowActions } from './RowActions'
import styles from './DepartmentsPage.module.css'

interface EmployeeTableProps {
  employees: Employee[]
  departmentId: string
}

export function EmployeeTable({ employees, departmentId }: EmployeeTableProps) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.serialCell}>S/N</th>
            <th>Image</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Branch</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((person, index) => (
            <tr key={person.id}>
              <td className={styles.serialCell}>
                {String(index + 1).padStart(2, '0')}
              </td>
              <td className={styles.centerCell}>
                <img
                  className={styles.tableAvatar}
                  src={person.avatarSrc}
                  alt=""
                  width="30"
                  height="30"
                />
              </td>
              <td>{person.name}</td>
              <td className={styles.emailCell}>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.branch}</td>
              <td>{person.department}</td>
              <td>
                <RowActions
                  viewHref={`/departments/${departmentId}/employees/${person.id}`}
                  viewLabel={`View ${person.name}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
