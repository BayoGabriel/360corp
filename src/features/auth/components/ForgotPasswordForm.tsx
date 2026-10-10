import type { FormEvent } from 'react'
import { FORGOT_PASSWORD_COPY } from '../auth-content'
import styles from './AuthFlow.module.css'
import sharedStyles from './LoginPage.module.css'

export function ForgotPasswordForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.assign('/check-mail')
  }

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
              <path d="M14.5 2a7.5 7.5 0 0 0-7.36 8.99L2 16.13V21a1 1 0 0 0 1 1h4.87l1.14-1.14v-2.01h2.01l1.6-1.6v-1.6h1.6l1.27-1.27A7.5 7.5 0 1 0 14.5 2zm0 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
            </svg>
          </span>
          <h1 className={styles.cardTitle}>{FORGOT_PASSWORD_COPY.title}</h1>
        </div>
        <p className={styles.cardText}>{FORGOT_PASSWORD_COPY.description}</p>
        <form className={styles.flowForm} onSubmit={onSubmit}>
          <label className={sharedStyles.srOnly} htmlFor="forgot-email">
            {FORGOT_PASSWORD_COPY.emailLabel}
          </label>
          <input
            id="forgot-email"
            className={styles.cardInput}
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder={FORGOT_PASSWORD_COPY.emailPlaceholder}
          />
          <button type="submit" className={styles.cardButton}>
            {FORGOT_PASSWORD_COPY.submitLabel}
          </button>
        </form>
        <a className={styles.backLink} href={FORGOT_PASSWORD_COPY.backHref}>
          <svg
            className={styles.backArrow}
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M6.5 3L2 8l4.5 5M2.5 8H15" />
          </svg>
          {FORGOT_PASSWORD_COPY.backLabel}
        </a>
      </div>
    </div>
  )
}
