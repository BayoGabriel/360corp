import { FOOTER_LINKS_COPY } from './footer-content'
import styles from './SiteFooter.module.css'

export function FooterLinks() {
  return (
    <nav className={styles.linksNav} aria-labelledby="footer-links-heading">
      <h2 id="footer-links-heading" className={styles.heading}>
        {FOOTER_LINKS_COPY.heading}
      </h2>
      <ul className={styles.linkList}>
        {FOOTER_LINKS_COPY.items.map((item) => (
          <li key={item.href}>
            <a className={styles.linkItem} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
