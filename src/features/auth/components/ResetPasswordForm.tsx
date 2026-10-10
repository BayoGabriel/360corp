import type { FormEvent } from 'react'
import { RESET_PASSWORD_COPY } from '../auth-content'
import styles from './AuthFlow.module.css'
import sharedStyles from './LoginPage.module.css'

export function ResetPasswordForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.assign('/login')
  }

  return (
    <div className={sharedStyles.formPanel}>
      <div className={styles.flowCard}>
        <h1 className={styles.cardTitle}>{RESET_PASSWORD_COPY.title}</h1>
        <p className={styles.welcomeText}>{RESET_PASSWORD_COPY.welcomeLabel}</p>
        <p className={styles.welcomeEmail}>{RESET_PASSWORD_COPY.userEmail}</p>
        <form className={styles.flowForm} onSubmit={onSubmit}>
          <label className={sharedStyles.srOnly} htmlFor="reset-password">
            {RESET_PASSWORD_COPY.passwordLabel}
          </label>
          <input
            id="reset-password"
            className={styles.cardInput}
            type="password"
            name="password"
            autoComplete="new-password"
            required
            placeholder={RESET_PASSWORD_COPY.passwordPlaceholder}
          />
          <label className={sharedStyles.srOnly} htmlFor="reset-confirm">
            {RESET_PASSWORD_COPY.confirmLabel}
          </label>
          <input
            id="reset-confirm"
            className={styles.cardInput}
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            required
            placeholder={RESET_PASSWORD_COPY.confirmPlaceholder}
          />
          <button type="submit" className={styles.cardButton}>
            {RESET_PASSWORD_COPY.submitLabel}
          </button>
        </form>
      </div>
    </div>
  )
}
