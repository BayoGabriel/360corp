export interface SiteNavItem {
  label: string
  href: string
}

export const SITE_NAV_ITEMS: SiteNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Support', href: '/support' },
]

export const SITE_AUTH_LINKS = {
  login: { label: 'Login', href: '/login' },
  createAccount: { label: 'Create Account', href: '/create-account' },
} as const
