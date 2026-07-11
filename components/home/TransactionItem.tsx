import { Transaction, TransactionCategory } from '@/types'
import { formatCurrency, formatTime, getCategoryColor } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface TransactionItemProps {
  transaction: Transaction
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const isCredit = transaction.type === 'credit'
  const isPending = transaction.status === 'pending'
  const color = getCategoryColor(transaction.category)

  return (
    <div className="flex items-center gap-3.5 px-5 py-3.5 hover:bg-white/[0.03] transition-colors duration-100 active:bg-white/[0.05]">
      {/* Category icon */}
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}1a`, color }}
      >
        <CategoryIcon category={transaction.category} />
      </div>

      {/* Merchant + category */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white leading-tight truncate">
          {transaction.merchant}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <p className="text-xs text-white/40 truncate">
            {formatTime(transaction.time)}
          </p>
          {isPending && (
            <>
              <span className="text-white/20 text-[10px]">•</span>
              <span className="text-[10px] font-medium text-amber-400">Pending</span>
            </>
          )}
        </div>
      </div>

      {/* Amount */}
      <div className="flex flex-col items-end flex-shrink-0">
        <span
          className={cn(
            'text-sm font-semibold leading-tight',
            'tabular-nums',
            isCredit
              ? 'text-teal'
              : isPending
              ? 'text-white/50'
              : 'text-white'
          )}
          style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum" 1' }}
        >
          {isCredit ? '+' : '-'}
          {formatCurrency(transaction.amount, transaction.currency)}
        </span>
      </div>
    </div>
  )
}

function CategoryIcon({ category }: { category: TransactionCategory }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (category) {
    case 'food':
      return (
        <svg {...props}>
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    case 'transport':
      return (
        <svg {...props}>
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 3v5h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    case 'shopping':
      return (
        <svg {...props}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    case 'entertainment':
      return (
        <svg {...props}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )
    case 'utilities':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    case 'health':
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    case 'subscription':
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      )
    case 'transfer':
      return (
        <svg {...props}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
        </svg>
      )
  }
}
