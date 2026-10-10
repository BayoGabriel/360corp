import type { FormEvent } from 'react'
import { FOOTER_CONTACT_COPY } from './footer-content'
import styles from './SiteFooter.module.css'

export function FooterNewsletterForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      className={styles.newsletterForm}
      aria-label="Newsletter subscription"
      onSubmit={onSubmit}
    >
      <label className={styles.srOnly} htmlFor="footer-newsletter-email">
        {FOOTER_CONTACT_COPY.emailPlaceholder}
      </label>
      <input
        id="footer-newsletter-email"
        className={styles.newsletterInput}
        type="email"
        name="email"
        required
        placeholder={FOOTER_CONTACT_COPY.emailPlaceholder}
      />
      <button
        type="submit"
        className={styles.newsletterButton}
        aria-label={FOOTER_CONTACT_COPY.submitLabel}
      >
        <svg
          className={styles.sendIcon}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </form>
  )
}
