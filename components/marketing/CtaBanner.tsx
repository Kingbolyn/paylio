import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 text-center lg:rounded-[40px] lg:py-20"
          style={{
            background:
              'linear-gradient(135deg, rgba(20,184,166,0.15) 0%, rgba(96,165,250,0.08) 50%, rgba(139,92,246,0.12) 100%)',
            border: '1px solid rgba(20,184,166,0.2)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(20,184,166,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-teal">Try It</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
              The demo is live.
            </h2>
            <p className="mb-9 text-lg leading-relaxed text-white/55">
              No account needed. Send mock transfers, explore your spending breakdown, and see how
              Paylio handles money day-to-day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/demo/home"
                className="inline-flex h-12 items-center justify-center rounded-full bg-teal px-8 text-sm font-bold text-navy shadow-teal-strong transition-all hover:bg-teal-light active:scale-[0.97]"
              >
                Open the Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white/70 transition-all hover:bg-white/[0.07] hover:text-white"
              >
                About Paylio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
