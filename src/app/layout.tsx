import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title: {
    template: '%s - Aaron Kim',
    default: 'Aaron Kim - Tall Handsome Software Engineer',
  },
  description: `I'm a software engineer who prides himself in his sense of
                humor (it's pretty elite). I'm a fast learner and my wit is
                even faster.`,
  authors: [
    {
      name: "Aaron Kim",
      url: `${siteUrl}`
    }, 
    {
      name: "Aaron W Kim",
      url: `${siteUrl}`
    },
    {
      name: "Aaron W. Kim",
      url: `${siteUrl}`
    }
  ],
  keywords: [
    // name
    'Aaron W. Kim',
    'Aaron W Kim',
    'Aaron Kim',
    'Aaron',
    'Kim',
    'aaronwk',
    'aaronwkim',
    'aaronkim',

    // associations
    'Software Engineer',
    'Purdue',
    'AWS',
    'Amazon',
    'SWE',
  ],
  openGraph: {
    title: 'Aaron\'s Projects',
    description: "Projects I've made or collaborated heavily on.",
    url: `${siteUrl}`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/avatar.jpg`,
        width: 800,
        height: 600,
        alt: 'Avatar - Aaron Kim'
      }
    ]
  },
  icons: [
    {
      url: `${siteUrl}/favicon/favicon.ico`,
      rel: 'icon'
    }
  ],
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="android-chrome-icon" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="android-chrome-icon" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
