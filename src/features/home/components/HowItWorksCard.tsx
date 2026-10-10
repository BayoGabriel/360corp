import type { HowItWorksStep } from '../home-content'
import { HOW_IT_WORKS_COPY } from '../home-content'
import styles from './HomePage.module.css'

interface HowItWorksCardProps {
  step: HowItWorksStep
}

export function HowItWorksCard({ step }: HowItWorksCardProps) {
  return (
    <article className={styles.stepCard}>
      <div className={styles.stepHeading}>
        <svg
          className={styles.stepIcon}
          viewBox="0 0 40 40"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="20" cy="20" r="18" className={styles.stepIconBase} />
          <circle cx="15" cy="14" r="15" className={styles.stepIconOverlay} />
        </svg>
        <h3 className={styles.stepTitle}>{step.title}</h3>
      </div>
      <p className={styles.stepDescription}>{step.description}</p>
      <a className={styles.stepLink} href={HOW_IT_WORKS_COPY.linkHref}>
        {HOW_IT_WORKS_COPY.linkLabel}
        <span className={styles.stepLinkArrow} aria-hidden="true">
          →
        </span>
      </a>
    </article>
  )
}
