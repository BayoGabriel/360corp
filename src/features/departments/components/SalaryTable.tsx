import type { SalaryRecord } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface SalaryTableProps {
  rows: SalaryRecord[]
}

export function SalaryTable({ rows }: SalaryTableProps) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Image</th>
            <th scope="col">Fullname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Branch</th>
            <th scope="col">Salary (NGN)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((record, index) => (
            <tr key={record.id}>
              <td>{String(index + 1).padStart(2, '0')}</td>
              <td>
                <img
                  className={styles.tableAvatar}
                  src={record.avatarSrc}
                  alt={record.name}
                  width="24"
                  height="24"
                />
              </td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.branch}</td>
              <td className={styles.salaryCell}>{record.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
