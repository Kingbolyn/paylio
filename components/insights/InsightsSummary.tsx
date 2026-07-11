import { SpendingInsight } from '@/types'
import { formatCurrency } from '@/lib/utils'

interface InsightsSummaryProps {
  insight: SpendingInsight
}

export default function InsightsSummary({ insight }: InsightsSummaryProps) {
  return (
    <div className="flex items-stretch gap-3">

      {/* Received */}
      <div className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-3xl p-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-teal/[0.15] flex items-center justify-center">
            <ArrowDown className="text-teal" />
          </div>
          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">
            Received
          </span>
        </div>
        <span
          className="text-xl font-extrabold text-white leading-tight"
          style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum" 1', letterSpacing: '-0.03em' }}
        >
          {formatCurrency(insight.totalReceived, 'NGN', true)}
        </span>
      </div>

      {/* Spent */}
      <div className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-3xl p-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-red-500/[0.15] flex items-center justify-center">
            <ArrowUp className="text-red-400" />
          </div>
          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">
            Spent
          </span>
        </div>
        <span
          className="text-xl font-extrabold text-white leading-tight"
          style={{ fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '"tnum" 1', letterSpacing: '-0.03em' }}
        >
          {formatCurrency(insight.totalSpent, 'NGN', true)}
        </span>
      </div>

    </div>
  )
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
    </svg>
  )
}
