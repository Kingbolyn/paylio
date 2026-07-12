'use client'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function TransferError({ reset }: Props) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <p className="mb-6 select-none text-7xl font-black leading-none text-white/[0.05]">!</p>
      <h2 className="mb-2 text-lg font-bold text-white">Transfer unavailable</h2>
      <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/55">
        The transfer screen ran into a problem. No money has moved — try again.
      </p>
      <button
        onClick={reset}
        className="h-11 rounded-full bg-teal px-7 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light active:scale-[0.97]"
      >
        Try again
      </button>
    </div>
  )
}
