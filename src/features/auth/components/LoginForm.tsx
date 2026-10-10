import type { FormEvent } from 'react'
import { LOGIN_FORM_COPY } from '../auth-content'
import styles from './LoginPage.module.css'

export function LoginForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.assign('/dashboard')
  }

  return (
    <div className={styles.formPanel}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>{LOGIN_FORM_COPY.title}</h1>
        <p className={styles.loginSubtitle}>{LOGIN_FORM_COPY.subtitle}</p>
        <form className={styles.loginForm} onSubmit={onSubmit}>
          <label className={styles.srOnly} htmlFor="login-username">
            {LOGIN_FORM_COPY.usernameLabel}
          </label>
          <input
            id="login-username"
            className={styles.loginInput}
            type="text"
            name="username"
            autoComplete="username"
            required
            placeholder={LOGIN_FORM_COPY.usernamePlaceholder}
          />
          <label className={styles.srOnly} htmlFor="login-password">
            {LOGIN_FORM_COPY.passwordLabel}
          </label>
          <input
            id="login-password"
            className={styles.loginInput}
            type="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder={LOGIN_FORM_COPY.passwordPlaceholder}
          />
          <div className={styles.loginOptions}>
            <label className={styles.rememberMe}>
              <input
                className={styles.rememberCheckbox}
                type="checkbox"
                name="rememberMe"
              />
              {LOGIN_FORM_COPY.rememberLabel}
            </label>
            <a className={styles.forgotLink} href={LOGIN_FORM_COPY.forgotHref}>
              {LOGIN_FORM_COPY.forgotLabel}
            </a>
          </div>
          <button type="submit" className={styles.loginButton}>
            {LOGIN_FORM_COPY.submitLabel}
          </button>
        </form>
        <p className={styles.registerPrompt}>
          {LOGIN_FORM_COPY.registerLead}{' '}
          <a
            className={styles.registerLink}
            href={LOGIN_FORM_COPY.registerHref}
          >
            {LOGIN_FORM_COPY.registerLabel}
          </a>
        </p>
      </div>
    </div>
  )
}
