import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteDescription, siteName, siteUrl, siteUrlString } from './seo/site-config';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'Модульні будинки та бази відпочинку під ключ | Velum',
    template: '%s | Velum'
  },
  description: siteDescription,
  keywords: [
    'база відпочинку під ключ',
    'будівництво бази відпочинку',
    'будинки для бази відпочинку',
    'готовий бізнес під ключ'
  ],
  authors: [{ name: 'Velum' }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: 'Модульні будинки та бази відпочинку під ключ | Velum',
    description: 'Готове бізнес-рішення від Velum із зрозумілою економікою проєкту.',
    type: 'website',
    locale: 'uk_UA',
    url: siteUrlString,
    siteName,
    images: [
      {
        url: '/assets/velum/hero/hero.jpg',
        width: 1280,
        height: 853,
        alt: 'Модульний будинок Velum для бази відпочинку'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Модульні будинки та бази відпочинку під ключ | Velum',
    description: siteDescription,
    images: ['/assets/velum/hero/hero.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.png'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrlString}/#organization`,
      name: siteName,
      url: siteUrlString,
      logo: `${siteUrlString}/logo.svg`,
      telephone: '+380976655306',
      email: 'info@zavod-modul.com.ua',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Львів',
        streetAddress: 'вул. Промислова, 60',
        addressCountry: 'UA'
      },
      sameAs: ['https://t.me/FLHausSPB_bot']
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrlString}/#website`,
      url: siteUrlString,
      name: siteName,
      description: siteDescription,
      inLanguage: 'uk-UA',
      publisher: {
        '@id': `${siteUrlString}/#organization`
      }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
