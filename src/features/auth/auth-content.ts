export const AUTH_SHOWCASE_COPY = {
  headingLead: 'Business Activities At Your',
  headingAccent: 'Finger Tips',
  description:
    'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Lorem Cras Habitasse Donec Arcu Enim Eu, Justo, Nunc Nulla. Mauris Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor Enim At Nulla. Nunc Non Egestas Vitae Quis Turpis Ut Est Est Quis Sed Praesent. Nulla Integer Risus Dolor.',
} as const

export const LOGIN_FORM_COPY = {
  title: 'Login',
  subtitle: 'Welcome back! Please enter your details.',
  usernameLabel: 'Username',
  usernamePlaceholder: 'Enter Your Username',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Enter Your Password',
  rememberLabel: 'Remember me',
  forgotLabel: 'Forget Password',
  forgotHref: '/forgot-password',
  submitLabel: 'Login',
  registerLead: "Don't have a business account,",
  registerLabel: 'Register',
  registerHref: '/create-account',
} as const

export const REGISTER_FORM_COPY = {
  title: 'Register a business account',
  subtitle: 'Please enter your details.',
  businessNameLabel: 'Business Name',
  rcNumberLabel: 'RC Number',
  tinLabel: 'Tin Verification',
  incorporationDateLabel: 'Date of Incorporation',
  businessEmailLabel: 'Business Email',
  businessPhoneLabel: 'Business Phone N0',
  phonePlaceholder: 'Phone No',
  stateLabel: 'State',
  statePlaceholder: 'Select state',
  businessAddressLabel: 'Business Address',
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  showPasswordLabel: 'Show password',
  hidePasswordLabel: 'Hide password',
  termsLead: 'By clicking, you agree to the',
  termsLabel: 'Terms and Conditions',
  termsHref: '/terms',
  termsMiddle: 'set out by this site, including our',
  privacyLabel: 'Cookie Use.',
  privacyHref: '/privacy',
  submitLabel: 'Registration',
  signinLead: 'Already have an account,',
  signinLabel: 'Sign in',
  signinHref: '/login',
} as const

export const FORGOT_PASSWORD_COPY = {
  title: 'Forget Password',
  description:
    'Confirm the email address that you provided in your registration : n***@****.com',
  emailLabel: 'Email Address',
  emailPlaceholder: 'Email Address',
  submitLabel: 'Send',
  backLabel: 'Back to log in',
  backHref: '/login',
} as const

export const CHECK_MAIL_COPY = {
  title: 'Check Your Mail',
  sentText: 'We sent a password reset link to nisha@gmail.com',
  resendLead: "Didn't receive the email?",
  resendLabel: 'Click to resend',
  backLabel: 'Back to log in',
  backHref: '/login',
} as const

export const RESET_PASSWORD_COPY = {
  title: 'Reset Password',
  welcomeLabel: 'Welcome',
  userEmail: 'Oluwasegunyinka.samuel@gmail.com',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Password',
  confirmLabel: 'Confirm Password',
  confirmPlaceholder: 'Reset Password',
  submitLabel: 'Reset Password',
} as const

export interface AuthFooterLink {
  label: string
  href: string
}

export const AUTH_FOOTER_LINKS: AuthFooterLink[] = [
  { label: 'Amabilistech.com', href: '#' },
  { label: 'Technical Support', href: '/support' },
  { label: 'Terms & Condition', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
]
