import type { ReactNode } from 'react'
import { DashboardLayout } from '../../app/layouts/dashboard/DashboardLayout'
import { DashboardPage } from '../../features/dashboard'
import {
  DepartmentDetailPage,
  DepartmentsPage,
  EmployeeProfilePage,
  EmployeesPage,
  TrainingsPage,
} from '../../features/departments'
import { FeedsPage } from '../../features/feeds'

interface DashboardRouteProps {
  activeHref: string
}

export function DashboardRoute({ activeHref }: DashboardRouteProps) {
  const segments = activeHref.split('/')
  const departmentId = segments[2] ?? ''
  const section = segments[3]
  const recordId = segments[4]

  let page: ReactNode = null
  if (activeHref === '/dashboard') {
    page = <DashboardPage />
  } else if (activeHref === '/feeds') {
    page = <FeedsPage />
  } else if (segments[1] === 'departments' && departmentId) {
    if (section === 'employees' && recordId) {
      page = <EmployeeProfilePage departmentId={departmentId} />
    } else if (section === 'employees') {
      page = <EmployeesPage departmentId={departmentId} />
    } else if (section === 'trainings') {
      page = <TrainingsPage departmentId={departmentId} />
    } else {
      page = <DepartmentDetailPage departmentId={departmentId} />
    }
  } else if (segments[1] === 'departments') {
    page = <DepartmentsPage />
  }

  return <DashboardLayout activeHref={activeHref}>{page}</DashboardLayout>
}
