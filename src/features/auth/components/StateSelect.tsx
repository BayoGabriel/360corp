import { REGISTER_FORM_COPY } from '../auth-content'
import styles from './RegisterPage.module.css'

export function StateSelect() {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel} htmlFor="reg-state">
        {REGISTER_FORM_COPY.stateLabel}
      </label>
      <div className={styles.inputWrap}>
        <select
          id="reg-state"
          className={`${styles.input} ${styles.select}`}
          name="state"
          autoComplete="address-level1"
          required
          defaultValue=""
        >
          <option value="" disabled>
            {REGISTER_FORM_COPY.statePlaceholder}
          </option>
        </select>
        <svg
          className={styles.selectChevron}
          viewBox="0 0 12 12"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" />
        </svg>
      </div>
    </div>
  )
}
