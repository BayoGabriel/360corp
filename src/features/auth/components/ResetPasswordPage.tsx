import registerIllustration from '../../../assets/registerIllustration.svg'
import { AuthShowcase } from './AuthShowcase'
import sharedStyles from './LoginPage.module.css'
import { ResetPasswordForm } from './ResetPasswordForm'

export function ResetPasswordPage() {
  return (
    <main className={sharedStyles.page}>
      <ResetPasswordForm />
      <AuthShowcase imageSrc={registerIllustration} imageAlt="" />
    </main>
  )
}
