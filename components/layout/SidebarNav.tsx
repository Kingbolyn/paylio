'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useDemoStore } from '@/lib/demo-store'
import PayloLogo from '@/components/marketing/PayloLogo'
import { Avatar } from '@/components/ui'

const NAV = [
  { label: 'Home', href: '/demo/home', Icon: HomeIcon },
  { label: 'Transfer', href: '/demo/transfer', Icon: TransferIcon },
  { label: 'Insights', href: '/demo/insights', Icon: InsightsIcon },
  { label: 'Cards', href: '/demo/cards', Icon: CardsIcon },
  { label: 'Security', href: '/demo/security', Icon: SecurityIcon },
]

export default function SidebarNav() {
  const pathname = usePathname()
  const { userName, userInitials } = useDemoStore()

  return (
    <aside className="hidden lg:flex lg:w-[220px] lg:flex-shrink-0 lg:flex-col lg:border-r lg:border-white/[0.07] lg:bg-[#060714]">
      <div className="flex h-full flex-col px-4 py-6">
        {/* Logo */}
        <div className="mb-6 px-2">
          <PayloLogo size={28} wordmark />
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="mb-5 flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-medium text-white/35 transition-all hover:bg-white/[0.04] hover:text-white/65"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Paylio
        </Link>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1" aria-label="Demo navigation">
          {NAV.map(({ label, href, Icon }) => {
            const active = pathname === href || pathname.startsWith(href + '/')
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all duration-150',
                  active
                    ? 'bg-teal/[0.1] text-teal'
                    : 'text-white/45 hover:bg-white/[0.04] hover:text-white/75'
                )}
              >
                <Icon active={active} />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* User card */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] px-3 py-3">
          <Avatar initials={userInitials} colorSeed={userName} size="sm" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{userName}</p>
            <p className="text-[10px] text-white/35">Demo account</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function HomeIcon({ active }: { active: boolean }) {
  const c = active ? '#14B8A6' : 'rgba(255,255,255,0.4)'
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5Z"
        stroke={c}
        strokeWidth="1.75"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        strokeLinejoin="round"
      />
      <path d="M9 21V12h6v9" stroke={c} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function TransferIcon({ active }: { active: boolean }) {
  const c = active ? '#14B8A6' : 'rgba(255,255,255,0.4)'
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 16V4m0 0L4 7m3-3 3 3"
        stroke={c}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8v12m0 0 3-3m-3 3-3-3"
        stroke={c}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InsightsIcon({ active }: { active: boolean }) {
  const c = active ? '#14B8A6' : 'rgba(255,255,255,0.4)'
  const f = active ? 'rgba(20,184,166,0.15)' : 'none'
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="12" width="4" height="9" rx="1" fill={f} stroke={c} strokeWidth="1.75" />
      <rect x="10" y="7" width="4" height="14" rx="1" fill={f} stroke={c} strokeWidth="1.75" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill={f} stroke={c} strokeWidth="1.75" />
    </svg>
  )
}

function CardsIcon({ active }: { active: boolean }) {
  const c = active ? '#14B8A6' : 'rgba(255,255,255,0.4)'
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="3"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={c}
        strokeWidth="1.75"
      />
      <path d="M2 10h20" stroke={c} strokeWidth="1.75" />
      <path d="M6 15h4" stroke={c} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function SecurityIcon({ active }: { active: boolean }) {
  const c = active ? '#14B8A6' : 'rgba(255,255,255,0.4)'
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={c}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke={c}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
