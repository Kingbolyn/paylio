'use client'

import { useState, useEffect, useRef } from 'react'
import { formatCurrency } from '@/lib/utils'
import { useDemoStore } from '@/lib/demo-store'
import AddMoneySheet from '@/components/demo/AddMoneySheet'

export default function BalanceCard() {
  const { balance, transactions } = useDemoStore()
  const [visible, setVisible] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [flash, setFlash] = useState(false)
  const prevBalance = useRef(balance)

  // Flash teal glow when balance changes
  useEffect(() => {
    if (prevBalance.current !== balance) {
      setFlash(true)
      const t = setTimeout(() => setFlash(false), 700)
      prevBalance.current = balance
      return () => clearTimeout(t)
    }
  }, [balance])

  // Derive monthly totals from the live transaction list
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const monthTxns = transactions.filter((t) => new Date(t.date) >= monthStart)
  const totalReceived = monthTxns
    .filter((t) => t.type === 'credit')
    .reduce((s, t) => s + t.amount, 0)
  const totalSpent = monthTxns.filter((t) => t.type === 'debit').reduce((s, t) => s + t.amount, 0)

  return (
    <>
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/[0.09] shadow-xl transition-shadow duration-500"
        style={{
          background: 'linear-gradient(145deg, #0F2547 0%, #071628 100%)',
          boxShadow: flash
            ? '0 0 40px rgba(20,184,166,0.25), 0 24px 48px rgba(0,0,0,0.4)'
            : '0 24px 48px rgba(0,0,0,0.4)',
        }}
      >
        {/* Teal ambient glow */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full blur-3xl transition-opacity duration-500"
          style={{ background: 'rgba(20,184,166,0.18)', opacity: flash ? 0.4 : 0.18 }}
        />

        <div className="relative z-10 p-5">
          {/* Top row */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">
              Available Balance
            </span>
            <div className="flex items-center gap-2">
              {/* Add money */}
              <button
                onClick={() => setShowAdd(true)}
                aria-label="Add money"
                className="flex h-8 items-center gap-1 rounded-full border border-teal/30 bg-teal/10 px-3 text-[11px] font-bold text-teal transition-all hover:bg-teal/20 active:scale-95"
              >
                + Add
              </button>
              {/* Eye toggle */}
              <button
                onClick={() => setVisible((v) => !v)}
                aria-label={visible ? 'Hide balance' : 'Show balance'}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.07] text-white/40 transition-all hover:bg-white/[0.11] hover:text-white/70"
              >
                {visible ? <EyeOpen /> : <EyeClosed />}
              </button>
            </div>
          </div>

          {/* Balance figure */}
          <div className="mb-1 flex min-h-[56px] items-end" aria-live="polite" aria-atomic="true">
            {visible ? (
              <span
                className="text-[44px] font-extrabold leading-none text-white transition-all duration-300"
                style={{
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  fontFeatureSettings: '"tnum" 1',
                  textShadow: flash ? '0 0 24px rgba(20,184,166,0.45)' : 'none',
                }}
              >
                {formatCurrency(balance, 'NGN')}
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
          <p className="mb-6 text-xs text-white/50">Main Account&nbsp;&nbsp;••••&nbsp;6789</p>

          {/* Month summary strip */}
          <div className="flex items-center gap-5 border-t border-white/[0.07] pt-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-teal/[0.15]">
                <ArrowDown className="text-teal" />
              </div>
              <div>
                <p className="mb-1 text-[10px] font-medium leading-none text-white/50">Income</p>
                <p className="text-sm font-semibold leading-none text-white">
                  {visible ? formatCurrency(totalReceived, 'NGN', true) : '••••'}
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
                  {visible ? formatCurrency(totalSpent, 'NGN', true) : '••••'}
                </p>
              </div>
            </div>

            <div className="ml-auto">
              <span className="text-[10px] font-medium text-white/45">This month</span>
            </div>
          </div>
        </div>
      </div>

      {showAdd && <AddMoneySheet onClose={() => setShowAdd(false)} />}
    </>
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
