import dynamic from 'next/dynamic'
import Link from 'next/link'

const GlobeSVG = dynamic(() => import('./GlobeSVG'), { ssr: false, loading: () => null })

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <GlobeSVG />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-8 lg:py-0">
          <div className="flex max-w-xl flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal/25 bg-teal/[0.07] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              MODERN PAYMENTS
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Money,{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 50%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Made Simple.
              </span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/55">
              Paylio is a fintech demo built for the Nigerian market — instant transfers, clear
              spending analytics, and security you control. No fluff.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo/home"
                className="inline-flex h-12 items-center justify-center rounded-full bg-teal px-7 text-sm font-bold text-navy shadow-teal-strong transition-all duration-150 hover:bg-teal-light active:scale-[0.97]"
              >
                Get Started
              </Link>
              <Link
                href="/product"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.14] px-6 text-sm font-semibold text-white/70 transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
              >
                Explore Product
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {['#14B8A6', '#60A5FA', '#A78BFA', '#F59E0B'].map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-navy"
                    style={{ background: `radial-gradient(circle at 35% 35%, ${c}dd, ${c}66)` }}
                  />
                ))}
              </div>
              <p className="text-sm text-white/40">
                Trusted by <span className="font-semibold text-white/70">10,000+</span> people and
                businesses
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 scale-90 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)' }}
      />
      <div
        className="relative w-[260px] overflow-hidden rounded-[44px] shadow-2xl sm:w-[300px]"
        style={{
          background: 'linear-gradient(145deg, #1a3a6b, #071628)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <div className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-navy-deep" />
        <div className="min-h-[540px] bg-[#0B1E3D] px-4 pb-4 pt-10">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-navy">
                AO
              </div>
              <div>
                <p className="text-[9px] text-white/40">Good afternoon</p>
                <p className="text-[11px] font-bold text-white">Adebayo</p>
              </div>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.07]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
          </div>
          <div
            className="mb-4 rounded-2xl p-4"
            style={{
              background: 'linear-gradient(145deg, #0F2547, #071628)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p className="mb-1 text-[8px] font-semibold uppercase tracking-widest text-white/40">
              Available Balance
            </p>
            <p
              className="mb-1 text-2xl font-extrabold text-white"
              style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}
            >
              ₦487,350.00
            </p>
            <p className="mb-3 text-[9px] text-white/35">Main Account ••••6789</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-teal/20">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[7px] text-white/35">Income</p>
                  <p
                    className="text-[10px] font-bold text-teal"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    ₦770.0K
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500/20">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[7px] text-white/35">Spent</p>
                  <p
                    className="text-[10px] font-bold text-red-400"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    ₦163.4K
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-4 gap-2">
            {[
              { label: 'Send', color: 'rgba(20,184,166,0.12)' },
              { label: 'Receive', color: 'rgba(59,130,246,0.12)' },
              { label: 'Top Up', color: 'rgba(139,92,246,0.12)' },
              { label: 'History', color: 'rgba(255,255,255,0.06)' },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-xl" style={{ background: a.color }} />
                <p className="text-[8px] font-semibold text-white/45">{a.label}</p>
              </div>
            ))}
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-bold text-white">Recent Transactions</p>
            <p className="text-[9px] font-semibold text-teal">See all</p>
          </div>
          {[
            { name: 'Bolt', time: '8:14 AM', amount: '-₦2,800', color: '#EF4444' },
            { name: 'Salary', time: 'Yesterday', amount: '+₦450K', color: '#14B8A6' },
            { name: 'Shoprite', time: '2 days ago', amount: '-₦12,500', color: '#EF4444' },
          ].map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-between border-b border-white/[0.05] py-2"
            >
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-xl bg-white/[0.06]" />
                <div>
                  <p className="text-[9px] font-semibold text-white">{t.name}</p>
                  <p className="text-[7px] text-white/35">{t.time}</p>
                </div>
              </div>
              <p
                className="text-[10px] font-bold"
                style={{ color: t.color, fontVariantNumeric: 'tabular-nums' }}
              >
                {t.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute -right-6 top-1/3 rounded-2xl px-3 py-2 shadow-xl"
        style={{
          background: 'rgba(15,37,71,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal/20">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7-7 7 7" />
            </svg>
          </div>
          <div>
            <p className="text-[8px] text-white/40">This month</p>
            <p
              className="text-[11px] font-extrabold text-teal"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              +₦770K
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute -left-8 bottom-1/3 rounded-2xl px-3 py-2 shadow-xl"
        style={{
          background: 'rgba(15,37,71,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-500/20">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <div>
            <p className="text-[8px] text-white/40">Secure</p>
            <p className="text-[9px] font-bold text-green-400">256-bit SSL</p>
          </div>
        </div>
      </div>
    </div>
  )
}
