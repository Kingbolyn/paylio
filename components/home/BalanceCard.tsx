'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/utils'
import { primaryAccount, mockInsights } from '@/lib/data'

export default function BalanceCard() {
  const [visible, setVisible] = useState(true)
  const insight = mockInsights.month

  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-white/[0.09] shadow-xl"
      style={{ background: 'linear-gradient(145deg, #0F2547 0%, #071628 100%)' }}
    >
      {/* Teal ambient glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full blur-3xl"
        style={{ background: 'rgba(20,184,166,0.18)' }}
      />

      <div className="relative z-10 p-5">
        {/* Top row */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">
            Available Balance
          </span>
          <button
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Hide balance' : 'Show balance'}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.07] text-white/40 transition-all duration-150 hover:bg-white/[0.11] hover:text-white/70"
          >
            {visible ? <EyeOpen /> : <EyeClosed />}
          </button>
        </div>

        {/* Balance figure */}
        <div className="mb-1 flex min-h-[56px] items-end" aria-live="polite" aria-atomic="true">
          {visible ? (
            <span
              className="text-[44px] font-extrabold leading-none text-white"
              style={{
                letterSpacing: '-0.04em',
                fontVariantNumeric: 'tabular-nums',
                fontFeatureSettings: '"tnum" 1',
              }}
            >
              {formatCurrency(primaryAccount.balance, 'NGN')}
            </span>
          ) : (
            <span
              className="text-[36px] font-extrabold leading-none tracking-[0.15em] text-white/25"
              aria-label="Balance hidden"
            >
              ••••••
            </span>
          )}
        </div>

        {/* Account label */}
        <p className="mb-6 text-xs text-white/50">
          {primaryAccount.name}&nbsp;&nbsp;••••&nbsp;
          {primaryAccount.accountNumber.slice(-4)}
        </p>

        {/* Month summary strip */}
        <div className="flex items-center gap-5 border-t border-white/[0.07] pt-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal/[0.15]">
              <ArrowDown className="text-teal" />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-medium leading-none text-white/50">Income</p>
              <p className="text-sm font-semibold leading-none text-white">
                {visible ? formatCurrency(insight.totalReceived, 'NGN', true) : '••••'}
              </p>
            </div>
          </div>

          <div className="h-8 w-px bg-white/[0.08]" />

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-500/[0.15]">
              <ArrowUp className="text-red-400" />
            </div>
            <div>
              <p className="mb-1 text-[10px] font-medium leading-none text-white/50">Spent</p>
              <p className="text-sm font-semibold leading-none text-white">
                {visible ? formatCurrency(insight.totalSpent, 'NGN', true) : '••••'}
              </p>
            </div>
          </div>

          <div className="ml-auto">
            <span className="text-[10px] font-medium text-white/45">This month</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EyeOpen() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeClosed() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  )
}
