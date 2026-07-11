'use client'

import { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:      string
  error?:      string
  hint?:       string
  leftIcon?:   ReactNode
  rightIcon?:  ReactNode
  onClear?:    () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      onClear,
      className,
      value,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false)
    const hasValue = value !== undefined && value !== ''

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-white/70 px-1">
            {label}
          </label>
        )}

        <div
          className={cn(
            'relative flex items-center',
            'h-14 rounded-2xl',
            'bg-white/[0.06] border',
            'transition-all duration-150',
            error
              ? 'border-red-500/50 shadow-[0_0_0_3px_rgba(239,68,68,0.10)]'
              : focused
              ? 'border-teal shadow-[0_0_0_3px_rgba(20,184,166,0.12)]'
              : 'border-white/[0.08] hover:border-white/[0.14]'
          )}
        >
          {leftIcon && (
            <span className="absolute left-4 text-white/40 flex items-center">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            value={value}
            onFocus={e => { setFocused(true);  props.onFocus?.(e) }}
            onBlur={e  => { setFocused(false); props.onBlur?.(e)  }}
            className={cn(
              'w-full h-full bg-transparent',
              'text-white text-base placeholder:text-white/30',
              'outline-none',
              leftIcon  ? 'pl-11' : 'pl-4',
              (rightIcon || (onClear && hasValue)) ? 'pr-11' : 'pr-4',
              className
            )}
            {...props}
          />

          {onClear && hasValue ? (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-4 text-white/40 hover:text-white/70 transition-colors"
            >
              <ClearIcon />
            </button>
          ) : rightIcon ? (
            <span className="absolute right-4 text-white/40 flex items-center">
              {rightIcon}
            </span>
          ) : null}
        </div>

        {error && (
          <p className="text-xs text-red-400 px-1 animate-fade-in">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs text-white/40 px-1">{hint}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input

function ClearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.2" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
