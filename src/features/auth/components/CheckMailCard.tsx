import { CHECK_MAIL_COPY } from '../auth-content'
import styles from './AuthFlow.module.css'
import sharedStyles from './LoginPage.module.css'

export function CheckMailCard() {
  return (
    <div className={sharedStyles.formPanel}>
      <div className={styles.flowCard}>
        <div className={styles.cardHeader}>
          <span className={styles.iconBadge} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              className={styles.iconBadgeIcon}
              focusable="false"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </span>
          <h1 className={styles.cardTitle}>{CHECK_MAIL_COPY.title}</h1>
        </div>
        <p className={styles.cardText}>{CHECK_MAIL_COPY.sentText}</p>
        <p className={styles.resendRow}>
          {CHECK_MAIL_COPY.resendLead}{' '}
          <button type="button" className={styles.resendButton}>
            {CHECK_MAIL_COPY.resendLabel}
          </button>
        </p>
        <a className={styles.backLink} href={CHECK_MAIL_COPY.backHref}>
          <svg
            className={styles.backArrow}
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6.5 3L2 8l4.5 5M2.5 8H15" />
          </svg>
          {CHECK_MAIL_COPY.backLabel}
        </a>
      </div>
    </div>
  )
}
