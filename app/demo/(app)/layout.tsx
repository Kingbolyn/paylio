import type { Metadata } from 'next'
import DemoShell from './_shell'

export const metadata: Metadata = {
  title: 'Paylio Demo',
  description:
    'Explore Paylio — a live interactive demo of a modern Nigerian banking app. See instant transfers, spending insights, virtual cards, and enterprise-grade security.',
  robots: { index: false, follow: false },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <DemoShell>{children}</DemoShell>
}
