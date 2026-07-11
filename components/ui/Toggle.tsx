'use client'

import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ToggleProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked:   boolean
  onChange:  (value: boolean) => void
  disabled?: boolean
  label?:    string
}

export default function Toggle({
  checked,
  onChange,
  disabled = false,
  label,
  className,
  ...props
}: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full',
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal',
        'disabled:opacity-40 disabled:pointer-events-none',
        checked ? 'bg-teal' : 'bg-white/[0.15]',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none absolute top-[3px] left-[3px]',
          'h-[22px] w-[22px] rounded-full bg-white',
          'shadow-[0_1px_4px_rgba(0,0,0,0.35)]',
          'transition-transform duration-200 ease-in-out',
          checked ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </button>
  )
}
