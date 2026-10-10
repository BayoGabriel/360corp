import type { MoreAction, MoreActionFeedback } from '../departments-content'
import styles from './DepartmentsPage.module.css'

const ACTION_ICONS = {
  redeploy: (
    <path d="M4 15v4.5h16V15M12 15.5V4M7.5 8.5L12 4l4.5 4.5" />
  ),
  'shield-check': (
    <>
      <path d="M12 3l7 2.5v5c0 5-3.2 8.3-7 10-3.8-1.7-7-5-7-10v-5z" />
      <path d="M9 12l2.2 2.2L15.5 9.7" />
    </>
  ),
} as const

interface MoreActionItemProps {
  action: MoreAction
  onAction: (feedback: MoreActionFeedback) => void
}

export function MoreActionItem({ action, onAction }: MoreActionItemProps) {
  return (
    <section className={styles.actionSection}>
      <div className={styles.actionTitleRow}>
        <svg
          className={styles.actionIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          {ACTION_ICONS[action.icon]}
        </svg>
        <h3 className={styles.actionTitle}>{action.title}</h3>
      </div>
      <p className={styles.actionText}>{action.description}</p>
      <button
        type="button"
        className={styles.actionButton}
        onClick={() => onAction(action.feedback)}
      >
        {action.buttonLabel}
      </button>
    </section>
  )
}
