import Link from 'next/link'

export const metadata = {
  title: 'Insights — Paylio',
  description: 'Spending analytics that actually tell you something useful.',
}

const benefits = [
  {
    headline: 'Auto-categorised from the first transaction',
    body: 'Paylio reads the merchant name and amount and assigns a category immediately. Food, transport, utilities, subscriptions, entertainment. You never touch a settings page.',
  },
  {
    headline: 'Weekly summaries sent before you need them',
    body: 'Every Monday you get a clean breakdown of last week: what you spent, what changed versus the week before, and one line on what to watch.',
  },
  {
    headline: 'Merchant-level breakdown',
    body: 'Not just "Food" but Bolt Food: ₦18,400 this month. Not just "Entertainment" but DSTV: ₦6,500 every month for three months. Granular enough to actually act on.',
  },
  {
    headline: 'Visual trends over time',
    body: 'Bar charts, line graphs, and donut breakdowns that give you a real sense of direction. Are you spending more this month than last? The chart answers it in one glance.',
  },
]

const categories = [
  { name: 'Food & Dining', amount: '₦67,200', pct: 42, color: 'bg-teal' },
  { name: 'Transport', amount: '₦28,400', pct: 18, color: 'bg-blue-400' },
  { name: 'Bills & Utilities', amount: '₦22,800', pct: 14, color: 'bg-purple-400' },
  { name: 'Shopping', amount: '₦19,600', pct: 12, color: 'bg-yellow-400' },
  { name: 'Entertainment', amount: '₦11,200', pct: 7, color: 'bg-pink-400' },
  { name: 'Other', amount: '₦11,200', pct: 7, color: 'bg-white/20' },
]

export default function InsightsPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                Insights
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6">
                Know your money.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  Actually know it.
                </span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                Most apps tell you what you spent. Paylio tells you what it means and where the pattern is going.
              </p>
              <Link
                href="/demo/insights"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
              >
                See Insights in the Demo
              </Link>
            </div>

            {/* Spending breakdown visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xs rounded-2xl border border-white/[0.08] bg-navy-deep/80 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-white/40 mb-1">Total Spent — June</p>
                    <p className="text-2xl font-black text-white" style={{fontVariantNumeric:'tabular-nums'}}>₦160,400</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal/10 text-teal border border-teal/20">-8% vs May</span>
                </div>
                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-24 mb-5">
                  {[55, 70, 48, 82, 63, 90, 72, 58, 85, 68, 74, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{height:`${h}%`, background: i === 11 ? '#00C8AA' : 'rgba(255,255,255,0.07)'}} />
                  ))}
                </div>
                {/* Categories */}
                <div className="space-y-2.5">
                  {categories.slice(0, 4).map((cat) => (
                    <div key={cat.name}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-white/50">{cat.name}</p>
                        <p className="text-xs text-white/70 font-medium tabular-nums">{cat.amount}</p>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.06]">
                        <div className={`h-full rounded-full ${cat.color}`} style={{width:`${cat.pct}%`}} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits list */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">What Insights gives you</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
              Data that leads to decisions.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-teal/20 p-8 transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center mb-5">
                  <span className="text-xs font-black text-teal">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{b.headline}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full category breakdown */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight">
              Six categories. Every naira accounted for.
            </h2>
          </div>
          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-6 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${cat.color}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-white/80">{cat.name}</p>
                    <p className="text-sm font-bold text-white tabular-nums">{cat.amount}</p>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06]">
                    <div className={`h-full rounded-full ${cat.color}`} style={{width:`${cat.pct}%`, transition:'width 0.6s ease'}} />
                  </div>
                </div>
                <p className="text-sm text-white/30 w-10 text-right tabular-nums">{cat.pct}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-5">
            Open Insights in the demo.
          </h2>
          <p className="text-white/45 mb-10">The full charts, categories, and breakdowns are live and interactive.</p>
          <Link
            href="/demo/insights"
            className="inline-flex items-center h-12 px-8 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
          >
            Open Insights Screen
          </Link>
        </div>
      </section>

    </div>
  )
}
