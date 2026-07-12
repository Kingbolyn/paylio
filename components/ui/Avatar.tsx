import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials: string
  size?: AvatarSize
  colorSeed?: string
}

const sizes: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: 'w-8 h-8', text: 'text-xs' },
  sm: { container: 'w-9 h-9', text: 'text-xs' },
  md: { container: 'w-10 h-10', text: 'text-sm' },
  lg: { container: 'w-12 h-12', text: 'text-base' },
  xl: { container: 'w-16 h-16', text: 'text-xl' },
}

const palette = [
  { bg: 'rgba(20, 184, 166, 0.20)', text: '#14B8A6' },
  { bg: 'rgba(59, 130, 246, 0.20)', text: '#60A5FA' },
  { bg: 'rgba(139, 92, 246, 0.20)', text: '#A78BFA' },
  { bg: 'rgba(245, 158, 11, 0.20)', text: '#FCD34D' },
  { bg: 'rgba(236, 72, 153, 0.20)', text: '#F472B6' },
  { bg: 'rgba(16, 185, 129, 0.20)', text: '#34D399' },
  { bg: 'rgba(249, 115, 22, 0.20)', text: '#FB923C' },
]

function pickColor(seed: string) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }
  return palette[Math.abs(hash) % palette.length]!
}

export default function Avatar({
  initials,
  size = 'md',
  colorSeed,
  className,
  style,
  ...props
}: AvatarProps) {
  const color = pickColor(colorSeed ?? initials)
  const dim = sizes[size]

  return (
    <div
      className={cn(
        'flex flex-shrink-0 items-center justify-center rounded-full font-semibold',
        dim.container,
        dim.text,
        className
      )}
      style={{ backgroundColor: color.bg, color: color.text, ...style }}
      {...props}
    >
      {initials.slice(0, 2).toUpperCase()}
    </div>
  )
}
