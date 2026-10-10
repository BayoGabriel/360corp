import { SiteLogo } from '../../../shared/components/SiteLogo/SiteLogo'
import { FOOTER_BRAND_COPY } from './footer-content'
import styles from './SiteFooter.module.css'

export function FooterBrand() {
  return (
    <div className={styles.brand}>
      <SiteLogo />
      <p className={styles.brandDescription}>{FOOTER_BRAND_COPY.description}</p>
      <p className={styles.contactLine}>
        <span className={styles.contactLabel}>Email :</span>
        <a href={`mailto:${FOOTER_BRAND_COPY.email}`}>
          {FOOTER_BRAND_COPY.email}
        </a>
      </p>
      <p className={styles.contactLine}>
        <span className={styles.contactLabel}>Phone :</span>
        <a href={`tel:${FOOTER_BRAND_COPY.phone.replace(/[^+\d]/g, '')}`}>
          {FOOTER_BRAND_COPY.phone}
        </a>
      </p>
    </div>
  )
}
