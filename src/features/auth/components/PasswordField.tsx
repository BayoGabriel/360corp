import { useState } from 'react'
import { REGISTER_FORM_COPY } from '../auth-content'
import styles from './RegisterPage.module.css'

interface PasswordFieldProps {
  id: string
  label: string
  name: string
}

export function PasswordField({ id, label, name }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrap}>
        <input
          id={id}
          className={styles.input}
          type={visible ? 'text' : 'password'}
          name={name}
          autoComplete="new-password"
          required
        />
        <button
          type="button"
          className={styles.eyeButton}
          aria-label={
            visible
              ? REGISTER_FORM_COPY.hidePasswordLabel
              : REGISTER_FORM_COPY.showPasswordLabel
          }
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
        >
          <svg
            className={styles.eyeIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
