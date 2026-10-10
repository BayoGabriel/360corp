import loginIllustration from '../../../assets/loginIllustration.svg'
import { AuthShowcase } from './AuthShowcase'
import { LoginForm } from './LoginForm'
import styles from './LoginPage.module.css'

export function LoginPage() {
  return (
    <main className={styles.page}>
      <LoginForm />
      <AuthShowcase imageSrc={loginIllustration} imageAlt="" />
    </main>
  )
}
