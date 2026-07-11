'use client'

import { Avatar } from '@/components/ui'
import { mockUser } from '@/lib/data'

interface AppHeaderProps {
  showBalance?: boolean
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour >= 5  && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 22) return 'Good evening'
  return 'Hey'
}

export default function AppHeader({ showBalance = false }: AppHeaderProps) {
  const greeting = getGreeting()

  return (
    <header className="flex items-center justify-between px-5 pt-safe-top pb-3 pt-4">
      <div className="flex items-center gap-3">
        <Avatar
          initials={mockUser.initials}
          colorSeed={mockUser.fullName}
          size="md"
        />
        <div className="flex flex-col">
          <span className="text-xs text-white/50 font-medium leading-none mb-0.5">
            {greeting}
          </span>
          <span className="text-sm font-semibold text-white leading-none">
            {mockUser.firstName}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <NotificationButton />
      </div>
    </header>
  )
}

function NotificationButton() {
  return (
    <button
      aria-label="Notifications"
      className="relative w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.08] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.11] transition-all duration-150 active:scale-95"
    >
      <BellIcon />
      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-teal border-2 border-navy" />
    </button>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}
