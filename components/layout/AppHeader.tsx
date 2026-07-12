'use client'

import { useDemoStore } from '@/lib/demo-store'
import { Avatar } from '@/components/ui'

function getGreeting(): string {
  const h = new Date().getHours()
  if (h >= 5 && h < 12) return 'Good morning'
  if (h >= 12 && h < 17) return 'Good afternoon'
  if (h >= 17 && h < 22) return 'Good evening'
  return 'Hey'
}

export default function AppHeader() {
  const { userName, userInitials } = useDemoStore()
  const firstName = userName.split(/\s+/)[0] ?? userName

  return (
    <header className="pt-safe-top flex items-center justify-between px-5 pb-3 pt-4">
      <div className="flex items-center gap-3">
        <Avatar initials={userInitials} colorSeed={userName} size="md" />
        <div className="flex flex-col">
          <span className="mb-0.5 text-xs font-medium leading-none text-white/50">
            {getGreeting()}
          </span>
          <span className="text-sm font-semibold leading-none text-white">{firstName}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Back to Paylio — mobile only (desktop has sidebar) */}
        <a
          href="/"
          className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/40 transition-all hover:text-white/65 lg:hidden"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Paylio
        </a>
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
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-navy bg-teal" />
    </button>
  )
}
