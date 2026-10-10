import loginLogo from '../../../assets/loginlogo.svg'
import { SiteLogo } from '../../../shared/components/SiteLogo/SiteLogo'
import { AUTH_FOOTER_LINKS, AUTH_SHOWCASE_COPY } from '../auth-content'
import styles from './LoginPage.module.css'
import loginImage from '../../../assets/homeimage.svg'
            

export function AuthShowcase() {
  return (
    <div className={styles.showcase}>
      <SiteLogo tone="dark" markSrc={loginLogo} />
      <img
        className={styles.showcaseImage}
        src={loginImage}
        alt="Auth showcase image"
        width="420"
        height="300"
      />
      <h2 className={styles.showcaseTitle}>
        {AUTH_SHOWCASE_COPY.headingLead}{' '}
        <span className={styles.showcaseAccent}>
          {AUTH_SHOWCASE_COPY.headingAccent}
        </span>
      </h2>
      <p className={styles.showcaseDescription}>
        {AUTH_SHOWCASE_COPY.description}
      </p>
      <div className={styles.showcaseDots} aria-hidden="true">
        <span className={styles.showcaseDotActive} />
        <span className={styles.showcaseDot} />
        <span className={styles.showcaseDot} />
      </div>
      <nav className={styles.showcaseFooter} aria-label="Legal and support">
        <ul className={styles.showcaseFooterList}>
          {AUTH_FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
