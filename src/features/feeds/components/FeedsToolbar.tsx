import { FEED_SCOPES, FEEDS_PAGE_COPY } from '../feeds-content'
import styles from './FeedsPage.module.css'

export function FeedsToolbar() {
  return (
    <div className={styles.toolbar}>
      <ul className={styles.scopeTabs} aria-label={FEEDS_PAGE_COPY.tabsLabel}>
        {FEED_SCOPES.map((scope) => {
          const tabClass = scope.active
            ? `${styles.scopeTab} ${styles.scopeTabActive}`
            : styles.scopeTab
          return (
            <li key={scope.id}>
              <button
                type="button"
                className={tabClass}
                aria-pressed={scope.active}
              >
                {scope.label}
              </button>
            </li>
          )
        })}
      </ul>
      <a className={styles.starredLink} href={FEEDS_PAGE_COPY.starredHref}>
        {FEEDS_PAGE_COPY.starredLabel}
      </a>
    </div>
  )
}
