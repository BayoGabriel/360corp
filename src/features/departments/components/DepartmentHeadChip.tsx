import type { DepartmentHead } from '../departments-content'
import { DEPARTMENT_DETAIL_COPY } from '../departments-content'
import styles from './DepartmentsPage.module.css'

interface DepartmentHeadChipProps {
  head: DepartmentHead
}

export function DepartmentHeadChip({ head }: DepartmentHeadChipProps) {
  return (
    <div className={styles.headChip}>
      <img
        className={styles.headAvatar}
        src={head.avatarSrc}
        alt=""
        width="42"
        height="42"
      />
      <span className={styles.headInfo}>
        <span className={styles.headName}>{head.name}</span>
        <span className={styles.headRole}>{head.role}</span>
      </span>
      <button
        type="button"
        className={styles.headChatButton}
        aria-label={DEPARTMENT_DETAIL_COPY.chatLabel}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4a8 8 0 0 0-8 8c0 1.5.4 2.9 1.2 4.1L4 20l4.1-1.2A8 8 0 1 0 12 4z" />
          <path d="M9 11.5h6M9 14.5h4" />
        </svg>
      </button>
    </div>
  )
}
