'use client'

import { useState, useEffect, useRef } from 'react'
import { formatCurrency } from '@/lib/utils'
import { useDemoStore } from '@/lib/demo-store'
import { CURRENCY_RATES, CURRENCY_LABELS, type SupportedCurrency } from '@/lib/demo-store'
import AddMoneySheet from '@/components/demo/AddMoneySheet'

const CURRENCIES: SupportedCurrency[] = ['NGN', 'USD', 'GBP', 'EUR']

function convertBalance(balanceNGN: number, currency: SupportedCurrency): number {
  if (currency === 'NGN') return balanceNGN
  return balanceNGN / CURRENCY_RATES[currency]
}

export default function BalanceCard() {
  const { balance, transactions, displayCurrency, setCurrency } = useDemoStore()
  const [visible, setVisible] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false)
  const [flash, setFlash] = useState(false)
  const prevBalance = useRef(balance)

  const isNegative = balance < 0
  const displayBalance = convertBalance(balance, displayCurrency)

  useEffect(() => {
    if (prevBalance.current !== balance) {
      setFlash(true)
      const t = setTimeout(() => setFlash(false), 700)
      prevBalance.current = balance
      return () => clearTimeout(t)
    }
  }, [balance])

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
        className="relative overflow-hidden rounded-[28px] border shadow-xl transition-shadow duration-500"
        style={{
          background: 'linear-gradient(145deg, #0F2547 0%, #071628 100%)',
          borderColor: isNegative ? 'rgba(248,113,113,0.25)' : 'rgba(255,255,255,0.09)',
          boxShadow: flash
            ? isNegative
              ? '0 0 40px rgba(248,113,113,0.2), 0 24px 48px rgba(0,0,0,0.4)'
              : '0 0 40px rgba(20,184,166,0.25), 0 24px 48px rgba(0,0,0,0.4)'
            : '0 24px 48px rgba(0,0,0,0.4)',
        }}
      >
        {/* Ambient glow — red when negative */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full blur-3xl transition-all duration-500"
          style={{
            background: isNegative ? 'rgba(248,113,113,0.15)' : 'rgba(20,184,166,0.18)',
            opacity: flash ? 0.45 : 0.2,
          }}
        />

        <div className="relative z-10 p-5">
          {/* Top row */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/60">
                {isNegative ? 'Overdrawn' : 'Available Balance'}
              </span>
              {isNegative && (
                <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-bold text-red-400">
                  Negative
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {/* Currency switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowCurrencyPicker((v) => !v)}
                  className="flex h-8 items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] px-3 text-[11px] font-bold text-white/70 transition-all hover:bg-white/[0.1] active:scale-95"
                >
                  {displayCurrency}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {showCurrencyPicker && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowCurrencyPicker(false)}
                    />
                    <div
                      className="absolute right-0 top-10 z-20 min-w-[160px] overflow-hidden rounded-2xl py-1"
                      style={{
                        background: 'linear-gradient(145deg, #0F2547, #0B1E3D)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {CURRENCIES.map((c) => (
                        <button
                          key={c}
                          onClick={() => {
                            setCurrency(c)
                            setShowCurrencyPicker(false)
                          }}
                          className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/[0.06]"
                        >
                          <span
                            className={`font-semibold ${c === displayCurrency ? 'text-teal' : 'text-white/80'}`}
                          >
                            {c}
                          </span>
                          <span className="text-xs text-white/35">{CURRENCY_LABELS[c]}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

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
                className="text-[44px] font-extrabold leading-none transition-all duration-300"
                style={{
                  letterSpacing: '-0.04em',
                  fontVariantNumeric: 'tabular-nums',
                  fontFeatureSettings: '"tnum" 1',
                  color: isNegative ? '#F87171' : '#ffffff',
                  textShadow: flash
                    ? isNegative
                      ? '0 0 24px rgba(248,113,113,0.45)'
                      : '0 0 24px rgba(20,184,166,0.45)'
                    : 'none',
                }}
              >
                {formatCurrency(displayBalance, displayCurrency)}
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

          {/* Account label + rate note */}
          <div className="mb-6 flex items-center gap-2">
            <p className="text-xs text-white/50">Main Account&nbsp;&nbsp;••••&nbsp;6789</p>
            {displayCurrency !== 'NGN' && (
              <span className="text-[10px] text-white/30">
                · ~₦{CURRENCY_RATES[displayCurrency].toLocaleString()} per {displayCurrency}
              </span>
            )}
          </div>

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
