import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Padding  = 'none' | 'sm' | 'md' | 'lg'
type Variant  = 'default' | 'raised' | 'teal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: Padding
  variant?: Variant
  pressable?: boolean
}

const paddings: Record<Padding, string> = {
  none: '',
  sm:   'p-4',
  md:   'p-5',
  lg:   'p-6',
}

const variants: Record<Variant, string> = {
  default: 'bg-white/[0.05] border border-white/[0.08] shadow-card',
  raised:  'bg-white/[0.08] border border-white/[0.12] shadow-card',
  teal:    'bg-teal/[0.10] border border-teal/30 shadow-teal',
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding   = 'md',
      variant   = 'default',
      pressable = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl',
          variants[variant],
          paddings[padding],
          pressable && 'cursor-pointer transition-all duration-150 hover:bg-white/[0.09] active:scale-[0.98]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card
