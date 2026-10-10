import type { FeedEntry } from '../dashboard-content'
import { RECENT_FEEDS_COPY } from '../dashboard-content'
import styles from './DashboardPage.module.css'

interface FeedItemProps {
  feed: FeedEntry
}

export function FeedItem({ feed }: FeedItemProps) {
  return (
    <article className={styles.feedItem}>
      <img
        className={styles.feedAvatar}
        src={feed.avatarSrc}
        alt=""
        width="44"
        height="44"
      />
      <div className={styles.feedMain}>
        <div className={styles.feedTop}>
          <div className={styles.feedIdentity}>
            <h3 className={styles.feedName}>{feed.name}</h3>
            <p className={styles.feedEmail}>{feed.email}</p>
          </div>
          <div className={styles.feedMeta}>
            <span className={styles.feedMetaItem}>
              <svg
                className={styles.feedMetaIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </svg>
              {feed.date}
            </span>
            <span className={styles.feedMetaItem}>
              <svg
                className={styles.feedMetaIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 21s-6.5-5.4-6.5-10.3a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" />
                <circle cx="12" cy="10.5" r="2.2" />
              </svg>
              {feed.location}
            </span>
          </div>
        </div>
        <p className={styles.feedBody}>{feed.body}</p>
        <a
          className={styles.feedReadMore}
          href={RECENT_FEEDS_COPY.readMoreHref}
        >
          {RECENT_FEEDS_COPY.readMoreLabel}
        </a>
      </div>
    </article>
  )
}
