'use client'

import { useState } from 'react'

interface PinPadProps {
  title?: string
  subtitle?: string
  onComplete: (pin: string) => void
  onCancel?: () => void
  error?: string
}

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

export default function PinPad({
  title = 'Enter PIN',
  subtitle,
  onComplete,
  onCancel,
  error,
}: PinPadProps) {
  const [digits, setDigits] = useState<string[]>([])

  function press(key: string) {
    if (key === '⌫') {
      setDigits((d) => d.slice(0, -1))
      return
    }
    if (key === '' || digits.length >= 4) return

    const next = [...digits, key]
    setDigits(next)

    if (next.length === 4) {
      setTimeout(() => {
        onComplete(next.join(''))
        setDigits([])
      }, 120)
    }
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-navy px-6 py-10">
      {/* Lock icon */}
      <div
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: 'rgba(20,184,166,0.1)' }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#14B8A6"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <h2 className="mb-1 text-xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mb-8 text-sm text-white/40">{subtitle}</p>}
      {!subtitle && <div className="mb-8" />}

      {/* Dots */}
      <div
        className="mb-8 flex items-center gap-5"
        aria-label={`${digits.length} of 4 digits entered`}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-4 w-4 rounded-full transition-all duration-150"
            style={{
              background:
                i < digits.length
                  ? 'linear-gradient(135deg, #14B8A6, #7C3AED)'
                  : 'rgba(255,255,255,0.12)',
              transform: i < digits.length ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>

      {/* Error */}
      <div className="mb-4 h-5">
        {error && <p className="text-center text-sm font-medium text-red-400">{error}</p>}
      </div>

      {/* Keypad */}
      <div className="grid w-full max-w-[280px] grid-cols-3 gap-3">
        {KEYS.map((key, i) => (
          <button
            key={i}
            onClick={() => press(key)}
            disabled={key === ''}
            aria-label={key === '⌫' ? 'Delete' : key === '' ? undefined : key}
            className="flex h-[68px] w-full items-center justify-center rounded-2xl text-xl font-semibold transition-all duration-100 active:scale-95 disabled:invisible"
            style={{
              background: key === '⌫' ? 'transparent' : 'rgba(255,255,255,0.06)',
              color: key === '⌫' ? 'rgba(255,255,255,0.45)' : 'white',
            }}
          >
            {key}
          </button>
        ))}
      </div>

      {onCancel && (
        <button
          onClick={onCancel}
          className="mt-8 text-sm text-white/35 transition-colors hover:text-white/60"
        >
          Cancel
        </button>
      )}
    </div>
  )
}
