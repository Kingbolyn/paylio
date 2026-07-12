'use client'

import { type ReactNode } from 'react'
import { DemoProvider, useDemoStore } from '@/lib/demo-store'
import NameSetup from '@/components/demo/NameSetup'
import LoginGate from '@/components/demo/LoginGate'
import SidebarNav from '@/components/layout/SidebarNav'
import { BottomNav } from '@/components/layout'

function Inner({ children }: { children: ReactNode }) {
  const { userName, pin, sessionUnlocked } = useDemoStore()

  if (!userName) return <NameSetup />
  if (pin && !sessionUnlocked) return <LoginGate />

  return (
    <div className="flex min-h-dvh overflow-x-hidden bg-[#060714]">
      {/* Desktop sidebar — hidden on mobile */}
      <SidebarNav />

      {/* Content area */}
      <div className="flex min-h-dvh flex-1 flex-col">
        {/* Mobile/tablet: constrained shell; desktop: full-width */}
        <div
          id="app-shell"
          className="relative mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-navy lg:mx-0 lg:max-w-none"
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy focus:shadow-teal"
          >
            Skip to main content
          </a>
          {children}
          {/* Bottom nav hidden on desktop — sidebar handles it */}
          <div className="lg:hidden">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DemoShell({ children }: { children: ReactNode }) {
  return (
    <DemoProvider>
      <Inner>{children}</Inner>
    </DemoProvider>
  )
}
