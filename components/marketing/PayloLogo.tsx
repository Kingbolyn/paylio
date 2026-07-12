'use client'

import { useId } from 'react'

interface PayloLogoProps {
  size?: number
  wordmark?: boolean
  className?: string
}

export default function PayloLogo({ size = 32, wordmark = true, className }: PayloLogoProps) {
  const raw = useId()
  const uid = raw.replace(/:/g, '_')

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id={uid} x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="32" height="32" rx="9" fill={`url(#${uid})`} />

        {/* P letterform: stem + bowl as a single stroke */}
        <path
          d="M 8.5 25 L 8.5 7 C 8.5 7 20.5 7 20.5 12 C 20.5 17 8.5 17 8.5 17"
          stroke="white"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {wordmark && (
        <span
          className="select-none text-lg font-extrabold text-white"
          style={{ letterSpacing: '-0.025em' }}
          aria-hidden="true"
        >
          Paylio
        </span>
      )}
    </div>
  )
}
