import { FOOTER_CONTACT_COPY } from './footer-content'
import { FooterNewsletterForm } from './FooterNewsletterForm'
import { FooterSocialLinks } from './FooterSocialLinks'
import styles from './SiteFooter.module.css'

export function FooterContact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>{FOOTER_CONTACT_COPY.heading}</h2>
      <p className={styles.contactDescription}>
        {FOOTER_CONTACT_COPY.description}
      </p>
      <FooterNewsletterForm />
      <FooterSocialLinks />
    </div>
  )
}
