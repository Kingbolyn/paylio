'use client'

import { Avatar } from '@/components/ui'
import { mockUser } from '@/lib/data'

interface AppHeaderProps {
  showBalance?: boolean
}

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 22) return 'Good evening'
  return 'Hey'
}

export default function AppHeader({ showBalance = false }: AppHeaderProps) {
  const greeting = getGreeting()

  return (
    <header className="pt-safe-top flex items-center justify-between px-5 pb-3 pt-4">
      <div className="flex items-center gap-3">
        <Avatar initials={mockUser.initials} colorSeed={mockUser.fullName} size="md" />
        <div className="flex flex-col">
          <span className="mb-0.5 text-xs font-medium leading-none text-white/50">{greeting}</span>
          <span className="text-sm font-semibold leading-none text-white">
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
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.07] text-white/70 transition-all duration-150 hover:bg-white/[0.11] hover:text-white active:scale-95"
    >
      <BellIcon />
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-navy bg-teal" />
    </button>
  )
}

function BellIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}
