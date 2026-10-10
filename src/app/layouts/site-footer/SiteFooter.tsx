import { FooterBrand } from './FooterBrand'
import { FooterContact } from './FooterContact'
import { FooterLinks } from './FooterLinks'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <FooterBrand />
        <FooterContact />
        <FooterLinks />
      </div>
    </footer>
  )
}
