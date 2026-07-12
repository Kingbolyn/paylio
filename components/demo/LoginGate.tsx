'use client'

import { useState } from 'react'
import { useDemoStore } from '@/lib/demo-store'
import PinPad from './PinPad'

type Mode = 'biometric' | 'pin'
type ScanState = 'idle' | 'scanning'

export default function LoginGate() {
  const { biometricEnabled, verifyPin, unlockSession, userName } = useDemoStore()
  const [mode, setMode] = useState<Mode>(biometricEnabled ? 'biometric' : 'pin')
  const [scan, setScan] = useState<ScanState>('idle')
  const [pinError, setPinError] = useState('')

  function startBiometric() {
    setScan('scanning')
    setTimeout(() => {
      unlockSession()
    }, 1600)
  }

  function handlePin(pin: string) {
    if (verifyPin(pin)) {
      unlockSession()
    } else {
      setPinError('Incorrect PIN — try again.')
      setTimeout(() => setPinError(''), 2200)
    }
  }

  if (mode === 'pin') {
    return (
      <PinPad
        title="Enter your PIN"
        subtitle={`Welcome back, ${userName}`}
        onComplete={handlePin}
        error={pinError}
        onCancel={biometricEnabled ? () => setMode('biometric') : undefined}
      />
    )
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-navy px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <p className="text-sm text-white/40">Welcome back</p>
        <h1 className="text-2xl font-bold text-white">{userName}</h1>

        {/* Fingerprint button */}
        <button
          onClick={startBiometric}
          disabled={scan === 'scanning'}
          className="relative mt-4 flex h-32 w-32 items-center justify-center rounded-full transition-all duration-300 active:scale-95"
          aria-label="Authenticate with biometrics"
          style={{
            background: scan === 'scanning' ? 'rgba(20,184,166,0.18)' : 'rgba(255,255,255,0.05)',
            boxShadow: scan === 'scanning' ? '0 0 48px rgba(20,184,166,0.35)' : 'none',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {scan === 'scanning' && (
            <span
              className="absolute inset-0 animate-ping rounded-full"
              style={{ background: 'rgba(20,184,166,0.15)' }}
            />
          )}
          {/* Fingerprint SVG */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
            <path
              d="M30 8C17.8 8 8 17.8 8 30"
              stroke={scan === 'scanning' ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.3s' }}
            />
            <path
              d="M30 8C42.2 8 52 17.8 52 30"
              stroke={scan === 'scanning' ? '#A78BFA' : 'rgba(255,255,255,0.2)'}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.3s' }}
            />
            <path
              d="M18 34C18 26.3 23.4 20 30 20C36.6 20 42 26.3 42 34"
              stroke={scan === 'scanning' ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.3s' }}
            />
            <path
              d="M24 40C24 35.6 26.7 32 30 32C33.3 32 36 35.6 36 40"
              stroke={scan === 'scanning' ? '#A78BFA' : 'rgba(255,255,255,0.2)'}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.3s' }}
            />
            <path
              d="M30 40V48"
              stroke={scan === 'scanning' ? '#14B8A6' : 'rgba(255,255,255,0.35)'}
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.3s' }}
            />
          </svg>
        </button>

        <p
          className="text-sm transition-colors"
          style={{ color: scan === 'scanning' ? '#14B8A6' : 'rgba(255,255,255,0.4)' }}
        >
          {scan === 'scanning' ? 'Scanning...' : 'Touch to authenticate'}
        </p>

        <button
          onClick={() => setMode('pin')}
          className="mt-2 text-sm font-medium text-teal transition-colors hover:text-teal-light"
        >
          Use PIN instead
        </button>

        <a href="/" className="mt-6 text-xs text-white/25 transition-colors hover:text-white/45">
          ← Back to Paylio
        </a>
      </div>
    </div>
  )
}
