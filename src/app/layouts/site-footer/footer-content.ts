import { SITE_NAV_ITEMS } from '../site-navbar/nav-links'

export const FOOTER_BRAND_COPY = {
  description:
    '360 Corporation is a Varius mauris semper blandit vestibulum, adipiscing condimentum. Malesuada pellentesque blandit nisl suspendisse phasellus felis pharetra morbi.',
  email: '360Corporation@gmail.com',
  phone: '+99 (0) 101 0000 888',
} as const

export const FOOTER_CONTACT_COPY = {
  heading: 'Get In Touch',
  description:
    'We are legend Lorem ipsum dolor sitmet, nsecte ipisicing eit, sed do eiusmod tempor',
  emailPlaceholder: 'Enter Your Email',
  submitLabel: 'Subscribe to newsletter',
} as const

export const FOOTER_LINKS_COPY = {
  heading: 'Useful Links',
  items: SITE_NAV_ITEMS,
} as const

export type FooterSocialIcon = 'twitter' | 'facebook' | 'linkedin' | 'google-plus'

export interface FooterSocialLink {
  id: string
  label: string
  href: string
  icon: FooterSocialIcon
}

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
  { id: 'twitter', label: 'Twitter', href: '#', icon: 'twitter' },
  { id: 'facebook', label: 'Facebook', href: '#', icon: 'facebook' },
  { id: 'linkedin', label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { id: 'google-plus', label: 'Google+', href: '#', icon: 'google-plus' },
]
