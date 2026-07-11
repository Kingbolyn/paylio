import { Card as CardType } from '@/types'
import { cn } from '@/lib/utils'

interface PaymentCardProps {
  card:      CardType
  isActive:  boolean
  onSelect:  (id: string) => void
}

const networkGradients: Record<string, string> = {
  visa:       'from-[#0F2547] to-[#1a3a6b]',
  mastercard: 'from-[#1a0f2e] to-[#2d1b4e]',
  verve:      'from-[#0d2b1e] to-[#1a4a32]',
}

const networkAccents: Record<string, string> = {
  visa:       'rgba(96,165,250,0.15)',
  mastercard: 'rgba(167,139,250,0.15)',
  verve:      'rgba(52,211,153,0.15)',
}

export default function PaymentCard({ card, isActive, onSelect }: PaymentCardProps) {
  const isFrozen = card.status === 'frozen'

  return (
    <button
      onClick={() => onSelect(card.id)}
      className={cn(
        'w-full rounded-3xl p-5 text-left transition-all duration-200',
        'border relative overflow-hidden',
        isActive
          ? 'border-white/20 scale-[1.01]'
          : 'border-white/[0.07] hover:border-white/[0.12] opacity-70 hover:opacity-90',
        isFrozen && 'grayscale'
      )}
      style={{
        background: `linear-gradient(135deg, ${networkGradients[card.network].replace('from-', '').replace('to-', '').split(' ').join(', ')})`,
        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
      }}
    >
      {/* Gradient bg */}
      <div
        className={cn('absolute inset-0 bg-gradient-to-br', networkGradients[card.network])}
      />

      {/* Glow */}
      <div
        className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-2xl pointer-events-none"
        style={{ backgroundColor: networkAccents[card.network] }}
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-0.5">
              {card.label}
            </p>
            {isFrozen && (
              <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                Frozen
              </span>
            )}
            {card.isVirtual && !isFrozen && (
              <span className="text-[10px] font-semibold text-white/40 bg-white/[0.07] px-2 py-0.5 rounded-full">
                Virtual
              </span>
            )}
          </div>
          <NetworkLogo network={card.network} />
        </div>

        {/* Card number */}
        <p className="text-lg font-bold text-white tracking-[0.2em] mb-4">
          •••• •••• •••• {card.last4}
        </p>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] font-semibold text-white/30 uppercase tracking-wider mb-0.5">
              Expires
            </p>
            <p className="text-sm font-semibold text-white/70">{card.expiry}</p>
          </div>

          {card.spendingLimit && (
            <div className="text-right">
              <p className="text-[9px] font-semibold text-white/30 uppercase tracking-wider mb-0.5">
                Spent
              </p>
              <p className="text-sm font-semibold text-white/70"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                ₦{((card.spendingUsed ?? 0) / 1000).toFixed(0)}K
                <span className="text-white/30"> / ₦{(card.spendingLimit / 1000).toFixed(0)}K</span>
              </p>
            </div>
          )}
        </div>

        {/* Spending bar */}
        {card.spendingLimit && card.spendingUsed !== undefined && (
          <div className="mt-3 h-1 bg-white/[0.10] rounded-full overflow-hidden">
            <div
              className="h-full bg-white/50 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (card.spendingUsed / card.spendingLimit) * 100)}%` }}
            />
          </div>
        )}
      </div>
    </button>
  )
}

function NetworkLogo({ network }: { network: string }) {
  if (network === 'mastercard') {
    return (
      <div className="flex items-center -space-x-2">
        <div className="w-6 h-6 rounded-full bg-red-500/80" />
        <div className="w-6 h-6 rounded-full bg-amber-500/80" />
      </div>
    )
  }
  if (network === 'visa') {
    return (
      <span className="text-sm font-extrabold text-white/70 italic tracking-wider">VISA</span>
    )
  }
  return (
    <span className="text-xs font-extrabold text-white/60 tracking-widest">VERVE</span>
  )
}
