import type { ReactNode } from 'react'
import { SiteFooter } from './site-footer/SiteFooter'
import { SiteNavbar } from './site-navbar/SiteNavbar'
import styles from './PublicLayout.module.css'

interface PublicLayoutProps {
  children: ReactNode
  activeHref?: string
}

export function PublicLayout({ children, activeHref }: PublicLayoutProps) {
  return (
    <div className={styles.layout}>
      <SiteNavbar activeHref={activeHref} />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  )
}
