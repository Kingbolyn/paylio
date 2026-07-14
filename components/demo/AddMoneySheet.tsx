'use client'

import { useState } from 'react'
import { useDemoStore } from '@/lib/demo-store'

const PRESETS = [
  { label: '₦50K', amount: 50_000 },
  { label: '₦100K', amount: 100_000 },
  { label: '₦250K', amount: 250_000 },
  { label: '₦500K', amount: 500_000 },
  { label: '₦1M', amount: 1_000_000 },
  { label: '₦5M', amount: 5_000_000 },
  { label: '₦10M', amount: 10_000_000 },
  { label: '₦50M', amount: 50_000_000 },
]

interface AddMoneySheetProps {
  onClose: () => void
}

export default function AddMoneySheet({ onClose }: AddMoneySheetProps) {
  const { addMoney } = useDemoStore()
  const [custom, setCustom] = useState('')
  const [error, setError] = useState('')

  function handle(amount: number) {
    addMoney(amount)
    onClose()
  }

  function handleCustom() {
    const raw = custom.replace(/[^0-9.]/g, '')
    const amount = parseFloat(raw)
    if (!amount || amount <= 0) {
      setError('Enter a valid amount')
      return
    }
    handle(amount)
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className="fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 rounded-t-[32px] px-5 pb-10 pt-5 lg:bottom-auto lg:top-1/2 lg:max-w-sm lg:-translate-y-1/2 lg:rounded-3xl"
        style={{
          background: 'linear-gradient(145deg, #0F2547, #0B1E3D)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Drag pill */}
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20 lg:hidden" />

        <h3 className="mb-1 text-lg font-bold text-white">Add Money</h3>
        <p className="mb-5 text-sm text-white/40">Select a preset or enter any amount.</p>

        {/* Presets — 4 cols */}
        <div className="mb-4 grid grid-cols-4 gap-2">
          {PRESETS.map(({ label, amount }) => (
            <button
              key={label}
              onClick={() => handle(amount)}
              className="rounded-2xl py-3.5 text-xs font-bold text-white transition-all duration-100 hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.22)',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <div className="mb-1">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold text-white/40">
                ₦
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value)
                  setError('')
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleCustom()}
                className="w-full rounded-2xl bg-white/[0.06] py-3.5 pl-8 pr-4 text-sm text-white placeholder-white/25 outline-none ring-1 ring-white/10 transition focus:ring-teal/50"
              />
            </div>
            <button
              onClick={handleCustom}
              className="rounded-2xl px-5 text-sm font-bold text-navy transition-all hover:brightness-110 active:scale-[0.97]"
              style={{ background: '#14B8A6' }}
            >
              Add
            </button>
          </div>
          {error && <p className="mt-1.5 pl-1 text-xs text-red-400">{error}</p>}
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-full py-3 text-sm font-medium text-white/40 transition-colors hover:text-white/65"
        >
          Cancel
        </button>
      </div>
    </>
  )
}
