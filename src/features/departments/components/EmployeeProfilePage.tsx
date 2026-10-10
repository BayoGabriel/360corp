import { useCallback, useState } from 'react'
import type { MoreActionFeedback } from '../departments-content'
import {
  EMPLOYEE_PROFILE,
  PROFILE_COPY,
  PROFILE_STATS,
} from '../departments-content'
import { AttendanceCard } from './AttendanceCard'
import { MoreActionDialog } from './MoreActionDialog'
import { NoticeToast } from './NoticeToast'
import { PageHeader } from './PageHeader'
import { PerformanceCard } from './PerformanceCard'
import { ProfileStatCard } from './ProfileStatCard'
import { ProfileSummaryCard } from './ProfileSummaryCard'
import { RecentScheduleCard } from './RecentScheduleCard'
import { RequestCard } from './RequestCard'
import { StaffDetails } from './StaffDetails'
import styles from './DepartmentsPage.module.css'

interface EmployeeProfilePageProps {
  departmentId: string
}

interface NoticeState {
  variant: MoreActionFeedback
  key: number
}

export function EmployeeProfilePage({
  departmentId,
}: EmployeeProfilePageProps) {
  const backHref = `/departments/${departmentId}/employees`
  const [dialogOpen, setDialogOpen] = useState(false)
  const [notice, setNotice] = useState<NoticeState | null>(null)
  const dismissNotice = useCallback(() => setNotice(null), [])

  const onMoreAction = (feedback: MoreActionFeedback) => {
    setDialogOpen(false)
    setNotice({ variant: feedback, key: Date.now() })
  }

  return (
    <div className={styles.page}>
      <PageHeader
        title={`${EMPLOYEE_PROFILE.name} ${PROFILE_COPY.titleSuffix}`}
        backHref={backHref}
        backLabel="Back to employees"
      >
        <button
          type="button"
          className={styles.createButton}
          onClick={() => setDialogOpen(true)}
        >
          {PROFILE_COPY.moreActionLabel}
        </button>
      </PageHeader>
      <div className={styles.profileGrid}>
        <div className={styles.profileMain}>
          <ul className={styles.profileStats}>
            {PROFILE_STATS.map((stat) => (
              <li key={stat.id}>
                <ProfileStatCard stat={stat} />
              </li>
            ))}
          </ul>
          <div className={styles.profileColumns}>
            <div className={styles.profileColumn}>
              <RecentScheduleCard />
              <RequestCard />
            </div>
            <div className={styles.profileColumn}>
              <PerformanceCard />
              <AttendanceCard />
            </div>
          </div>
        </div>
        <aside className={styles.profileAside}>
          <ProfileSummaryCard profile={EMPLOYEE_PROFILE} />
          <StaffDetails profile={EMPLOYEE_PROFILE} />
        </aside>
      </div>
      {dialogOpen && (
        <MoreActionDialog
          onClose={() => setDialogOpen(false)}
          onAction={onMoreAction}
        />
      )}
      {notice && (
        <NoticeToast
          key={notice.key}
          variant={notice.variant}
          onDismiss={dismissNotice}
        />
      )}
    </div>
  )
}
