import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'positive' | 'negative' | 'warning' | 'neutral' | 'pending'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?:     boolean
}

const variants: Record<BadgeVariant, string> = {
  positive: 'bg-teal/[0.12] text-teal',
  negative: 'bg-red-500/[0.12] text-red-400',
  warning:  'bg-amber-500/[0.12] text-amber-400',
  neutral:  'bg-white/[0.08] text-white/60',
  pending:  'bg-amber-500/[0.10] text-amber-300',
}

const dotColors: Record<BadgeVariant, string> = {
  positive: 'bg-teal',
  negative: 'bg-red-400',
  warning:  'bg-amber-400',
  neutral:  'bg-white/40',
  pending:  'bg-amber-300',
}

export default function Badge({
  variant   = 'neutral',
  dot       = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5',
        'px-2.5 py-1 rounded-full',
        'text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors[variant])}
        />
      )}
      {children}
    </span>
  )
}
