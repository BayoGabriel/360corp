import { HERO_HIGHLIGHTS } from '../home-content'
import styles from './HomePage.module.css'

export function HeroHighlights() {
  return (
    <section className={styles.highlights} aria-label="Key highlights">
      <ul className={styles.highlightList}>
        {HERO_HIGHLIGHTS.map((item) => (
          <li key={item.id} className={styles.highlightItem}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="M7 12.5l3.2 3.2L17 9"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.highlightText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
