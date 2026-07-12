'use client'

import { useState } from 'react'
import { useDemoStore } from '@/lib/demo-store'
import PayloLogo from '@/components/marketing/PayloLogo'

export default function NameSetup() {
  const { setUserName } = useDemoStore()
  const [name, setName] = useState('')
  const [focused, setFocused] = useState(false)

  function submit() {
    const trimmed = name.trim()
    if (!trimmed) return
    setUserName(trimmed)
  }

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#08091A] px-6">
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{ background: 'rgba(20,184,166,0.25)', opacity: 0.55 }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full blur-3xl"
          style={{ background: 'rgba(124,58,237,0.35)', opacity: 0.35 }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-8">
        <PayloLogo size={44} wordmark />

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            What should we
            <br />
            call you?
          </h1>
          <p className="text-sm text-white/40">Your name appears throughout the demo.</p>
        </div>

        <div className="w-full">
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Your name"
            className="w-full rounded-2xl bg-white/[0.07] px-5 py-4 text-lg font-medium text-white placeholder-white/25 outline-none transition-all duration-200"
            style={{
              border: focused
                ? '1.5px solid rgba(20,184,166,0.55)'
                : '1.5px solid rgba(255,255,255,0.1)',
            }}
          />
        </div>

        <button
          onClick={submit}
          disabled={!name.trim()}
          className="w-full rounded-full py-4 text-base font-bold text-navy transition-all duration-150 hover:opacity-90 active:scale-[0.98] disabled:opacity-30"
          style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #7C3AED 100%)' }}
        >
          Let&apos;s go →
        </button>

        <a href="/" className="text-xs text-white/30 transition-colors hover:text-white/55">
          ← Back to Paylio
        </a>
      </div>
    </div>
  )
}
