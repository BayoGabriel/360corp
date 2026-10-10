import announcementImage from '../../assets/announcementImage.svg'
import feedPostImageOne from '../../assets/feedPostImageOne.svg'
import feedPostImageTwo from '../../assets/feedPostImageTwo.svg'
import personAvatar from '../../assets/testimonialAvatar.svg'

export const FEEDS_PAGE_COPY = {
  title: 'Feeds',
  tabsLabel: 'Feed scope',
  starredLabel: 'Starred Feeds',
  starredHref: '/feeds/starred',
} as const

export interface FeedScope {
  id: string
  label: string
  active: boolean
}

export const FEED_SCOPES: FeedScope[] = [
  { id: 'general', label: 'General Feeds', active: true },
  { id: 'branch', label: 'Branch Feeds', active: false },
  { id: 'departmental', label: 'Departmental Feeds', active: false },
]

export const POST_COMPOSER_COPY = {
  formLabel: 'Compose a new post',
  inputLabel: 'Post content',
  placeholder: 'What is new ?, make a post',
  submitLabel: 'Post',
  avatarAlt: '',
} as const

export type FeedMetaIcon = 'clock' | 'calendar' | 'pin'

export interface FeedMetaItem {
  icon: FeedMetaIcon
  text: string
}

export interface FeedPerson {
  name: string
  email: string
  avatarSrc: string
}

export interface FeedImage {
  src: string
  alt: string
}

export interface FeedPost {
  id: string
  author: FeedPerson
  meta: FeedMetaItem[]
  body: string
  seeMoreLabel: string
  seeMoreHref: string
  images: FeedImage[]
}

const FEED_POST_BODY =
  'aliquet vitae, adipiscing pellentesque interdum. Lectus tincidunt facilisis egestas volutpat bibendum montes, nullam facilisis nunc. Amet libero et sed turpis consequat. Magna convallis et dis turpis commodo sed utadipiscing pellentesque interdum. Lectus tincidunt facilisis egestas volutpat bibendum montes, nullam facilisis nunc.'

export const FEED_POSTS: FeedPost[] = [
  {
    id: 'post-haruna',
    author: {
      name: 'Tobechukwu Haruna',
      email: 'tobechukwuharuna@gmail.com',
      avatarSrc: personAvatar,
    },
    meta: [
      { icon: 'clock', text: '40min' },
      { icon: 'pin', text: 'Jahi, Abuja' },
    ],
    body: FEED_POST_BODY,
    seeMoreLabel: 'see more',
    seeMoreHref: '/feeds/post-haruna',
    images: [
      { src: feedPostImageOne, alt: 'Post image placeholder' },
      { src: feedPostImageTwo, alt: 'Post image placeholder' },
    ],
  },
]

export const ANNOUNCEMENT_COPY = {
  heading: 'Announcement',
  badgeCount: '3',
  badgeLabel: '3 new announcements',
  makeLabel: 'Make Announcement',
  makeHref: '/announcements/new',
  seeMoreLabel: 'See More',
  seeMoreHref: '/announcements/2022-business-event',
  previousLabel: 'Previous announcement',
  nextLabel: 'Next announcement',
} as const

export interface Announcement {
  id: string
  author: FeedPerson
  meta: FeedMetaItem[]
  body: string
  image: FeedImage
}

export const ANNOUNCEMENT: Announcement = {
  id: 'announcement-business-event',
  author: {
    name: 'Julianah Beloma',
    email: 'julianahbeloma@gmail.com',
    avatarSrc: personAvatar,
  },
  meta: [
    { icon: 'clock', text: '2:15 am' },
    { icon: 'calendar', text: 'April 28, 2022' },
    { icon: 'pin', text: 'Jahi, Abuja' },
  ],
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, pretium, elit tristique diam aliquet vitae, adipiscing pellentesque interdum. Lectus tincidunt facilisis egestas volutpat bibendum montes, ..........',
  image: { src: announcementImage, alt: 'Announcement image placeholder' },
}
