import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: 'Call Center Hamburg | Hey Contact Heroes | Hey Contact Heroes - Remote Call Center & Customer Experience',
  description: 'Bist du ein Contact Hero? Your remote-first call center and customer experience service provider.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <body className={`${raleway.className} font-sans antialiased bg-white`}>
        <LanguageProvider>
          <ScrollProgressBar />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
