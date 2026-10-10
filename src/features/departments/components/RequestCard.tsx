import { REQUEST_CARD_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

export function RequestCard() {
  return (
    <section className={styles.requestCard} aria-labelledby="request-heading">
      <img
        className={styles.requestImage}
        src={REQUEST_CARD_COPY.imageSrc}
        alt={REQUEST_CARD_COPY.imageAlt}
        width="220"
        height="160"
      />
      <div className={styles.requestBody}>
        <h2 id="request-heading" className={styles.requestHeading}>
          {REQUEST_CARD_COPY.heading}
        </h2>
        <p className={styles.requestText}>{REQUEST_CARD_COPY.body}</p>
        <a className={styles.wideButton} href={REQUEST_CARD_COPY.buttonHref}>
          {REQUEST_CARD_COPY.buttonLabel}
        </a>
      </div>
    </section>
  )
}
