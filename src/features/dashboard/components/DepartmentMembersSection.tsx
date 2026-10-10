import {
  DEPARTMENT_MEMBERS_COPY,
  DEPARTMENT_SLICES,
} from '../dashboard-content'
import styles from './DashboardPage.module.css'

export function DepartmentMembersSection() {
  const total = DEPARTMENT_SLICES.reduce(
    (sum, slice) => sum + slice.members,
    0,
  )
  const fractions = DEPARTMENT_SLICES.map(
    (slice) => slice.members / total,
  )
  const rotations = fractions.map(
    (_, index) =>
      fractions.slice(0, index).reduce((sum, f) => sum + f, 0) * 360 - 90,
  )

  return (
    <section
      className={styles.deptSection}
      aria-labelledby="department-members-heading"
    >
      <h2 id="department-members-heading" className={styles.sectionTitle}>
        {DEPARTMENT_MEMBERS_COPY.heading}
      </h2>
      <div className={styles.deptBody}>
        <div className={styles.donutWrap}>
          <svg
            className={styles.donut}
            viewBox="0 0 180 180"
            role="img"
            aria-label={DEPARTMENT_MEMBERS_COPY.chartLabel}
          >
            <circle
              className={styles.donutTrack}
              cx="90"
              cy="90"
              r="64"
              fill="none"
              strokeWidth="18"
            />
            {DEPARTMENT_SLICES.map((slice, index) => (
              <circle
                key={slice.id}
                className={styles[`slice${index}`]}
                cx="90"
                cy="90"
                r="64"
                fill="none"
                strokeWidth="18"
                pathLength={1}
                strokeDasharray={`${fractions[index]} ${1 - (fractions[index] ?? 0)}`}
                transform={`rotate(${rotations[index] ?? -90} 90 90)`}
              />
            ))}
          </svg>
          <span className={styles.donutTotal}>{total}</span>
        </div>
        <ul className={styles.deptLegend}>
          {DEPARTMENT_SLICES.map((slice, index) => (
            <li key={slice.id} className={styles.legendItem}>
              <span
                className={`${styles.legendDot} ${styles[`dot${index}`]}`}
                aria-hidden="true"
              />
              <span className={styles.legendCount}>
                {slice.members} {DEPARTMENT_MEMBERS_COPY.membersSuffix}
              </span>
              <span className={styles.legendName}>{slice.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
