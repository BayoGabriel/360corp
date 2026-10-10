import personAvatar from '../../assets/testimonialAvatar.svg'
import requestIllustration from '../../assets/requestIllustration.svg'

export type DepartmentIconName =
  | 'human-resources'
  | 'marketing'
  | 'accounting'
  | 'production'
  | 'inventory'
  | 'logistics'
  | 'employee'
  | 'trainings'
  | 'salary'
  | 'query'
  | 'complaints'
  | 'application'
  | 'awards'
  | 'events'
  | 'recruitments'
  | 'attendance'
  | 'requests'
  | 'regulatory'
  | 'policy'
  | 'exits'
  | 'schedule'

export interface DepartmentHead {
  name: string
  role: string
  avatarSrc: string
}

export interface Department {
  id: string
  name: string
  icon: DepartmentIconName
  head: DepartmentHead
}

const DEFAULT_HEAD: DepartmentHead = {
  name: 'Blessing Uchenna',
  role: 'Head Of Department',
  avatarSrc: personAvatar,
}

export const DEPARTMENTS: Department[] = [
  {
    id: 'human-resources',
    name: 'Human Rresources',
    icon: 'human-resources',
    head: DEFAULT_HEAD,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'marketing',
    head: { ...DEFAULT_HEAD, name: 'Damilola Peters' },
  },
  {
    id: 'accounting',
    name: 'Accounting',
    icon: 'accounting',
    head: { ...DEFAULT_HEAD, name: 'Chinedu Okafor' },
  },
  {
    id: 'production',
    name: 'Production',
    icon: 'production',
    head: { ...DEFAULT_HEAD, name: 'Ibrahim Musa' },
  },
  {
    id: 'inventory',
    name: 'Inventory',
    icon: 'inventory',
    head: { ...DEFAULT_HEAD, name: 'Amara Eze' },
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: 'logistics',
    head: { ...DEFAULT_HEAD, name: 'Seun Adebayo' },
  },
]

export const DEPARTMENTS_PAGE_COPY = {
  title: 'Departments',
  createLabel: 'Create Department',
  createHref: '/departments/new',
} as const

export interface DepartmentModule {
  id: string
  label: string
  icon: DepartmentIconName
  path: string
  badge?: number
}

export const DEPARTMENT_MODULES: DepartmentModule[] = [
  { id: 'employee', label: 'Employee', icon: 'employee', path: 'employees' },
  {
    id: 'trainings',
    label: 'Trainings',
    icon: 'trainings',
    path: 'trainings',
  },
  {
    id: 'salary-structure',
    label: 'Salary Structure',
    icon: 'salary',
    path: 'salary-structure',
  },
  { id: 'query', label: 'Query', icon: 'query', path: 'query' },
  {
    id: 'complaints',
    label: 'Complaints',
    icon: 'complaints',
    path: 'complaints',
  },
  {
    id: 'application',
    label: 'Application',
    icon: 'application',
    path: 'application',
  },
  {
    id: 'performance-awards',
    label: 'Performance & Awards',
    icon: 'awards',
    path: 'performance-awards',
  },
  { id: 'events', label: 'Events', icon: 'events', path: 'events', badge: 3 },
  {
    id: 'recruitments',
    label: 'Recruitments',
    icon: 'recruitments',
    path: 'recruitments',
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: 'attendance',
    path: 'attendance',
  },
  { id: 'requests', label: 'Requests', icon: 'requests', path: 'requests' },
  {
    id: 'regulatory-payments',
    label: 'Regulatory Payments',
    icon: 'regulatory',
    path: 'regulatory-payments',
  },
  {
    id: 'company-policy',
    label: 'Company Policy',
    icon: 'policy',
    path: 'company-policy',
    badge: 2,
  },
  { id: 'exits', label: 'Exits', icon: 'exits', path: 'exits' },
]

export const DEPARTMENT_DETAIL_COPY = {
  backLabel: 'Back to departments',
  chatLabel: 'Message head of department',
} as const

/* Shared records table chrome */

export const RECORDS_COPY = {
  downloadLabel: 'Download PDF',
  printLabel: 'Print',
  searchPlaceholder: 'Search',
  searchLabel: 'Search records',
  previousLabel: 'Previous',
  nextLabel: 'Next',
} as const

export interface FilterSelect {
  id: string
  label: string
  options: string[]
}

const BRANCH_FILTER: FilterSelect = {
  id: 'branch',
  label: 'Branch',
  options: ['All Branches', 'Wuse Abuja', 'Jahi Abuja'],
}

const DEPARTMENT_FILTER: FilterSelect = {
  id: 'department',
  label: 'Department',
  options: [
    'All Departments',
    'Marketing',
    'Accounting',
    'Inventory',
    'Production',
    'Logistics',
  ],
}

const JOB_TYPE_FILTER: FilterSelect = {
  id: 'job-type',
  label: 'Job Type',
  options: ['All Job Types', 'Full Time', 'Part Time', 'Contract'],
}

const ENTRIES_FILTER: FilterSelect = {
  id: 'entries',
  label: 'Show entries',
  options: ['10', '25', '50', '100'],
}

const SHIFT_FILTER: FilterSelect = {
  id: 'shift',
  label: 'Shift',
  options: ['All Shifts', 'Morning', 'Afternoon', 'Night'],
}

export interface RecordsPagination {
  start: number
  end: number
  total: number
  currentPage: number
}

/* Employee list */

export const EMPLOYEES_COPY = {
  title: 'Employee',
  backHref: '/departments/human-resources',
  backLabel: 'Back to department',
  createLabel: 'Create Staff',
  createHref: '/departments/human-resources/employees/new',
} as const

export const EMPLOYEE_FILTERS: FilterSelect[] = [
  ENTRIES_FILTER,
  BRANCH_FILTER,
  DEPARTMENT_FILTER,
  JOB_TYPE_FILTER,
  SHIFT_FILTER,
]

export interface Employee {
  id: string
  name: string
  email: string
  phone: string
  branch: string
  department: string
  avatarSrc: string
}

const employee = (
  id: string,
  name: string,
  department: string,
): Employee => ({
  id,
  name,
  email: `${name.toLowerCase().replace(/[^a-z]/g, '')}@gmail.com`,
  phone: '08101827364',
  branch: 'Wuse Abuja.',
  department: `${department}.`,
  avatarSrc: personAvatar,
})

export const EMPLOYEES: Employee[] = [
  employee('olamilekan-odunlami', 'Olamilekan Odunlami', 'Marketing'),
  employee('olamide-odunayo', 'Olamide Odunayo', 'Accounting'),
  employee('solape-thomas', 'Solape Thomas', 'Inventory'),
  employee('olaiya-richard', 'Olaiya Richard', 'Marketing'),
  employee('adebiyi-demilade', 'Adebiyi Demilade', 'Production'),
  employee('odunlami-damitola', 'Odunlami Damitola', 'Marketing'),
  employee('akpan-john', 'Akpan John', 'Production'),
  employee('joseph-benicta', 'Joseph Benicta', 'Inventory'),
  employee('ajayi-joel', 'Ajayi Joel', 'Marketing'),
  employee('john-gabriel', 'John Gabriel', 'Logistics'),
  employee('daniels-joy', 'Daniels Joy', 'Production'),
]

export const EMPLOYEES_PAGINATION: RecordsPagination = {
  start: 1,
  end: 10,
  total: 38,
  currentPage: 1,
}

/* Trainings list */

export const TRAININGS_COPY = {
  title: 'Training',
  backHref: '/departments/human-resources',
  backLabel: 'Back to department',
  createLabel: 'Create Training',
  createHref: '/departments/human-resources/trainings/new',
} as const

export const TRAINING_FILTERS: FilterSelect[] = [
  BRANCH_FILTER,
  DEPARTMENT_FILTER,
  JOB_TYPE_FILTER,
  ENTRIES_FILTER,
]

export interface Training {
  id: string
  title: string
  duration: string
  organisation: string
  platform: string
  cost: string
  employeeCount: number
}

const training = (
  id: string,
  title: string,
  duration: string,
  organisation: string,
  platform: string,
  employeeCount: number,
): Training => ({
  id,
  title,
  duration,
  organisation,
  platform,
  cost: '10,000',
  employeeCount,
})

export const TRAININGS: Training[] = [
  training(
    'web-development-2',
    'Web Development 2.0',
    '3 Months',
    'EduTech Academy',
    '10 Dalaba, Abuja',
    30,
  ),
  training(
    'office-management',
    'Office Management',
    '3 Months',
    'Schoolify',
    'Corsera',
    20,
  ),
  training('product-owner', 'Product Owner', '2 Months', 'U-lesson', 'Corsera', 26),
  training(
    'graphics-design',
    'Graphics Design',
    '3 Months',
    'EduTech Academy',
    '10 Uke Gariki, Abuja',
    10,
  ),
  training(
    'web-development-1',
    'Web Development 2.0',
    '1 Months',
    'EduTech Academy',
    'Udemiy',
    22,
  ),
  training(
    'smart-accounting',
    'Smart Accounting',
    '3 Months',
    'NNPC',
    'First Floor NNPC, Abuja',
    14,
  ),
  training(
    'backend-development',
    'Backend Development',
    '5 Months',
    'Schoolify',
    '08 Festac, Abuja',
    10,
  ),
  training(
    'product-manager',
    'Product Manager',
    '3 Months',
    'EduTech Academy',
    'Youtube',
    24,
  ),
  training(
    'graphics-design-2',
    'Graphics Design',
    '3 Months',
    'EduTech Academy',
    '10 Uke Gariki, Abuja',
    10,
  ),
]

export const TRAININGS_PAGINATION: RecordsPagination = {
  start: 1,
  end: 8,
  total: 38,
  currentPage: 1,
}

export const ROW_ACTIONS_COPY = {
  viewLabel: 'View record',
  editLabel: 'Edit record',
  deleteLabel: 'Delete record',
} as const

/* Employee profile */

export const PROFILE_COPY = {
  moreActionLabel: 'More Action',
  titleSuffix: 'Profile',
} as const

export interface ProfileStat {
  id: string
  label: string
  value: string
  icon: DepartmentIconName
  href: string
  badge?: number
}

export const PROFILE_STATS: ProfileStat[] = [
  {
    id: 'schedule',
    label: 'Schedule',
    value: '08',
    icon: 'events',
    href: '/departments/human-resources/employees/olamilekan-odunlami/schedule',
    badge: 2,
  },
  {
    id: 'request',
    label: 'Request',
    value: '12',
    icon: 'requests',
    href: '/departments/human-resources/employees/olamilekan-odunlami/requests',
  },
  {
    id: 'query',
    label: 'Query',
    value: '01',
    icon: 'query',
    href: '/departments/human-resources/employees/olamilekan-odunlami/query',
    badge: 1,
  },
]

export const RECENT_SCHEDULE_COPY = {
  heading: 'Recent Schedule',
  titleLabel: 'Schedule Title :',
  titleValue: 'Lorem ipsum dolor sit amet.',
  detailsLabel: 'Schedule Details :',
  detailsValue:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna sit vel ultricies sit feugiat proin tortor.',
  createdLabel: 'Created By :',
  createdValue: 'Super-Admin',
  startLabel: 'Start Date :',
  startValue: 'June 08, 2021',
  endLabel: 'End Date :',
  endValue: 'June 12, 2021',
  statusLabel: 'Progress',
  captureLabel: 'Capture Report',
  captureHref: '/departments/human-resources/employees/olamilekan-odunlami/reports',
} as const

export const PERFORMANCE_COPY = {
  heading: 'Performance',
  showingFor: 'Showing for :',
  range: 'June 22 - june 28, 2022',
  rangeLabel: 'Change reporting date range',
  chartLabel: 'Employee performance, June 22 to June 28, 2022',
} as const

export const PERFORMANCE_PERIODS = ['7D', '1M', '6M', '1Y'] as const

export interface PerformancePoint {
  day: string
  value: number
}

export const PERFORMANCE_SERIES: PerformancePoint[] = [
  { day: 'Mon 16', value: 26 },
  { day: 'Tue 17', value: 58 },
  { day: 'Wed 18', value: 20 },
  { day: 'Thu 19', value: 44 },
  { day: 'Fri 20', value: 70 },
  { day: 'Mon 23', value: 56 },
  { day: 'Tue 24', value: 42 },
]

export const ATTENDANCE_COPY = {
  heading: 'Attendance',
  monthLabel: 'Select month',
  month: 'November',
} as const

export interface AttendanceStat {
  id: string
  label: string
  value: string
}

export const ATTENDANCE_STATS: AttendanceStat[] = [
  { id: 'attendance', label: 'Attendance', value: '30' },
  { id: 'late', label: 'Late', value: '07' },
  { id: 'absents', label: 'Absents', value: '04' },
]

export const REQUEST_CARD_COPY = {
  heading: 'Make a Request :',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna sit vel ultricies sit feugiat proin tortor.',
  buttonLabel: 'Make a Request',
  buttonHref: '/departments/human-resources/employees/olamilekan-odunlami/requests/new',
  imageSrc: requestIllustration,
  imageAlt: 'Request illustration placeholder',
} as const

export interface StaffDetailField {
  id: string
  label: string
  value: string
}

export interface EmployeeProfile {
  id: string
  name: string
  email: string
  avatarSrc: string
  locationToggleLabel: string
  cvLabel: string
  cvHref: string
  detailsHeading: string
  details: StaffDetailField[]
}

const profileField = (
  id: string,
  label: string,
  value: string,
): StaffDetailField => ({ id, label, value })

export const EMPLOYEE_PROFILE: EmployeeProfile = {
  id: 'olamilekan-odunlami',
  name: 'Olamilekan Odunlami',
  email: 'olamilekanodunlami@gmail.com',
  avatarSrc: personAvatar,
  locationToggleLabel: 'make your location visible',
  cvLabel: 'View Details In CV Format',
  cvHref: '/departments/human-resources/employees/olamilekan-odunlami/cv',
  detailsHeading: 'Staff Details',
  details: [
    profileField('firstname', 'Firstname', 'Olamilekan'),
    profileField('lastname', 'Lastname', 'Odunlami'),
    profileField('email', 'Email', 'olamilekan@gmail.com'),
    profileField('phone', 'Phone Number', '09101831061'),
    profileField('dob', 'Date of Birth', '08-June-2022'),
    profileField('address', 'Home Address', 'Akungba, Akure, Abija'),
    profileField('gender', 'Gender', 'male'),
    profileField('religious', 'Religious', 'Christianity'),
    profileField('marital', 'Marital Status', 'Married'),
  ],
}
