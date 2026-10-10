export type DashboardNavIconName =
  | 'dashboard'
  | 'feeds'
  | 'contacts'
  | 'branch'
  | 'departments'
  | 'schedule'
  | 'tasks'
  | 'inventory'
  | 'sales'
  | 'constants'
  | 'messaging'
  | 'conferencing'
  | 'settings'

export interface DashboardNavItem {
  id: string
  label: string
  href: string
  icon: DashboardNavIconName
}

export const DASHBOARD_NAV_ITEMS: DashboardNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
  { id: 'feeds', label: 'Feeds', href: '/feeds', icon: 'feeds' },
  {
    id: 'contacts',
    label: 'Contacts managements',
    href: '/contacts',
    icon: 'contacts',
  },
  { id: 'branch', label: 'Branch', href: '/branch', icon: 'branch' },
  {
    id: 'departments',
    label: 'Departments',
    href: '/departments',
    icon: 'departments',
  },
  {
    id: 'schedule',
    label: 'Schedule & Reports',
    href: '/schedule-reports',
    icon: 'schedule',
  },
  { id: 'tasks', label: 'Task Assignment', href: '/tasks', icon: 'tasks' },
  {
    id: 'inventory',
    label: 'Inventory & Stores',
    href: '/inventory',
    icon: 'inventory',
  },
  { id: 'sales', label: 'Sales & Payments', href: '/sales', icon: 'sales' },
  { id: 'constants', label: 'Constants', href: '/constants', icon: 'constants' },
  { id: 'messaging', label: 'Messaging', href: '/messaging', icon: 'messaging' },
  {
    id: 'conferencing',
    label: 'Conferencing',
    href: '/conferencing',
    icon: 'conferencing',
  },
  { id: 'settings', label: 'Settings', href: '/settings', icon: 'settings' },
]

export const DASHBOARD_TOPBAR_COPY = {
  searchPlaceholder: 'Search',
  searchLabel: 'Search the dashboard',
  historyLabel: 'Recent activity',
  notificationsLabel: 'Notifications',
  unreadLabel: 'Unread notifications',
  greeting: 'Hi, Olayimika',
  menuOpenLabel: 'Open navigation menu',
  menuCloseLabel: 'Close navigation menu',
} as const
