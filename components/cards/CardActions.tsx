import { Card as CardType } from '@/types'
import { cn } from '@/lib/utils'

interface CardActionsProps {
  card: CardType
}

interface Action {
  label:    string
  icon:     React.ReactNode
  danger?:  boolean
  disabled?: boolean
}

export default function CardActions({ card }: CardActionsProps) {
  const isFrozen = card.status === 'frozen'

  const actions: Action[] = [
    {
      label: isFrozen ? 'Unfreeze' : 'Freeze',
      icon:  isFrozen ? <UnfreezeIcon /> : <FreezeIcon />,
      danger: !isFrozen,
    },
    {
      label: 'View Details',
      icon:  <EyeIcon />,
    },
    {
      label: 'Set Limit',
      icon:  <LimitIcon />,
      disabled: card.isVirtual,
    },
    {
      label: 'Block Card',
      icon:  <BlockIcon />,
      danger: true,
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-2">
      {actions.map((action) => (
        <button
          key={action.label}
          disabled={action.disabled}
          className={cn(
            'flex flex-col items-center gap-2 py-3.5 rounded-2xl',
            'border transition-all duration-150 active:scale-95',
            'disabled:opacity-30 disabled:pointer-events-none',
            action.danger
              ? 'bg-red-500/[0.07] border-red-500/[0.15] text-red-400 hover:bg-red-500/[0.12]'
              : 'bg-white/[0.06] border-white/[0.08] text-white/60 hover:bg-white/[0.10] hover:text-white/80'
          )}
        >
          <span className="w-5 h-5 flex items-center justify-center">
            {action.icon}
          </span>
          <span className="text-[9px] font-semibold leading-tight text-center">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  )
}

function FreezeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function UnfreezeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function LimitIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

function BlockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  )
}
