import Link from 'next/link'

export const metadata = {
  title: 'Product — Paylio',
  description: 'A complete look at everything Paylio does. Built for real life.',
}

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="7" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Smart Accounts',
    body: 'One account that holds, moves, and grows your money. Naira-native, with multi-currency wallets on the roadmap.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12h14M12 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Instant Transfers',
    body: 'Send to any Nigerian bank in under 3 seconds. Track every transfer with real-time status and full receipt history.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 12l2 2.5 4-4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Bank-Grade Security',
    body: 'Biometric lock, fraud monitoring, and 256-bit encryption on every transaction. Built with zero-trust principles.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 3h18v5H3zM3 11h18v5H3zM3 19h18v2H3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M7 6h1M7 14h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Spending Insights',
    body: 'Auto-categorised expenses, weekly summaries, and trend charts that actually explain where your money goes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 15h10M7 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Virtual & Physical Cards',
    body: 'Create unlimited virtual cards for online spending. Order a physical card that works worldwide.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    title: 'API Access',
    body: 'Integrate Paylio into your own product. RESTful API, webhooks, and sandbox environment available to all developers.',
  },
]

const timeline = [
  { phase: 'Launched', label: 'Personal accounts, transfers, virtual cards, spending insights' },
  { phase: 'Q4 2026', label: 'Physical cards shipping, biometric auth upgrade' },
  { phase: 'Q1 2027', label: 'Business accounts, team spending, invoice tools' },
  { phase: '2027', label: 'Multi-currency wallets, international transfers' },
]

export default function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.12),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            Product Overview
          </div>
          <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight lg:text-7xl">
            Everything you need,{' '}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              nothing you don&apos;t.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50">
            Paylio is a complete financial platform built for clarity. No hidden fees, no confusing
            dashboards, no unnecessary complexity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo/home"
              className="inline-flex h-12 items-center rounded-full bg-teal px-7 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
            >
              Try the Demo
            </Link>
            <Link
              href="/features"
              className="inline-flex h-12 items-center gap-1.5 rounded-full border border-white/15 px-7 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              See Features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard mockup */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-navy-deep/80 shadow-2xl backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-navy-deep px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/10" />
              <span className="h-3 w-3 rounded-full bg-white/10" />
              <span className="h-3 w-3 rounded-full bg-white/10" />
              <div className="mx-4 flex h-6 flex-1 items-center rounded bg-white/[0.05] px-3">
                <span className="text-[11px] text-white/30">paylio.app/dashboard</span>
              </div>
            </div>
            {/* Dashboard layout */}
            <div className="grid grid-cols-1 gap-4 p-6 lg:grid-cols-3">
              {/* Balance card */}
              <div className="rounded-xl border border-teal/20 bg-gradient-to-br from-teal/20 to-teal/5 p-6 lg:col-span-2">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal/70">
                  Total Balance
                </p>
                <p
                  className="mb-6 text-4xl font-black tracking-tight text-white"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  ₦487,350.00
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {['Send', 'Receive', 'Top Up'].map((a) => (
                    <div
                      key={a}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.06] p-3 text-center"
                    >
                      <p className="text-xs text-white/50">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Stats */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                  <p className="mb-1 text-xs text-white/40">Income this month</p>
                  <p
                    className="text-2xl font-bold text-teal"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    +₦770K
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                  <p className="mb-1 text-xs text-white/40">Spent this month</p>
                  <p
                    className="text-2xl font-bold text-white/80"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    ₦163.4K
                  </p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-4">
                  <p className="mb-1 text-xs text-white/40">Active cards</p>
                  <p className="text-2xl font-bold text-white/80">3</p>
                </div>
              </div>
              {/* Transactions */}
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 lg:col-span-3">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                  Recent Transactions
                </p>
                {[
                  { name: 'Bolt', time: '8:14 AM', amount: '-₦2,800', neg: true },
                  {
                    name: 'Salary — Tech Corp',
                    time: 'Yesterday',
                    amount: '+₦450,000',
                    neg: false,
                  },
                  { name: 'Shoprite', time: '2 days ago', amount: '-₦12,500', neg: true },
                  { name: 'Netflix', time: '3 days ago', amount: '-₦4,200', neg: true },
                ].map((tx) => (
                  <div
                    key={tx.name}
                    className="flex items-center justify-between border-b border-white/[0.05] py-2.5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border border-white/[0.08] bg-white/[0.07]" />
                      <div>
                        <p className="text-sm text-white/80">{tx.name}</p>
                        <p className="text-xs text-white/30">{tx.time}</p>
                      </div>
                    </div>
                    <p
                      className={`text-sm font-semibold tabular-nums ${tx.neg ? 'text-white/60' : 'text-teal'}`}
                    >
                      {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product pillars */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              Six core pillars
            </p>
            <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
              One product. Six things it does well.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-200 hover:border-teal/20 hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-teal/20 bg-teal/10 text-teal">
                  {p.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              Roadmap
            </p>
            <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
              Where we&apos;re headed
            </h2>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/[0.08]" />
            <div className="flex flex-col gap-10 pl-10">
              {timeline.map((item, i) => (
                <div key={item.phase} className="relative">
                  <div
                    className={`absolute -left-[34px] top-0.5 h-4 w-4 rounded-full border-2 ${i === 0 ? 'border-teal bg-teal/30' : 'border-white/20 bg-navy'}`}
                  />
                  <p
                    className={`mb-1 text-sm font-bold ${i === 0 ? 'text-teal' : 'text-white/40'}`}
                  >
                    {item.phase}
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="mb-5 text-4xl font-black tracking-tight lg:text-5xl">Ready to try it?</h2>
          <p className="mb-10 text-lg text-white/45">
            The full product is interactive in the demo. No signup, no friction.
          </p>
          <Link
            href="/demo/home"
            className="inline-flex h-12 items-center rounded-full bg-teal px-8 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
          >
            Open the Demo App
          </Link>
        </div>
      </section>
    </div>
  )
}
