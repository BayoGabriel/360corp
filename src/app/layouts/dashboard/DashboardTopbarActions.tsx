import avatarImage from '../../../assets/testimonialAvatar.svg'
import { DASHBOARD_TOPBAR_COPY } from './dashboard-nav'
import styles from './DashboardLayout.module.css'

export function DashboardTopbarActions() {
  return (
    <div className={styles.topbarActions}>
      <button
        type="button"
        className={styles.historyButton}
        aria-label={DASHBOARD_TOPBAR_COPY.historyLabel}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      </button>
      <button
        type="button"
        className={styles.bellButton}
        aria-label={DASHBOARD_TOPBAR_COPY.notificationsLabel}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M6.5 15.5V11a5.5 5.5 0 0 1 11 0v4.5l1.6 2.8H4.9z" />
          <path d="M10 20.5a2.2 2.2 0 0 0 4 0" />
        </svg>
        <span
          className={styles.notifDot}
          aria-label={DASHBOARD_TOPBAR_COPY.unreadLabel}
        />
      </button>
      <span className={styles.greeting}>{DASHBOARD_TOPBAR_COPY.greeting}</span>
      <img className={styles.avatar} src={avatarImage} alt="" />
    </div>
  )
}
