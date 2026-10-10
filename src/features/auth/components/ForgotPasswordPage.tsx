import { AuthShowcase } from './AuthShowcase'
import { ForgotPasswordForm } from './ForgotPasswordForm'
import sharedStyles from './LoginPage.module.css'

export function ForgotPasswordPage() {
  return (
    <main className={sharedStyles.page}>
      <ForgotPasswordForm />
      <AuthShowcase />
    </main>
  )
}
