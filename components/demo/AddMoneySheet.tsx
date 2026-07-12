'use client'

import { useDemoStore } from '@/lib/demo-store'

const PRESETS = [
  { label: '₦50K', amount: 50_000 },
  { label: '₦100K', amount: 100_000 },
  { label: '₦250K', amount: 250_000 },
  { label: '₦500K', amount: 500_000 },
  { label: '₦1M', amount: 1_000_000 },
  { label: '₦5M', amount: 5_000_000 },
]

interface AddMoneySheetProps {
  onClose: () => void
}

export default function AddMoneySheet({ onClose }: AddMoneySheetProps) {
  const { addMoney } = useDemoStore()

  function handle(amount: number) {
    addMoney(amount)
    onClose()
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
        <p className="mb-5 text-sm text-white/40">Select an amount to top up your demo balance.</p>

        <div className="grid grid-cols-3 gap-2.5">
          {PRESETS.map(({ label, amount }) => (
            <button
              key={label}
              onClick={() => handle(amount)}
              className="rounded-2xl py-4 text-sm font-bold text-white transition-all duration-100 hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background: 'rgba(20,184,166,0.1)',
                border: '1px solid rgba(20,184,166,0.22)',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-full py-3 text-sm font-medium text-white/40 transition-colors hover:text-white/65"
        >
          Cancel
        </button>
      </div>
    </>
  )
}
