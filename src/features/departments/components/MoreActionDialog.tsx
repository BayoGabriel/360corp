import { useEffect } from 'react'
import type { MoreActionFeedback } from '../departments-content'
import { MORE_ACTION_COPY, MORE_ACTIONS } from '../departments-content'
import { MoreActionItem } from './MoreActionItem'
import styles from './DepartmentsPage.module.css'

interface MoreActionDialogProps {
  onClose: () => void
  onAction: (feedback: MoreActionFeedback) => void
}

export function MoreActionDialog({ onClose, onAction }: MoreActionDialogProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className={styles.dialogBackdrop} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="more-action-heading"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.dialogHeader}>
          <h2 id="more-action-heading" className={styles.dialogTitle}>
            {MORE_ACTION_COPY.heading}
          </h2>
          <button
            type="button"
            className={styles.dialogClose}
            aria-label={MORE_ACTION_COPY.closeLabel}
            onClick={onClose}
            autoFocus
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className={styles.dialogBody}>
          {MORE_ACTIONS.map((action) => (
            <MoreActionItem
              key={action.id}
              action={action}
              onAction={onAction}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
