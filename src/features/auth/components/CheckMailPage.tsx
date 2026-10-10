import registerIllustration from '../../../assets/registerIllustration.svg'
import { AuthShowcase } from './AuthShowcase'
import { CheckMailCard } from './CheckMailCard'
import sharedStyles from './LoginPage.module.css'

export function CheckMailPage() {
  return (
    <main className={sharedStyles.page}>
      <CheckMailCard />
      <AuthShowcase imageSrc={registerIllustration} imageAlt="" />
    </main>
  )
}
