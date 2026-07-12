import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { env } from '@/lib/env'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(env.appUrl),
  title: 'Paylio — Money, made simple.',
  description: 'A fintech experience designed to feel as trustworthy as it is simple.',
  keywords: ['fintech', 'banking', 'transfers', 'money management'],
  authors: [{ name: 'Apex Code' }],
  creator: 'Apex Code',
  openGraph: {
    type: 'website',
    siteName: 'Paylio',
    title: 'Paylio — Money, made simple.',
    description:
      'Banking, transfers, and insights built around you. A portfolio fintech concept by Apex Code.',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paylio — Money, made simple.',
    description:
      'Banking, transfers, and insights built around you. A portfolio fintech concept by Apex Code.',
    creator: '@apexcode',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1E3D',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
