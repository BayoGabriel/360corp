import { ATTENDANCE_COPY, ATTENDANCE_STATS } from '../departments-content'
import styles from './DepartmentsPage.module.css'

export function AttendanceCard() {
  return (
    <section className={styles.panel} aria-labelledby="attendance-heading">
      <div className={styles.panelHeaderRow}>
        <h2 id="attendance-heading" className={styles.panelTitle}>
          {ATTENDANCE_COPY.heading}
        </h2>
        <button
          type="button"
          className={styles.monthButton}
          aria-label={ATTENDANCE_COPY.monthLabel}
        >
          {ATTENDANCE_COPY.month} ▾
        </button>
      </div>
      <ul className={styles.attendanceStats}>
        {ATTENDANCE_STATS.map((stat) => (
          <li key={stat.id} className={styles.attendanceStat}>
            <span className={styles.attendanceValue}>{stat.value}</span>
            <span className={styles.attendanceLabel}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
