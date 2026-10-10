import {
  PERFORMANCE_COPY,
  PERFORMANCE_PERIODS,
} from '../departments-content'
import { PerformanceChart } from './PerformanceChart'
import styles from './DepartmentsPage.module.css'

export function PerformanceCard() {
  return (
    <section className={styles.panel} aria-labelledby="performance-heading">
      <div className={styles.panelHeader}>
        <h2 id="performance-heading" className={styles.panelTitle}>
          {PERFORMANCE_COPY.heading}
        </h2>
      </div>
      <div className={styles.performanceControls}>
        <span className={styles.rangeRow}>
          {PERFORMANCE_COPY.showingFor}
          <button
            type="button"
            className={styles.rangeButton}
            aria-label={PERFORMANCE_COPY.rangeLabel}
          >
            {PERFORMANCE_COPY.range} ▾
          </button>
        </span>
        <ul className={styles.periodTabs} aria-label="Performance period">
          {PERFORMANCE_PERIODS.map((period, index) => (
            <li key={period}>
              <button
                type="button"
                className={
                  index === 0
                    ? `${styles.periodTab} ${styles.periodTabActive}`
                    : styles.periodTab
                }
                aria-pressed={index === 0}
              >
                {period}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <PerformanceChart />
    </section>
  )
}
