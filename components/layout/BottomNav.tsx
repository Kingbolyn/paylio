'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  icon: (active: boolean) => React.ReactNode
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/demo/home',
    icon: (active) => <HomeIcon active={active} />,
  },
  {
    label: 'Transfer',
    href: '/demo/transfer',
    icon: (active) => <TransferIcon active={active} />,
  },
  {
    label: 'Insights',
    href: '/demo/insights',
    icon: (active) => <InsightsIcon active={active} />,
  },
  {
    label: 'Cards',
    href: '/demo/cards',
    icon: (active) => <CardsIcon active={active} />,
  },
  {
    label: 'Security',
    href: '/demo/security',
    icon: (active) => <SecurityIcon active={active} />,
  },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="App navigation"
      className="pb-safe-bottom fixed bottom-0 left-1/2 z-40 w-full max-w-mobile -translate-x-1/2 border-t border-white/[0.07] bg-navy-deep/95 shadow-nav backdrop-blur-md"
    >
      <div className="flex h-16 items-center justify-around px-2">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/')

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative flex flex-col items-center justify-center gap-1',
                'h-full flex-1 transition-all duration-200',
                'group'
              )}
            >
              {/* Active indicator bar */}
              <span
                className={cn(
                  'absolute left-1/2 top-0 -translate-x-1/2',
                  'h-[2px] rounded-full transition-all duration-200',
                  active ? 'w-6 bg-teal' : 'w-0 bg-transparent'
                )}
              />

              {/* Icon */}
              <span
                className={cn(
                  'transition-transform duration-200',
                  active ? 'scale-100' : 'group-active:scale-90'
                )}
              >
                {item.icon(active)}
              </span>

              {/* Label */}
              <span
                className={cn(
                  'text-[10px] font-semibold leading-none transition-colors duration-200',
                  active ? 'text-teal' : 'text-white/35 group-hover:text-white/55'
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5Z"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        strokeLinejoin="round"
      />
      <path
        d="M9 21V12h6v9"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TransferIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 16V4m0 0L4 7m3-3 3 3"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8v12m0 0 3-3m-3 3-3-3"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InsightsIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="12"
        width="4"
        height="9"
        rx="1"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
      />
      <rect
        x="10"
        y="7"
        width="4"
        height="14"
        rx="1"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
      />
      <rect
        x="17"
        y="3"
        width="4"
        height="18"
        rx="1"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
      />
    </svg>
  )
}

function CardsIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="3"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
      />
      <path
        d="M2 10h20"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
      />
      <path
        d="M6 15h4"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SecurityIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z"
        fill={active ? 'rgba(20,184,166,0.15)' : 'none'}
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke={active ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
