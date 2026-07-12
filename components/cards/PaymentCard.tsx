import { Card as CardType } from '@/types'
import { cn } from '@/lib/utils'

interface PaymentCardProps {
  card: CardType
  isActive: boolean
  onSelect: (id: string) => void
}

const networkGradients: Record<CardType['network'], string> = {
  visa: 'from-[#0F2547] to-[#1a3a6b]',
  mastercard: 'from-[#1a0f2e] to-[#2d1b4e]',
  verve: 'from-[#0d2b1e] to-[#1a4a32]',
}

const networkAccents: Record<CardType['network'], string> = {
  visa: 'rgba(96,165,250,0.15)',
  mastercard: 'rgba(167,139,250,0.15)',
  verve: 'rgba(52,211,153,0.15)',
}

export default function PaymentCard({ card, isActive, onSelect }: PaymentCardProps) {
  const isFrozen = card.status === 'frozen'

  return (
    <button
      onClick={() => onSelect(card.id)}
      className={cn(
        'w-full rounded-3xl p-5 text-left transition-all duration-200',
        'relative overflow-hidden border',
        isActive
          ? 'scale-[1.01] border-white/20'
          : 'border-white/[0.07] opacity-70 hover:border-white/[0.12] hover:opacity-90',
        isFrozen && 'grayscale'
      )}
      style={{
        background: `linear-gradient(135deg, ${networkGradients[card.network].replace('from-', '').replace('to-', '').split(' ').join(', ')})`,
        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
      }}
    >
      {/* Gradient bg */}
      <div className={cn('absolute inset-0 bg-gradient-to-br', networkGradients[card.network])} />

      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full blur-2xl"
        style={{ backgroundColor: networkAccents[card.network] }}
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
              {card.label}
            </p>
            {isFrozen && (
              <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                Frozen
              </span>
            )}
            {card.isVirtual && !isFrozen && (
              <span className="rounded-full bg-white/[0.07] px-2 py-0.5 text-[10px] font-semibold text-white/40">
                Virtual
              </span>
            )}
          </div>
          <NetworkLogo network={card.network} />
        </div>

        {/* Card number */}
        <p className="mb-4 text-lg font-bold tracking-[0.2em] text-white">
          •••• •••• •••• {card.last4}
        </p>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/30">
              Expires
            </p>
            <p className="text-sm font-semibold text-white/70">{card.expiry}</p>
          </div>

          {card.spendingLimit && (
            <div className="text-right">
              <p className="mb-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/30">
                Spent
              </p>
              <p
                className="text-sm font-semibold text-white/70"
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
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.10]">
            <div
              className="h-full rounded-full bg-white/50 transition-all duration-500"
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
        <div className="h-6 w-6 rounded-full bg-red-500/80" />
        <div className="h-6 w-6 rounded-full bg-amber-500/80" />
      </div>
    )
  }
  if (network === 'visa') {
    return <span className="text-sm font-extrabold italic tracking-wider text-white/70">VISA</span>
  }
  return <span className="text-xs font-extrabold tracking-widest text-white/60">VERVE</span>
}
