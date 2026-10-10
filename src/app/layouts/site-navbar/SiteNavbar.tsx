import { useEffect, useRef, useState } from 'react'
import { SiteLogo } from '../../../shared/components/SiteLogo/SiteLogo'
import { MobileNavMenu } from './MobileNavMenu'
import { SITE_AUTH_LINKS, SITE_NAV_ITEMS } from './nav-links'
import styles from './SiteNavbar.module.css'

interface SiteNavbarProps {
  activeHref?: string
}

export function SiteNavbar({ activeHref = '/' }: SiteNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <SiteLogo />
        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {SITE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={
                    item.href === activeHref ? styles.active : undefined
                  }
                  aria-current={item.href === activeHref ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          <a className={styles.login} href={SITE_AUTH_LINKS.login.href}>
            {SITE_AUTH_LINKS.login.label}
          </a>
          <a
            className={styles.signup}
            href={SITE_AUTH_LINKS.createAccount.href}
          >
            {SITE_AUTH_LINKS.createAccount.label}
          </a>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      {menuOpen && (
        <MobileNavMenu activeHref={activeHref} onClose={closeMenu} />
      )}
    </header>
  )
}
