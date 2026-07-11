import { Recipient } from '@/types'
import { Avatar, Button, Card } from '@/components/ui'
import { formatCurrency, maskAccountNumber } from '@/lib/utils'

interface TransferConfirmProps {
  recipient: Recipient
  amount:    string
  note:      string
  onConfirm: () => void
  onBack:    () => void
}

export default function TransferConfirm({
  recipient,
  amount,
  note,
  onConfirm,
  onBack,
}: TransferConfirmProps) {
  const numeric = parseFloat(amount) || 0

  return (
    <div className="flex flex-col min-h-dvh bg-navy">

      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-4 pb-5">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/[0.07] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.11] transition-all flex-shrink-0"
        >
          <BackIcon />
        </button>
        <h1 className="text-lg font-bold text-white">Confirm Transfer</h1>
      </div>

      <div className="flex-1 flex flex-col px-5 gap-4">

        {/* Amount */}
        <Card variant="teal" padding="lg" className="flex flex-col items-center gap-1 text-center">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
            You are sending
          </p>
          <span
            className="text-[44px] leading-none font-extrabold text-teal"
            style={{
              fontVariantNumeric: 'tabular-nums',
              fontFeatureSettings: '"tnum" 1',
              letterSpacing: '-0.04em',
            }}
          >
            {formatCurrency(numeric, 'NGN')}
          </span>
        </Card>

        {/* Recipient */}
        <Card padding="md">
          <p className="text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-3">
            To
          </p>
          <div className="flex items-center gap-3">
            <Avatar
              initials={recipient.avatarInitials}
              colorSeed={recipient.name}
              size="lg"
            />
            <div>
              <p className="text-base font-semibold text-white leading-tight">
                {recipient.name}
              </p>
              <p className="text-sm text-white/45 mt-0.5">
                {recipient.bankName}&nbsp;·&nbsp;
                {maskAccountNumber(recipient.accountNumber)}
              </p>
            </div>
          </div>
        </Card>

        {/* Note */}
        {note && (
          <Card padding="md">
            <p className="text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-2">
              Note
            </p>
            <p className="text-sm text-white/75">{note}</p>
          </Card>
        )}

        {/* Security notice */}
        <div className="flex items-start gap-2.5 px-1">
          <ShieldIcon />
          <p className="text-xs text-white/35 leading-relaxed">
            Review the details above carefully. Once sent, this transfer cannot be reversed.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 pb-8 pt-4 flex flex-col gap-3">
        <Button fullWidth size="lg" onClick={onConfirm}>
          Confirm &amp; Send
        </Button>
        <Button fullWidth size="lg" variant="ghost" onClick={onBack}>
          Edit
        </Button>
      </div>
    </div>
  )
}

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" />
    </svg>
  )
}
