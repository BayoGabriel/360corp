import { useEffect } from 'react'
import type { MoreActionFeedback } from '../departments-content'
import { NOTICE_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

const AUTO_DISMISS_MS = 5000

interface NoticeToastProps {
  variant: MoreActionFeedback
  onDismiss: () => void
}

export function NoticeToast({ variant, onDismiss }: NoticeToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, AUTO_DISMISS_MS)
    return () => window.clearTimeout(timer)
  }, [onDismiss])

  const copy = NOTICE_COPY[variant]
  const isError = variant === 'error'

  return (
    <div
      className={`${styles.notice} ${
        isError ? styles.noticeError : styles.noticeSuccess
      }`}
      role={isError ? 'alert' : 'status'}
    >
      <svg
        className={styles.noticeIcon}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        {isError ? (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 7.5v6M12 16.6v.2" />
            <circle cx="3.5" cy="6" r="1" />
            <circle cx="5.5" cy="2.5" r="0.7" />
            <circle cx="21" cy="5" r="1" />
            <circle cx="2.5" cy="13" r="0.7" />
          </>
        ) : (
          <>
            <circle cx="12" cy="12" r="10" />
            <path d="M7.5 12.5l3 3 6-6.5" />
          </>
        )}
      </svg>
      <div className={styles.noticeBody}>
        <p className={styles.noticeTitle}>{copy.title}</p>
        <p className={styles.noticeText}>{copy.text}</p>
      </div>
    </div>
  )
}
