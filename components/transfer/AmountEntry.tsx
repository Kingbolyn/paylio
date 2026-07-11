'use client'

import { useState } from 'react'
import { Recipient } from '@/types'
import { Avatar, Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface AmountEntryProps {
  recipient: Recipient
  onConfirm: (amount: string, note: string) => void
  onBack:    () => void
}

const MAX_DIGITS = 9

function formatDisplay(raw: string): string {
  if (!raw || raw === '0') return '₦0'
  const [intPart, decPart] = raw.split('.')
  const num = parseInt(intPart || '0', 10)
  const formatted = num.toLocaleString('en-NG')
  if (decPart !== undefined) return `₦${formatted}.${decPart}`
  return `₦${formatted}`
}

function getDisplaySize(raw: string): string {
  const len = raw.replace('.', '').length
  if (len <= 5)  return 'text-[52px] leading-[60px]'
  if (len <= 8)  return 'text-[40px] leading-[48px]'
  return 'text-[32px] leading-[40px]'
}

export default function AmountEntry({ recipient, onConfirm, onBack }: AmountEntryProps) {
  const [raw,  setRaw]  = useState('0')
  const [note, setNote] = useState('')
  const [showNote, setShowNote] = useState(false)

  function press(key: string) {
    setRaw((prev) => {
      if (key === '⌫') {
        const next = prev.slice(0, -1)
        return next === '' ? '0' : next
      }
      if (key === '.') {
        if (prev.includes('.')) return prev
        return prev + '.'
      }
      if (prev === '0' && key !== '.') {
        return key
      }
      const digits = prev.replace('.', '').length
      if (digits >= MAX_DIGITS) return prev
      const [, dec] = prev.split('.')
      if (dec !== undefined && dec.length >= 2) return prev
      return prev + key
    })
  }

  const isValid = parseFloat(raw) > 0

  const keys = ['7','8','9','4','5','6','1','2','3','.','0','⌫']

  return (
    <div className="flex flex-col min-h-dvh bg-navy">

      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-4 pb-2">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/[0.07] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.11] transition-all flex-shrink-0"
        >
          <BackIcon />
        </button>
        <h1 className="text-lg font-bold text-white">How much?</h1>
      </div>

      {/* Recipient pill */}
      <div className="px-5 pt-2 pb-4">
        <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-2">
          <Avatar initials={recipient.avatarInitials} colorSeed={recipient.name} size="xs" />
          <span className="text-sm font-semibold text-white">{recipient.name}</span>
          <span className="text-xs text-white/40">{recipient.bankName}</span>
        </div>
      </div>

      {/* Amount display */}
      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <div
          className={cn(
            'font-extrabold text-white text-center transition-all duration-100',
            getDisplaySize(raw)
          )}
          style={{
            fontVariantNumeric: 'tabular-nums',
            fontFeatureSettings: '"tnum" 1',
            letterSpacing: '-0.04em',
          }}
        >
          {formatDisplay(raw)}
        </div>

        <div className="mt-1 h-[2px] w-16 rounded-full bg-teal/60 mx-auto" />

        {/* Note row */}
        <div className="mt-5 w-full">
          {showNote ? (
            <input
              className="w-full bg-transparent text-center text-sm text-white/60 placeholder:text-white/25 outline-none"
              placeholder="Add a note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={80}
              autoFocus
            />
          ) : (
            <button
              onClick={() => setShowNote(true)}
              className="w-full text-center text-sm text-white/30 hover:text-white/50 transition-colors"
            >
              + Add a note
            </button>
          )}
        </div>
      </div>

      {/* Keypad */}
      <div className="px-5 pb-3">
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {keys.map((key) => (
            <button
              key={key}
              onClick={() => press(key)}
              className={cn(
                'h-[64px] rounded-2xl flex items-center justify-center',
                'text-lg font-semibold text-white',
                'transition-all duration-100 active:scale-95 select-none',
                key === '⌫'
                  ? 'bg-white/[0.05] text-white/50'
                  : 'bg-white/[0.07] hover:bg-white/[0.10]'
              )}
            >
              {key === '⌫' ? <BackspaceIcon /> : key}
            </button>
          ))}
        </div>

        <Button
          fullWidth
          size="lg"
          disabled={!isValid}
          onClick={() => onConfirm(raw, note)}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function BackspaceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <line x1="18" y1="9" x2="12" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
    </svg>
  )
}
