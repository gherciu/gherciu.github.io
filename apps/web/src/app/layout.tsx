import '@/styles/globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'
import type { Metadata } from 'next'

const description =
  'Gheorghe Gherciu — software engineer working on distributed systems and open-source projects.'

export const metadata: Metadata = {
  metadataBase: new URL('https://gherciu.github.io'),
  title: 'Gheorghe Gherciu',
  description,
  openGraph: {
    title: 'Gheorghe Gherciu',
    description,
    url: 'https://gherciu.github.io',
    siteName: 'Gheorghe Gherciu',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Devicon is a webfont of brand logos, loaded from a CDN and pinned to a version. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
