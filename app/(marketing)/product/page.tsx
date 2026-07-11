import Link from 'next/link'

export const metadata = {
  title: 'Product — Paylio',
  description: 'A complete look at everything Paylio does. Built for real life.',
}

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="7" cy="15" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Smart Accounts',
    body: 'One account that holds, moves, and grows your money. Naira-native with multi-currency support coming soon.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Instant Transfers',
    body: 'Send to any Nigerian bank in under 3 seconds. Track every transfer with real-time status and full receipt history.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 12l2 2.5 4-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bank-Grade Security',
    body: 'Biometric lock, fraud monitoring, and 256-bit encryption on every transaction. Built with zero-trust principles.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18v5H3zM3 11h18v5H3zM3 19h18v2H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 6h1M7 14h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Spending Insights',
    body: 'Auto-categorised expenses, weekly summaries, and trend charts that actually explain where your money goes.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 15h10M7 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Virtual & Physical Cards',
    body: 'Create unlimited virtual cards for online spending. Order a physical card that works worldwide.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'API Access',
    body: 'Integrate Paylio into your own product. RESTful API, webhooks, and sandbox environment available to all developers.',
  },
]

const timeline = [
  { phase: 'Launched', label: 'Personal accounts, transfers, virtual cards, spending insights' },
  { phase: 'Q1 2026', label: 'Physical cards shipping, biometric auth upgrade' },
  { phase: 'Q3 2026', label: 'Business accounts, team spending, invoice tools' },
  { phase: '2027', label: 'Multi-currency wallets, international transfers' },
]

export default function ProductPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Product Overview
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Everything you need,{' '}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              nothing you don&apos;t.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            Paylio is a complete financial platform built for clarity. No hidden fees, no confusing dashboards, no unnecessary complexity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo/home"
              className="inline-flex items-center h-12 px-7 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
            >
              Try the Demo
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 h-12 px-7 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
            >
              See Features
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard mockup */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-navy-deep/80 backdrop-blur-sm shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-navy-deep">
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <span className="w-3 h-3 rounded-full bg-white/10" />
              <div className="flex-1 mx-4 h-6 rounded bg-white/[0.05] flex items-center px-3">
                <span className="text-[11px] text-white/30">paylio.app/dashboard</span>
              </div>
            </div>
            {/* Dashboard layout */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Balance card */}
              <div className="lg:col-span-2 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 border border-teal/20 p-6">
                <p className="text-xs text-teal/70 font-semibold uppercase tracking-wider mb-1">Total Balance</p>
                <p className="text-4xl font-black tracking-tight text-white mb-6" style={{fontVariantNumeric:'tabular-nums'}}>₦487,350.00</p>
                <div className="grid grid-cols-3 gap-3">
                  {['Send','Receive','Top Up'].map(a => (
                    <div key={a} className="rounded-lg bg-white/[0.06] border border-white/[0.08] p-3 text-center">
                      <p className="text-xs text-white/50">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Stats */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-4">
                  <p className="text-xs text-white/40 mb-1">Income this month</p>
                  <p className="text-2xl font-bold text-teal" style={{fontVariantNumeric:'tabular-nums'}}>+₦770K</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-4">
                  <p className="text-xs text-white/40 mb-1">Spent this month</p>
                  <p className="text-2xl font-bold text-white/80" style={{fontVariantNumeric:'tabular-nums'}}>₦163.4K</p>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-4">
                  <p className="text-xs text-white/40 mb-1">Active cards</p>
                  <p className="text-2xl font-bold text-white/80">3</p>
                </div>
              </div>
              {/* Transactions */}
              <div className="lg:col-span-3 rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-3">Recent Transactions</p>
                {[
                  { name: 'Bolt', time: '8:14 AM', amount: '-₦2,800', neg: true },
                  { name: 'Salary — Tech Corp', time: 'Yesterday', amount: '+₦450,000', neg: false },
                  { name: 'Shoprite', time: '2 days ago', amount: '-₦12,500', neg: true },
                  { name: 'Netflix', time: '3 days ago', amount: '-₦4,200', neg: true },
                ].map(tx => (
                  <div key={tx.name} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/[0.07] border border-white/[0.08]" />
                      <div>
                        <p className="text-sm text-white/80">{tx.name}</p>
                        <p className="text-xs text-white/30">{tx.time}</p>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold tabular-nums ${tx.neg ? 'text-white/60' : 'text-teal'}`}>
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
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">Six core pillars</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
              One product. Six things it does well.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-teal/20 p-7 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">Roadmap</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
              Where we&apos;re headed
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-white/[0.08]" />
            <div className="flex flex-col gap-10 pl-10">
              {timeline.map((item, i) => (
                <div key={item.phase} className="relative">
                  <div className={`absolute -left-[34px] top-0.5 w-4 h-4 rounded-full border-2 ${i === 0 ? 'border-teal bg-teal/30' : 'border-white/20 bg-navy'}`} />
                  <p className={`text-sm font-bold mb-1 ${i === 0 ? 'text-teal' : 'text-white/40'}`}>{item.phase}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            Ready to try it?
          </h2>
          <p className="text-white/45 text-lg mb-10">
            The full product is interactive in the demo. No signup, no friction.
          </p>
          <Link
            href="/demo/home"
            className="inline-flex items-center h-12 px-8 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
          >
            Open the Demo App
          </Link>
        </div>
      </section>

    </div>
  )
}
