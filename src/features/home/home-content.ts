import featureAutomationImage from '../../assets/FeaturesImageThree.svg'
import featureCardsImage from '../../assets/FeaturesImageTwo.svg'
import featureDashboardImage from '../../assets/FeaturesImageOne.svg'

export const HERO_COPY = {
  headingLead: 'Business Activities At',
  headingLine: 'Your',
  headingAccent: 'Finger Tips',
  description:
    'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lorem Cras Habitasse Donec Arcu Enim Eu, Justo, Nunc Nulla. Mauris Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor Enim At Nulla. Nunc Non Egestas Vitae Quis Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor.',
  cta: { label: 'Get Started', href: '/create-account' },
} as const

export interface HeroHighlight {
  id: string
  text: string
}

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  { id: 'control', text: 'Business Activities At Your Finger Tips' },
  { id: 'speed', text: "Competitors Aren't Playing. Move Faster!" },
  { id: 'growth', text: "Competitors Aren't Playing. Move Faster!" },
]

export const HOW_IT_WORKS_COPY = {
  heading: 'How it works',
  subheading: 'Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet,',
  linkLabel: 'Read More',
  linkHref: '/how-it-works',
} as const

export interface HowItWorksStep {
  id: string
  title: string
  description: string
}

const HOW_IT_WORKS_STEP_BODY =
  'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lorem Cras Habitasse Donec Arcu Enim Eu, Justo, Nunc Nulla. Mauris Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor Enim At Nulla. Nunc Non Egestas Cras Habitasse Donec Arcu Enim Eu, Justo, Nunc Nulla. Mauris Turpis Ut Est Est Quis Sed'

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 'step-discover',
    title: 'Lorem Ipsum Dolor Sit Amet,',
    description: HOW_IT_WORKS_STEP_BODY,
  },
  {
    id: 'step-configure',
    title: 'Lorem Ipsum Dolor Sit Amet,',
    description: HOW_IT_WORKS_STEP_BODY,
  },
  {
    id: 'step-launch',
    title: 'Lorem Ipsum Dolor Sit Amet,',
    description: HOW_IT_WORKS_STEP_BODY,
  },
]

export const TESTIMONIALS_COPY = {
  heading: 'Testimonial',
  subheading: 'Lorem Cras Habitasse Donec Arcu Enim Eu, Justo,',
} as const

export interface Testimonial {
  id: string
  name: string
  quote: string
}

const TESTIMONIAL_QUOTE =
  'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Varius Mauris Semper Blandit Vestibulum, Adipiscing Condimentum. Malesuada Pellentesque Blandit Nisl Suspendisse Phasellus Felis Pharetra Morbi.'

export const TESTIMONIALS: Testimonial[] = [
  { id: 'testimonial-1', name: 'Oluremi Adeniyi', quote: TESTIMONIAL_QUOTE },
  { id: 'testimonial-2', name: 'Oluremi Adeniyi', quote: TESTIMONIAL_QUOTE },
  { id: 'testimonial-3', name: 'Oluremi Adeniyi', quote: TESTIMONIAL_QUOTE },
]

export const FEATURES_COPY = {
  heading: 'Features',
  subheading: 'Features To Help Your Team Succeed',
  linkLabel: 'Learn More',
  linkHref: '/features',
} as const

export interface HomeFeature {
  id: string
  eyebrow: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

const FEATURE_BODY =
  'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lorem Cras Habitasse Donec Arcu Enim Eu, Justo, Nunc Nulla. Mauris Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor Enim At Nulla. Nunc Non Egestas Vitae Quis Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lorem Cras Habitasse Donec Arcu Enim Eu, Justo, Nunc Nulla. Mauris Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor Enim At Nulla. Nunc Non Egestas Vitae Quis Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor .'

export const FEATURE_ITEMS: HomeFeature[] = [
  {
    id: 'feature-dashboard',
    eyebrow: 'view dashboard',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: FEATURE_BODY,
    imageSrc: featureDashboardImage,
    imageAlt: 'Product dashboard preview',
  },
  {
    id: 'feature-cards',
    eyebrow: 'dive into the details',
    title: 'Cards that contain everything you need to know',
    description: FEATURE_BODY,
    imageSrc: featureCardsImage,
    imageAlt: 'Cards and messages interface preview',
  },
  {
    id: 'feature-automation',
    eyebrow: 'dive into the details',
    title: 'Cards that contain everything you need to know',
    description: FEATURE_BODY,
    imageSrc: featureAutomationImage,
    imageAlt: 'Workflow feature illustration',
  },
]

export const SUBSCRIBE_COPY = {
  heading:
    'Sign Up And Get Started With 360 Today. A World Of Productive Teamwork Awaits!',
  formLabel: 'Email sign up',
  emailPlaceholder: 'Email here',
  submitLabel: 'Sign Up',
} as const
