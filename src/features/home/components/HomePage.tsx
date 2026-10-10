import { FeaturesSection } from './FeaturesSection'
import { HeroHighlights } from './HeroHighlights'
import { HeroSection } from './HeroSection'
import { HowItWorksSection } from './HowItWorksSection'
import { SubscribeSection } from './SubscribeSection'
import { TestimonialsSection } from './TestimonialsSection'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <HeroHighlights />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SubscribeSection />
    </div>
  )
}
