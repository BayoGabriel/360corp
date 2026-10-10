import type { FormEvent } from 'react'
import { RECENT_FEEDS, RECENT_FEEDS_COPY } from '../dashboard-content'
import { FeedItem } from './FeedItem'
import styles from './DashboardPage.module.css'

export function RecentFeedsPanel() {
  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <aside className={styles.feedsPanel} aria-labelledby="recent-feeds-heading">
      <div className={styles.feedsHeader}>
        <div className={styles.feedsTitleRow}>
          <svg
            className={styles.feedsIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 11a8 8 0 0 1 8 8" />
            <path d="M5 5a14 14 0 0 1 14 14" />
            <circle cx="5.5" cy="18.5" r="1.4" fill="currentColor" />
          </svg>
          <h2 id="recent-feeds-heading" className={styles.feedsHeading}>
            {RECENT_FEEDS_COPY.heading}
          </h2>
        </div>
        <form
          className={styles.feedsSearch}
          role="search"
          onSubmit={onSearchSubmit}
        >
          <label className={styles.srOnly} htmlFor="feeds-search">
            {RECENT_FEEDS_COPY.searchLabel}
          </label>
          <svg
            className={styles.feedsSearchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </svg>
          <input
            id="feeds-search"
            className={styles.feedsSearchInput}
            type="search"
            name="query"
            placeholder={RECENT_FEEDS_COPY.searchPlaceholder}
          />
        </form>
      </div>
      <ul className={styles.feedList}>
        {RECENT_FEEDS.map((feed) => (
          <li key={feed.id} className={styles.feedListItem}>
            <FeedItem feed={feed} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
