'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  Variant
  size?:     Size
  fullWidth?: boolean
  loading?:  boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-teal text-white font-semibold shadow-teal hover:bg-teal-dim hover:shadow-teal-strong active:scale-[0.97]',
  secondary:
    'bg-white/[0.08] text-white font-medium border border-white/10 hover:bg-white/[0.12] active:scale-[0.97]',
  ghost:
    'bg-transparent text-teal font-medium hover:bg-teal/10 active:scale-[0.97]',
  danger:
    'bg-red-500/10 text-red-400 font-medium border border-red-500/20 hover:bg-red-500/15 active:scale-[0.97]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9  px-4 text-sm  rounded-full',
  md: 'h-12 px-6 text-base rounded-full',
  lg: 'h-14 px-8 text-base rounded-full',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = 'primary',
      size      = 'md',
      fullWidth = false,
      loading   = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'transition-all duration-150',
          'select-none cursor-pointer',
          'disabled:opacity-40 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size={size} />
            {children}
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button

function Spinner({ size }: { size: Size }) {
  const dim = size === 'sm' ? 14 : 16
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 16 16"
      fill="none"
      className="animate-spin"
    >
      <circle
        cx="8" cy="8" r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.3"
      />
      <path
        d="M8 2a6 6 0 0 1 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
