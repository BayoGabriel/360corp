import heroImage from '../../../assets/image.png'
import styles from './HomePage.module.css'

export function HeroImage() {
  return (
    <div className={styles.imageFrame}>
      <img
        className={styles.image}
        src={heroImage}
        alt="Smiling professional using a tablet in an office"
        width="520"
        height="560"
      />
    </div>
  )
}
