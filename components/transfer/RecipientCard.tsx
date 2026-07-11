import { Recipient } from '@/types'
import { Avatar } from '@/components/ui'
import { maskAccountNumber } from '@/lib/utils'

interface RecipientCardProps {
  recipient:  Recipient
  onSelect:   (r: Recipient) => void
  compact?:   boolean
}

export default function RecipientCard({
  recipient,
  onSelect,
  compact = false,
}: RecipientCardProps) {
  if (compact) {
    return (
      <button
        onClick={() => onSelect(recipient)}
        className="flex flex-col items-center gap-2 flex-shrink-0 group"
      >
        <Avatar
          initials={recipient.avatarInitials}
          colorSeed={recipient.name}
          size="lg"
          className="group-active:scale-95 transition-transform duration-150"
        />
        <span className="text-[11px] font-semibold text-white/60 group-hover:text-white/90 transition-colors max-w-[56px] truncate text-center leading-tight">
          {recipient.name.split(' ')[0]}
        </span>
      </button>
    )
  }

  return (
    <button
      onClick={() => onSelect(recipient)}
      className="flex items-center gap-3.5 w-full px-5 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.07] transition-colors duration-100 text-left"
    >
      <Avatar
        initials={recipient.avatarInitials}
        colorSeed={recipient.name}
        size="md"
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white leading-tight truncate">
          {recipient.name}
        </p>
        <p className="text-xs text-white/40 mt-0.5 truncate">
          {recipient.bankName}&nbsp;·&nbsp;
          {maskAccountNumber(recipient.accountNumber)}
        </p>
      </div>

      <ChevronRight />
    </button>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
