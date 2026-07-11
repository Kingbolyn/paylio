'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface BottomSheetProps {
  open:       boolean
  onClose:    () => void
  children:   ReactNode
  title?:     string
  snapHeight?: 'auto' | 'half' | 'full'
  className?: string
}

export default function BottomSheet({
  open,
  onClose,
  children,
  title,
  snapHeight = 'auto',
  className,
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const heightClass =
    snapHeight === 'full' ? 'max-h-[92dvh]' :
    snapHeight === 'half' ? 'max-h-[55dvh]' :
    'max-h-[90dvh]'

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center max-w-mobile mx-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={cn(
          'relative w-full',
          'bg-navy-mid border-t border-white/[0.08]',
          'rounded-t-[28px]',
          'overflow-hidden flex flex-col',
          'animate-slide-up',
          heightClass,
          className
        )}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 py-3 flex-shrink-0 border-b border-white/[0.06]">
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.12] transition-all"
            >
              <CloseIcon />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}
