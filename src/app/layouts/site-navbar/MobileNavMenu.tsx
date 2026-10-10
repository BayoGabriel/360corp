import { SITE_AUTH_LINKS, SITE_NAV_ITEMS } from './nav-links'
import styles from './SiteNavbar.module.css'

interface MobileNavMenuProps {
  activeHref: string
  onClose: () => void
}

export function MobileNavMenu({ activeHref, onClose }: MobileNavMenuProps) {
  return (
    <nav id="site-mobile-menu" className={styles.mobileMenu} aria-label="Mobile">
      <ul className={styles.mobileList}>
        {SITE_NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClose}
              aria-current={item.href === activeHref ? 'page' : undefined}
              className={
                item.href === activeHref ? styles.mobileActive : undefined
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.mobileActions}>
        <a
          className={styles.login}
          href={SITE_AUTH_LINKS.login.href}
          onClick={onClose}
        >
          {SITE_AUTH_LINKS.login.label}
        </a>
        <a
          className={styles.signup}
          href={SITE_AUTH_LINKS.createAccount.href}
          onClick={onClose}
        >
          {SITE_AUTH_LINKS.createAccount.label}
        </a>
      </div>
    </nav>
  )
}
