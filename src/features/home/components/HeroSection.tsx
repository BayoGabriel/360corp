import { HERO_COPY } from '../home-content'
import { HeroImage } from './HeroImage'
import styles from './HomePage.module.css'

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>{HERO_COPY.headingLead}</span>
          <span className={styles.titleLine}>
            {HERO_COPY.headingLine}{' '}
            <span className={styles.accent}>{HERO_COPY.headingAccent}</span>
            <svg
              className={styles.scribble}
              viewBox="0 0 240 14"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M2 7 C 60 2, 120 11, 238 5"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M4 12 C 70 6, 140 13, 236 9"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity="0.7"
              />
            </svg>
          </span>
        </h1>
        <p className={styles.description}>{HERO_COPY.description}</p>
        <a className={styles.cta} href={HERO_COPY.cta.href}>
          {HERO_COPY.cta.label}
          <span className={styles.ctaArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>
      <HeroImage />
    </section>
  )
}
