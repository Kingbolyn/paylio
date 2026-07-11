import { Recipient } from '@/types'
import { Button } from '@/components/ui'
import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'

interface TransferSuccessProps {
  recipient:    Recipient
  amount:       string
  onSendAnother: () => void
}

export default function TransferSuccess({
  recipient,
  amount,
  onSendAnother,
}: TransferSuccessProps) {
  const numeric = parseFloat(amount) || 0
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-navy px-5 text-center">

      {/* Checkmark */}
      <div className="mb-8 animate-check-pulse">
        <div className="w-24 h-24 rounded-full bg-teal/[0.12] border-2 border-teal/30 flex items-center justify-center shadow-teal-strong">
          <div className="w-14 h-14 rounded-full bg-teal/[0.20] flex items-center justify-center">
            <CheckIcon />
          </div>
        </div>
      </div>

      {/* Copy */}
      <h1 className="text-[36px] font-extrabold text-white leading-tight tracking-tight mb-1">
        Sent. Done.
      </h1>
      <p className="text-white/40 text-sm mb-8">
        Today, {timeStr}
      </p>

      {/* Transfer summary card */}
      <div className="w-full max-w-xs bg-white/[0.05] border border-white/[0.08] rounded-3xl p-5 mb-10">
        <div className="flex flex-col gap-3.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-medium">Amount</span>
            <span
              className="text-base font-extrabold text-teal"
              style={{
                fontVariantNumeric: 'tabular-nums',
                fontFeatureSettings: '"tnum" 1',
              }}
            >
              {formatCurrency(numeric, 'NGN')}
            </span>
          </div>

          <div className="h-px bg-white/[0.07]" />

          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-medium">To</span>
            <div className="text-right">
              <p className="text-sm font-semibold text-white leading-tight">
                {recipient.name}
              </p>
              <p className="text-xs text-white/40 mt-0.5">{recipient.bankName}</p>
            </div>
          </div>

          <div className="h-px bg-white/[0.07]" />

          <div className="flex justify-between items-center">
            <span className="text-xs text-white/40 font-medium">Status</span>
            <span className="text-xs font-semibold text-teal bg-teal/10 px-2.5 py-1 rounded-full">
              Completed
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link href="/demo/home" className="w-full">
          <Button fullWidth size="lg">
            Back to Home
          </Button>
        </Link>
        <Button fullWidth size="lg" variant="secondary" onClick={onSendAnother}>
          Send Another
        </Button>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
