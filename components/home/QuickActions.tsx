import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Action {
  label:   string
  href:    string
  icon:    React.ReactNode
  bgColor: string
  iconColor: string
}

const actions: Action[] = [
  {
    label:     'Send',
    href:      '/demo/transfer',
    bgColor:   'rgba(20,184,166,0.12)',
    iconColor: '#14B8A6',
    icon:      <SendIcon />,
  },
  {
    label:     'Receive',
    href:      '/demo/transfer',
    bgColor:   'rgba(59,130,246,0.12)',
    iconColor: '#60A5FA',
    icon:      <ReceiveIcon />,
  },
  {
    label:     'Top Up',
    href:      '/demo/transfer',
    bgColor:   'rgba(139,92,246,0.12)',
    iconColor: '#A78BFA',
    icon:      <TopUpIcon />,
  },
  {
    label:     'History',
    href:      '/demo/insights',
    bgColor:   'rgba(255,255,255,0.07)',
    iconColor: 'rgba(255,255,255,0.55)',
    icon:      <HistoryIcon />,
  },
]

export default function QuickActions() {
  return (
    <div className="flex items-center justify-between px-1">
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          className="flex flex-col items-center gap-2.5 group"
        >
          <div
            className={cn(
              'w-14 h-14 rounded-2xl flex items-center justify-center',
              'border border-white/[0.07]',
              'transition-all duration-150',
              'group-hover:scale-105 group-active:scale-95'
            )}
            style={{
              backgroundColor: action.bgColor,
              color: action.iconColor,
            }}
          >
            {action.icon}
          </div>
          <span className="text-[11px] font-semibold text-white/50 group-hover:text-white/75 transition-colors">
            {action.label}
          </span>
        </Link>
      ))}
    </div>
  )
}

function SendIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function ReceiveIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v14" />
      <path d="M5 9l7 7 7-7" />
      <path d="M5 20h14" />
    </svg>
  )
}

function TopUpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="12 8 12 12 14 14" />
      <path d="M3.05 11a9 9 0 1 0 .5-4.5" />
      <polyline points="3 3 3 7 7 7" />
    </svg>
  )
}
