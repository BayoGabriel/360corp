import type { SalaryBand } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface SalaryStructureTableProps {
  basePath: string
  rows: SalaryBand[]
}

export function SalaryStructureTable({
  basePath,
  rows,
}: SalaryStructureTableProps) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Position</th>
            <th scope="col">Salary Range (NGN)</th>
            <th scope="col">No of Employee</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((band, index) => (
            <tr key={band.id}>
              <td>{String(index + 1).padStart(2, '0')}</td>
              <td>{band.position}</td>
              <td>{band.range}</td>
              <td>{band.employeeCount}</td>
              <td>
                <a
                  className={`${styles.rowAction} ${styles.rowActionView}`}
                  href={`${basePath}/salary-structure/${band.id}`}
                  aria-label={`View ${band.position} salaries`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
