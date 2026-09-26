// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Delcio Monarca - Backend Developer'
export const SITE_DESCRIPTION =
  'Delcio Monarca is a backend developer based in Luanda, Angola, building robust APIs, automation, and AI-integrated systems with Node.js, NestJS, and TypeScript.'

export const GITHUB_URL = 'https://github.com/delciomanico'
export const SITE_URL = process.env.SITE_URL || 'http://localhost:4321/'

export const SITE_METADATA = {
  title: {
    template: '%s - Delcio Monarca',
    default: 'Delcio Monarca - Backend Developer'
  },
  description: SITE_DESCRIPTION,
  keywords: ['backend developer', 'node.js', 'nestjs', 'typescript', 'apis', 'devops', 'angola', 'portfolio'],
  authors: [{ name: 'Delcio Monarca', url: SITE_URL }],
  creator: 'Delcio Monarca',
  publisher: 'Delcio Monarca',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Delcio Monarca',
    title: 'Delcio Monarca - Backend Developer',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/profile/profile-headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Delcio Monarca - Backend Developer',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@delciomanico',
    creator: '@delciomanico',
    title: 'Delcio Monarca - Backend Developer',
    description: SITE_DESCRIPTION,
    images: ['/images/profile/profile-headshot.jpg']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/delciomanico',
  linkedin: 'https://www.linkedin.com/in/monarcadev',
  instagram: 'https://www.instagram.com/delciomonarca'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Delcio Monarca',
  legalName: 'Delcio Monarca',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2021',
  address: {
    streetAddress: '',
    addressLocality: 'Luanda',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'AO'
  },
  contactPoint: {
    telephone: '+244926283434',
    contactType: 'customer support',
    email: 'monarcadev.full@gmail.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
