import { FEATURE_ITEMS, FEATURES_COPY } from '../home-content'
import { FeatureShowcase } from './FeatureShowcase'
import styles from './HomePage.module.css'

export function FeaturesSection() {
  return (
    <section className={styles.features} aria-labelledby="features-heading">
      <div className={styles.featuresInner}>
        <h2 id="features-heading" className={styles.featuresTitle}>
          {FEATURES_COPY.heading}
        </h2>
        <p className={styles.featuresSubtitle}>{FEATURES_COPY.subheading}</p>
        <ul className={styles.featureList}>
          {FEATURE_ITEMS.map((feature, index) => (
            <li key={feature.id}>
              <FeatureShowcase feature={feature} mediaFirst={index % 2 === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
