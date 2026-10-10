import type { ReactNode } from 'react'
import type { FeedMetaIcon, FeedMetaItem, FeedPerson } from '../feeds-content'
import styles from './FeedsPage.module.css'

const META_ICONS: Record<FeedMetaIcon, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3v4M15.5 3v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.4-6.5-10.3a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </>
  ),
}

interface FeedPersonHeaderProps {
  person: FeedPerson
  meta: FeedMetaItem[]
}

export function FeedPersonHeader({ person, meta }: FeedPersonHeaderProps) {
  return (
    <header className={styles.person}>
      <img
        className={styles.personAvatar}
        src={person.avatarSrc}
        alt=""
        width="52"
        height="52"
      />
      <div className={styles.personBody}>
        <h3 className={styles.personName}>{person.name}</h3>
        <p className={styles.personEmail}>{person.email}</p>
        <ul className={styles.personMeta}>
          {meta.map((item) => (
            <li key={item.text} className={styles.personMetaItem}>
              <svg
                className={styles.personMetaIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                {META_ICONS[item.icon]}
              </svg>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
