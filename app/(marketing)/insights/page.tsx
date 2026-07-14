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
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                Insights
              </div>
              <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight lg:text-6xl">
                Know your money.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  Actually know it.
                </span>
              </h1>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/50">
                Most apps tell you what you spent. Paylio tells you what it means and where the
                pattern is going.
              </p>
              <Link
                href="/demo/insights"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-teal px-7 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
              >
                See Insights in the Demo
              </Link>
            </div>

            {/* Spending breakdown visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xs rounded-2xl border border-white/[0.08] bg-navy-deep/80 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="mb-1 text-xs text-white/40">Total Spent — June</p>
                    <p
                      className="text-2xl font-black text-white"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      ₦160,400
                    </p>
                  </div>
                  <span className="rounded-full border border-teal/20 bg-teal/10 px-2.5 py-1 text-xs text-teal">
                    -8% vs May
                  </span>
                </div>
                {/* Chart bars */}
                <div className="mb-5 flex h-24 items-end gap-1.5">
                  {[55, 70, 48, 82, 63, 90, 72, 58, 85, 68, 74, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? '#00C8AA' : 'rgba(255,255,255,0.07)',
                      }}
                    />
                  ))}
                </div>
                {/* Categories */}
                <div className="space-y-2.5">
                  {categories.slice(0, 4).map((cat) => (
                    <div key={cat.name}>
                      <div className="mb-1 flex items-center justify-between">
                        <p className="text-xs text-white/50">{cat.name}</p>
                        <p className="text-xs font-medium tabular-nums text-white/70">
                          {cat.amount}
                        </p>
                      </div>
                      <div className="h-1 rounded-full bg-white/[0.06]">
                        <div
                          className={`h-full rounded-full ${cat.color}`}
                          style={{ width: `${cat.pct}%` }}
                        />
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
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              What Insights gives you
            </p>
            <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
              Data that leads to decisions.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 transition-all duration-200 hover:border-teal/20"
              >
                <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg border border-teal/20 bg-teal/10">
                  <span className="text-xs font-black text-teal">0{i + 1}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{b.headline}</h3>
                <p className="text-sm leading-relaxed text-white/45">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full category breakdown */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black tracking-tight">
              Six categories. Every naira accounted for.
            </h2>
          </div>
          <div className="space-y-4">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="flex items-center gap-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <div className={`h-3 w-3 flex-shrink-0 rounded-full ${cat.color}`} />
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white/80">{cat.name}</p>
                    <p className="text-sm font-bold tabular-nums text-white">{cat.amount}</p>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06]">
                    <div
                      className={`h-full rounded-full ${cat.color}`}
                      style={{ width: `${cat.pct}%`, transition: 'width 0.6s ease' }}
                    />
                  </div>
                </div>
                <p className="w-10 text-right text-sm tabular-nums text-white/30">{cat.pct}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="mb-5 text-4xl font-black tracking-tight">Open Insights in the demo.</h2>
          <p className="mb-10 text-white/45">
            The full charts, categories, and breakdowns are live and interactive.
          </p>
          <Link
            href="/demo/insights"
            className="inline-flex h-12 items-center rounded-full bg-teal px-8 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
          >
            Open Insights Screen
          </Link>
        </div>
      </section>
    </div>
  )
}
