import { HOW_IT_WORKS_COPY, HOW_IT_WORKS_STEPS } from '../home-content'
import { HowItWorksCard } from './HowItWorksCard'
import styles from './HomePage.module.css'

export function HowItWorksSection() {
  return (
    <section
      className={styles.howItWorks}
      aria-labelledby="how-it-works-heading"
    >
      <div className={styles.howItWorksInner}>
        <h2 id="how-it-works-heading" className={styles.howItWorksTitle}>
          {HOW_IT_WORKS_COPY.heading}
        </h2>
        <p className={styles.howItWorksSubtitle}>
          {HOW_IT_WORKS_COPY.subheading}
        </p>
        <ol className={styles.stepList}>
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li key={step.id}>
              <HowItWorksCard step={step} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
