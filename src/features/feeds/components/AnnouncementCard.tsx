import type { Announcement } from '../feeds-content'
import { ANNOUNCEMENT_COPY } from '../feeds-content'
import { FeedPersonHeader } from './FeedPersonHeader'
import styles from './FeedsPage.module.css'

interface AnnouncementCardProps {
  announcement: Announcement
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <article
      className={styles.announcement}
      aria-labelledby="announcement-heading"
    >
      <div className={styles.announcementHeader}>
        <div className={styles.announcementTitle}>
          <span className={styles.announcementBadgeWrap}>
            <svg
              className={styles.announcementIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 10v4a1 1 0 0 0 1 1h2l4.5 3.8a0.6 0.6 0 0 0 1-.5V5.7a0.6 0.6 0 0 0-1-.5L7 9H5a1 1 0 0 0-1 1z" />
              <path d="M15.5 9.5a4 4 0 0 1 0 5M18 7a7.5 7.5 0 0 1 0 10" />
            </svg>
            <span
              className={styles.announcementBadge}
              role="status"
              aria-label={ANNOUNCEMENT_COPY.badgeLabel}
            >
              {ANNOUNCEMENT_COPY.badgeCount}
            </span>
          </span>
          <h2 id="announcement-heading" className={styles.announcementHeading}>
            {ANNOUNCEMENT_COPY.heading}
          </h2>
        </div>
        <a className={styles.makeButton} href={ANNOUNCEMENT_COPY.makeHref}>
          {ANNOUNCEMENT_COPY.makeLabel}
        </a>
      </div>
      <div className={styles.announcementBody}>
        <FeedPersonHeader
          person={announcement.author}
          meta={announcement.meta}
        />
        <p className={styles.announcementText}>{announcement.body}</p>
        <img
          className={styles.announcementImage}
          src={announcement.image.src}
          alt={announcement.image.alt}
          width="640"
          height="220"
        />
        <div className={styles.announcementFooter}>
          <a
            className={styles.announcementSeeMore}
            href={ANNOUNCEMENT_COPY.seeMoreHref}
          >
            {ANNOUNCEMENT_COPY.seeMoreLabel}
          </a>
          <div className={styles.announcementNav}>
            <button
              type="button"
              className={styles.announcementNavButton}
              aria-label={ANNOUNCEMENT_COPY.previousLabel}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.announcementNavButton}
              aria-label={ANNOUNCEMENT_COPY.nextLabel}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
