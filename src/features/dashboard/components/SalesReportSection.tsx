import { SALES_REPORT_COPY } from '../dashboard-content'
import { SalesLineChart } from './SalesLineChart'
import styles from './DashboardPage.module.css'

export function SalesReportSection() {
  return (
    <section className={styles.salesSection} aria-labelledby="sales-report-heading">
      <div className={styles.salesHeader}>
        <h2 id="sales-report-heading" className={styles.sectionTitle}>
          {SALES_REPORT_COPY.heading}
        </h2>
        <div className={styles.rangeRow}>
          <span className={styles.rangeLabel}>
            {SALES_REPORT_COPY.showingFor}
          </span>
          <button
            type="button"
            className={styles.rangeButton}
            aria-label={SALES_REPORT_COPY.rangeLabel}
          >
            <svg
              className={styles.rangeIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              focusable="false"
            >
              <rect x="4" y="5" width="16" height="15" rx="2" />
              <path d="M4 10h16M9 3v4M15 3v4" />
            </svg>
            {SALES_REPORT_COPY.range}
            <svg
              className={styles.rangeIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      <SalesLineChart />
    </section>
  )
}
