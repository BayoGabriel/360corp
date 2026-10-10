import { AuthShowcase } from './AuthShowcase'
import sharedStyles from './LoginPage.module.css'
import { RegisterForm } from './RegisterForm'

export function RegisterPage() {
  return (
    <main className={sharedStyles.page}>
      <RegisterForm />
      <AuthShowcase />
    </main>
  )
}
