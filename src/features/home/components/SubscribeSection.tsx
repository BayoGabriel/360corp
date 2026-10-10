import type { FormEvent } from 'react'
import { SUBSCRIBE_COPY } from '../home-content'
import styles from './HomePage.module.css'

export function SubscribeSection() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className={styles.subscribe} aria-labelledby="subscribe-heading">
      <div className={styles.subscribeBanner}>
        <h2 id="subscribe-heading" className={styles.subscribeTitle}>
          {SUBSCRIBE_COPY.heading}
        </h2>
        <form
          className={styles.subscribeForm}
          aria-label={SUBSCRIBE_COPY.formLabel}
          onSubmit={onSubmit}
        >
          <label className={styles.srOnly} htmlFor="subscribe-email">
            {SUBSCRIBE_COPY.emailPlaceholder}
          </label>
          <input
            id="subscribe-email"
            className={styles.subscribeInput}
            type="email"
            name="email"
            required
            placeholder={SUBSCRIBE_COPY.emailPlaceholder}
          />
          <button type="submit" className={styles.subscribeButton}>
            {SUBSCRIBE_COPY.submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}
