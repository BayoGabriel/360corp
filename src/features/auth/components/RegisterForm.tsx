import type { FormEvent } from 'react'
import { REGISTER_FORM_COPY } from '../auth-content'
import sharedStyles from './LoginPage.module.css'
import { PasswordField } from './PasswordField'
import { PhoneField } from './PhoneField'
import { RegisterField } from './RegisterField'
import styles from './RegisterPage.module.css'
import { StateSelect } from './StateSelect'
import { TermsField } from './TermsField'

export function RegisterForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={sharedStyles.formPanel}>
      <div className={styles.registerCard}>
        <h1 className={styles.registerTitle}>{REGISTER_FORM_COPY.title}</h1>
        <p className={styles.registerSubtitle}>
          {REGISTER_FORM_COPY.subtitle}
        </p>
        <form className={styles.registerForm} onSubmit={onSubmit}>
          <RegisterField
            id="reg-business-name"
            label={REGISTER_FORM_COPY.businessNameLabel}
            name="businessName"
            autoComplete="organization"
            fullWidth
          />
          <RegisterField
            id="reg-rc-number"
            label={REGISTER_FORM_COPY.rcNumberLabel}
            name="rcNumber"
          />
          <RegisterField
            id="reg-tin"
            label={REGISTER_FORM_COPY.tinLabel}
            name="tinVerification"
          />
          <RegisterField
            id="reg-incorporation-date"
            label={REGISTER_FORM_COPY.incorporationDateLabel}
            name="incorporationDate"
            type="date"
          />
          <RegisterField
            id="reg-business-email"
            label={REGISTER_FORM_COPY.businessEmailLabel}
            name="businessEmail"
            type="email"
            autoComplete="email"
          />
          <PhoneField />
          <StateSelect />
          <RegisterField
            id="reg-business-address"
            label={REGISTER_FORM_COPY.businessAddressLabel}
            name="businessAddress"
            autoComplete="street-address"
          />
          <PasswordField
            id="reg-password"
            label={REGISTER_FORM_COPY.passwordLabel}
            name="password"
          />
          <PasswordField
            id="reg-confirm-password"
            label={REGISTER_FORM_COPY.confirmPasswordLabel}
            name="confirmPassword"
          />
          <TermsField />
          <button type="submit" className={styles.registerButton}>
            {REGISTER_FORM_COPY.submitLabel}
          </button>
        </form>
        <p className={styles.signinPrompt}>
          {REGISTER_FORM_COPY.signinLead}{' '}
          <a className={styles.signinLink} href={REGISTER_FORM_COPY.signinHref}>
            {REGISTER_FORM_COPY.signinLabel}
          </a>
        </p>
      </div>
    </div>
  )
}
