import type { HomeFeature } from '../home-content'
import { FEATURES_COPY } from '../home-content'
import { FeatureMedia } from './FeatureMedia'
import styles from './HomePage.module.css'

interface FeatureShowcaseProps {
  feature: HomeFeature
  mediaFirst: boolean
}

export function FeatureShowcase({ feature, mediaFirst }: FeatureShowcaseProps) {
  const rowClass = mediaFirst
    ? styles.featureRow
    : `${styles.featureRow} ${styles.featureRowReversed}`

  return (
    <article className={rowClass}>
      <FeatureMedia feature={feature} />
      <div className={styles.featureContent}>
        <p className={styles.featureEyebrow}>{feature.eyebrow}</p>
        <h3 className={styles.featureTitle}>{feature.title}</h3>
        <svg
          className={styles.featureScribble}
          viewBox="0 0 240 14"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M2 5 C 60 1, 120 9, 238 4"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M4 11 C 70 6, 140 13, 236 9"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.7"
          />
        </svg>
        <p className={styles.featureDescription}>{feature.description}</p>
        <a className={styles.featureLink} href={FEATURES_COPY.linkHref}>
          {FEATURES_COPY.linkLabel}
        </a>
      </div>
    </article>
  )
}
