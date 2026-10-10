import {
  CheckMailPage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
} from '../features/auth'
import { HomePage } from '../features/home'
import { DashboardRoute } from '../routes/dashboard'
import { DASHBOARD_NAV_ITEMS } from './layouts/dashboard/dashboard-nav'
import { PublicLayout } from './layouts/PublicLayout'

function App() {
  const pathname = window.location.pathname
  const isDashboardArea = DASHBOARD_NAV_ITEMS.some(
    (item) => item.href === pathname || pathname.startsWith(`${item.href}/`),
  )

  if (pathname === '/login') {
    return <LoginPage />
  }

  if (pathname === '/create-account') {
    return <RegisterPage />
  }

  if (pathname === '/forgot-password') {
    return <ForgotPasswordPage />
  }

  if (pathname === '/check-mail') {
    return <CheckMailPage />
  }

  if (pathname === '/reset-password') {
    return <ResetPasswordPage />
  }

  if (isDashboardArea) {
    return <DashboardRoute activeHref={pathname} />
  }

  return (
    <PublicLayout activeHref="/">
      <HomePage />
    </PublicLayout>
  )
}

export default App
