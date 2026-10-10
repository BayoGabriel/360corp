import feedAvatar from '../../assets/testimonialAvatar.svg'

export type StatIconName = 'products' | 'sales' | 'users' | 'departments'

export interface DashboardStat {
  id: string
  label: string
  value: string
  icon: StatIconName
  href: string
}

export const DASHBOARD_STATS: DashboardStat[] = [
  {
    id: 'products',
    label: 'Products',
    value: '39',
    icon: 'products',
    href: '/inventory',
  },
  {
    id: 'sales',
    label: 'Sales',
    value: '₦16,345.00',
    icon: 'sales',
    href: '/sales',
  },
  { id: 'users', label: 'Users', value: '107', icon: 'users', href: '/contacts' },
  {
    id: 'departments',
    label: 'Departments',
    value: '9',
    icon: 'departments',
    href: '/departments',
  },
]

export const SALES_REPORT_COPY = {
  heading: 'Sales Reports',
  showingFor: 'Showing for :',
  range: 'June 22 - june 28, 2022',
  rangeLabel: 'Change reporting date range',
  chartLabel: 'Sales per day, June 22 to June 28, 2022',
} as const

export interface SalesDayPoint {
  day: string
  sales: number
}

export const SALES_SERIES: SalesDayPoint[] = [
  { day: 'June 22', sales: 30 },
  { day: 'June 23', sales: 62 },
  { day: 'June 24', sales: 24 },
  { day: 'June 25', sales: 52 },
  { day: 'June 26', sales: 68 },
  { day: 'June 27', sales: 44 },
  { day: 'June 28', sales: 62 },
]

export const SALES_HIGHLIGHT = {
  index: 4,
  amount: '₦ 68,000',
  detail: '12 Sales',
} as const

export const RECENT_FEEDS_COPY = {
  heading: 'Recent Feeds',
  searchPlaceholder: 'Search',
  searchLabel: 'Search recent feeds',
  readMoreLabel: 'Read More',
  readMoreHref: '/feeds',
} as const

export interface FeedEntry {
  id: string
  name: string
  email: string
  date: string
  location: string
  body: string
  avatarSrc: string
}

const FEED_BODY =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam. Nullam et facilisi non venenatis. Molestie lectus facilisi sed laoreet faucibus.onsectetur adipiscing elit. Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut aenean eget diam.'

export const RECENT_FEEDS: FeedEntry[] = [
  {
    id: 'feed-haruna',
    name: 'Tobechukwu Haruna',
    email: 'mosesolaniyi@gmail.com',
    date: 'Tue 24 May, 2022',
    location: 'Jahi, Abuja',
    body: FEED_BODY,
    avatarSrc: feedAvatar,
  },
  {
    id: 'feed-uchenna',
    name: 'Blessing Uchenna',
    email: 'blessingiiiidh@gmail.com',
    date: 'Mon 13 Feb, 2022',
    location: 'Wuye, Abuja',
    body: FEED_BODY,
    avatarSrc: feedAvatar,
  },
  {
    id: 'feed-kafayat',
    name: 'Bola Kafayat',
    email: 'mosesolaniyi@gmail.com',
    date: 'Tue 24 May, 2022',
    location: 'Aso, Abuja',
    body: FEED_BODY,
    avatarSrc: feedAvatar,
  },
]

export const DEPARTMENT_MEMBERS_COPY = {
  heading: 'Department Members',
  membersSuffix: 'Members',
  chartLabel: 'Share of members per department',
} as const

export interface DepartmentSlice {
  id: string
  name: string
  members: number
}

export const DEPARTMENT_SLICES: DepartmentSlice[] = [
  { id: 'human-resources', name: 'Human Resources', members: 10 },
  { id: 'marketing', name: 'Marketing', members: 20 },
  { id: 'accounting', name: 'Accounting', members: 30 },
]
