import { REGISTER_FORM_COPY } from '../auth-content'
import styles from './RegisterPage.module.css'

export function TermsField() {
  return (
    <div className={`${styles.field} ${styles.fieldFull}`}>
      <label className={styles.terms}>
        <input
          className={styles.termsCheckbox}
          type="checkbox"
          name="agreeTerms"
          required
        />
        <span className={styles.termsText}>
          {REGISTER_FORM_COPY.termsLead}{' '}
          <a className={styles.termsLink} href={REGISTER_FORM_COPY.termsHref}>
            {REGISTER_FORM_COPY.termsLabel}
          </a>{' '}
          {REGISTER_FORM_COPY.termsMiddle}{' '}
          <a className={styles.termsLink} href={REGISTER_FORM_COPY.privacyHref}>
            {REGISTER_FORM_COPY.privacyLabel}
          </a>
        </span>
      </label>
    </div>
  )
}
