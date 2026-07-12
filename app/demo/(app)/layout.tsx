import type { Metadata } from 'next'
import { BottomNav } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Paylio Demo',
  description:
    'Explore Paylio — a live interactive demo of a modern Nigerian banking app. See instant transfers, spending insights, virtual cards, and enterprise-grade security.',
  robots: { index: false, follow: false },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="app-shell"
      className="relative mx-auto min-h-dvh w-full max-w-[430px] overflow-hidden bg-navy"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy focus:shadow-teal"
      >
        Skip to main content
      </a>
      {children}
      <BottomNav />
    </div>
  )
}
