import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 text-center lg:rounded-[40px] lg:py-24">
          {/* Animated aurora background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(-45deg, rgba(20,184,166,0.22), rgba(124,58,237,0.18), rgba(217,70,239,0.14), rgba(96,165,250,0.18))',
              backgroundSize: '300% 300%',
              animation: 'aurora 12s ease infinite',
            }}
          />
          {/* Glass overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(8,9,26,0.55)', backdropFilter: 'blur(1px)' }}
          />
          {/* Border */}
          <div
            className="absolute inset-0 rounded-3xl lg:rounded-[40px]"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          />
          {/* Top glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% -10%, rgba(20,184,166,0.15) 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: '#2DD4BF' }}
            >
              Try It
            </p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
              You&apos;ve seen enough.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF 0%, #A78BFA 55%, #E879F9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Time to try it.
              </span>
            </h2>
            <p className="mb-9 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Open the demo. Send a transfer. Check your spending breakdown. No account, no forms,
              no waiting.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/demo/home"
                className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-bold text-navy transition-all hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF, #14B8A6)',
                  boxShadow: '0 4px 24px rgba(20,184,166,0.45)',
                }}
              >
                Open the Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border px-7 text-sm font-semibold transition-all hover:bg-white/[0.08] hover:text-white"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.65)' }}
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
