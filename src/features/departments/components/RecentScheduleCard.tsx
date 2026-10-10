import { RECENT_SCHEDULE_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

export function RecentScheduleCard() {
  return (
    <section className={styles.panel} aria-labelledby="recent-schedule-heading">
      <h2 id="recent-schedule-heading" className={styles.panelTitle}>
        {RECENT_SCHEDULE_COPY.heading}
      </h2>
      <dl className={styles.scheduleFields}>
        <div className={styles.scheduleField}>
          <dt>{RECENT_SCHEDULE_COPY.titleLabel}</dt>
          <dd>
            {RECENT_SCHEDULE_COPY.titleValue}{' '}
            <span className={styles.statusBadge}>
              {RECENT_SCHEDULE_COPY.statusLabel}
            </span>
          </dd>
        </div>
        <div className={styles.scheduleField}>
          <dt>{RECENT_SCHEDULE_COPY.detailsLabel}</dt>
          <dd>{RECENT_SCHEDULE_COPY.detailsValue}</dd>
        </div>
        <div className={styles.scheduleField}>
          <dt>{RECENT_SCHEDULE_COPY.createdLabel}</dt>
          <dd>{RECENT_SCHEDULE_COPY.createdValue}</dd>
        </div>
        <div className={styles.scheduleDates}>
          <div className={styles.scheduleField}>
            <dt>{RECENT_SCHEDULE_COPY.startLabel}</dt>
            <dd>{RECENT_SCHEDULE_COPY.startValue}</dd>
          </div>
          <div className={styles.scheduleField}>
            <dt>{RECENT_SCHEDULE_COPY.endLabel}</dt>
            <dd>{RECENT_SCHEDULE_COPY.endValue}</dd>
          </div>
        </div>
      </dl>
      <a className={styles.wideButton} href={RECENT_SCHEDULE_COPY.captureHref}>
        {RECENT_SCHEDULE_COPY.captureLabel}
      </a>
    </section>
  )
}
