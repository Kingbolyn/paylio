'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import AddMoneySheet from '@/components/demo/AddMoneySheet'

export default function QuickActions() {
  const [showAdd, setShowAdd] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between px-1">
        <ActionLink
          label="Send"
          href="/demo/transfer"
          bgColor="rgba(20,184,166,0.12)"
          iconColor="#14B8A6"
        >
          <SendIcon />
        </ActionLink>

        {/* Add Money — opens sheet, no nav */}
        <ActionButton
          label="Add"
          bgColor="rgba(59,130,246,0.12)"
          iconColor="#60A5FA"
          onClick={() => setShowAdd(true)}
        >
          <AddIcon />
        </ActionButton>

        <ActionLink
          label="Top Up"
          href="/demo/transfer"
          bgColor="rgba(139,92,246,0.12)"
          iconColor="#A78BFA"
        >
          <TopUpIcon />
        </ActionLink>

        <ActionLink
          label="History"
          href="/demo/insights"
          bgColor="rgba(255,255,255,0.07)"
          iconColor="rgba(255,255,255,0.55)"
        >
          <HistoryIcon />
        </ActionLink>
      </div>

      {showAdd && <AddMoneySheet onClose={() => setShowAdd(false)} />}
    </>
  )
}

function ActionLink({
  label,
  href,
  bgColor,
  iconColor,
  children,
}: {
  label: string
  href: string
  bgColor: string
  iconColor: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group flex flex-col items-center gap-2.5">
      <div
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-2xl',
          'border border-white/[0.07]',
          'transition-all duration-150',
          'group-hover:scale-105 group-active:scale-95'
        )}
        style={{ backgroundColor: bgColor, color: iconColor }}
      >
        {children}
      </div>
      <span className="text-[11px] font-semibold text-white/50 transition-colors group-hover:text-white/75">
        {label}
      </span>
    </Link>
  )
}

function ActionButton({
  label,
  bgColor,
  iconColor,
  onClick,
  children,
}: {
  label: string
  bgColor: string
  iconColor: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button onClick={onClick} className="group flex flex-col items-center gap-2.5">
      <div
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-2xl',
          'border border-white/[0.07]',
          'transition-all duration-150',
          'group-hover:scale-105 group-active:scale-95'
        )}
        style={{ backgroundColor: bgColor, color: iconColor }}
      >
        {children}
      </div>
      <span className="text-[11px] font-semibold text-white/50 transition-colors group-hover:text-white/75">
        {label}
      </span>
    </button>
  )
}

function SendIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function AddIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v14M5 9l7 7 7-7M5 20h14" />
    </svg>
  )
}

function TopUpIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="12 8 12 12 14 14" />
      <path d="M3.05 11a9 9 0 1 0 .5-4.5" />
      <polyline points="3 3 3 7 7 7" />
    </svg>
  )
}
