import {
  EMPLOYEE_PROFILE,
  PROFILE_COPY,
  PROFILE_STATS,
} from '../departments-content'
import { AttendanceCard } from './AttendanceCard'
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

export function EmployeeProfilePage({
  departmentId,
}: EmployeeProfilePageProps) {
  const backHref = `/departments/${departmentId}/employees`

  return (
    <div className={styles.page}>
      <PageHeader
        title={`${EMPLOYEE_PROFILE.name} ${PROFILE_COPY.titleSuffix}`}
        backHref={backHref}
        backLabel="Back to employees"
      >
        <button type="button" className={styles.createButton}>
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
    </div>
  )
}
