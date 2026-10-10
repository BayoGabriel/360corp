import type { FormEvent } from 'react'
import personAvatar from '../../../assets/testimonialAvatar.svg'
import { POST_COMPOSER_COPY } from '../feeds-content'
import styles from './FeedsPage.module.css'

export function PostComposer() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      className={styles.composer}
      aria-label={POST_COMPOSER_COPY.formLabel}
      onSubmit={onSubmit}
    >
      <img
        className={styles.composerAvatar}
        src={personAvatar}
        alt={POST_COMPOSER_COPY.avatarAlt}
        width="40"
        height="40"
      />
      <label className={styles.srOnly} htmlFor="feed-composer-input">
        {POST_COMPOSER_COPY.inputLabel}
      </label>
      <input
        id="feed-composer-input"
        className={styles.composerInput}
        type="text"
        name="post"
        placeholder={POST_COMPOSER_COPY.placeholder}
      />
      <button type="submit" className={styles.composerButton}>
        {POST_COMPOSER_COPY.submitLabel}
      </button>
    </form>
  )
}
