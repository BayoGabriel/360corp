import { useState } from 'react'
import type { Employee } from '../departments-content'
import { ADD_STAFF_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface StaffSelectTableProps {
  employees: Employee[]
}

export function StaffSelectTable({ employees }: StaffSelectTableProps) {
  const [selectedIds, setSelectedIds] = useState<ReadonlySet<string>>(new Set())
  const allSelected =
    employees.length > 0 && selectedIds.size === employees.length

  const toggleOne = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const toggleAll = () => {
    setSelectedIds(
      allSelected ? new Set() : new Set(employees.map((person) => person.id)),
    )
  }

  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.checkCell}>
              <input
                type="checkbox"
                className={styles.rowCheck}
                checked={allSelected}
                onChange={toggleAll}
                aria-label={ADD_STAFF_COPY.selectAllLabel}
              />
            </th>
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
              <td className={styles.checkCell}>
                <input
                  type="checkbox"
                  className={styles.rowCheck}
                  checked={selectedIds.has(person.id)}
                  onChange={() => toggleOne(person.id)}
                  aria-label={`Select ${person.name}`}
                />
              </td>
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
                <button
                  type="button"
                  className={`${styles.rowAction} ${styles.rowActionAdd}`}
                  aria-label={`Add ${person.name} to training`}
                  onClick={() => toggleOne(person.id)}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
