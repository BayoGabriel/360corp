import { REGISTER_FORM_COPY } from '../auth-content'
import styles from './RegisterPage.module.css'

export function PhoneField() {
  return (
    <div className={`${styles.field} ${styles.fieldFull}`}>
      <label className={styles.fieldLabel} htmlFor="reg-business-phone">
        {REGISTER_FORM_COPY.businessPhoneLabel}
      </label>
      <div className={styles.inputWrap}>
        <span className={styles.phonePrefix} aria-hidden="true">
          <svg className={styles.flagIcon} viewBox="0 0 18 12" focusable="false">
            <rect width="6" height="12" fill="#008751" />
            <rect x="6" width="6" height="12" fill="#ffffff" />
            <rect x="12" width="6" height="12" fill="#008751" />
          </svg>
          <svg
            className={styles.chevronIcon}
            viewBox="0 0 12 12"
            focusable="false"
          >
            <path d="M2.5 4.5L6 8l3.5-3.5" />
          </svg>
        </span>
        <input
          id="reg-business-phone"
          className={`${styles.input} ${styles.phoneInput}`}
          type="tel"
          name="businessPhone"
          autoComplete="tel"
          required
          placeholder={REGISTER_FORM_COPY.phonePlaceholder}
        />
      </div>
    </div>
  )
}
