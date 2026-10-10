import type { HomeFeature } from '../home-content'
import styles from './HomePage.module.css'

interface FeatureMediaProps {
  feature: HomeFeature
}

export function FeatureMedia({ feature }: FeatureMediaProps) {
  return (
    <img
      className={styles.featureMedia}
      src={feature.imageSrc}
      alt={feature.imageAlt}
      width="586"
      height="590"
    />
  )
}
