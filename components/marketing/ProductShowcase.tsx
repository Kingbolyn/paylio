import Link from 'next/link'

const bullets = [
  'Instant Transfers — Any Nigerian bank, under ten seconds.',
  'Spending Breakdown — Category-level charts updated after every transaction.',
  'Bill Payments — DSTV, EKEDC, airtime. No switching apps.',
  'Virtual Cards — Separate card per service. Freeze or delete in one tap.',
  'Live Alerts — Threshold-based notifications you configure, not us.',
]

export default function ProductShowcase() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Dual phone mockup */}
          <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
            <div
              className="pointer-events-none absolute inset-0 opacity-25 blur-3xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(20,184,166,0.3), transparent 70%)',
              }}
            />
            <div className="relative flex items-end gap-4">
              <div
                className="relative hidden w-[190px] translate-y-8 overflow-hidden rounded-[34px] opacity-70 sm:block"
                style={{
                  background: 'linear-gradient(145deg, #0F2547, #071628)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div className="min-h-[380px] bg-[#0B1E3D] px-3 pb-4 pt-7">
                  <p className="mb-3 text-[9px] font-bold text-white">Spending Insights</p>
                  <div className="mb-3 flex justify-center">
                    <svg viewBox="0 0 100 100" className="h-20 w-20" aria-hidden="true">
                      <circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="14"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="none"
                        stroke="#A78BFA"
                        strokeWidth="14"
                        strokeDasharray="113 226"
                        strokeDashoffset="0"
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="none"
                        stroke="#14B8A6"
                        strokeWidth="14"
                        strokeDasharray="64 275"
                        strokeDashoffset="-113"
                        transform="rotate(-90 50 50)"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="36"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="14"
                        strokeDasharray="32 307"
                        strokeDashoffset="-177"
                        transform="rotate(-90 50 50)"
                      />
                      <text
                        x="50"
                        y="47"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.4)"
                        fontSize="5.5"
                        fontWeight="600"
                      >
                        SPENT
                      </text>
                      <text
                        x="50"
                        y="56"
                        textAnchor="middle"
                        fill="white"
                        fontSize="7.5"
                        fontWeight="800"
                      >
                        ₦163.4K
                      </text>
                    </svg>
                  </div>
                  {[
                    ['Shopping', '#A78BFA', '59%'],
                    ['Food', '#14B8A6', '18%'],
                    ['Transport', '#60A5FA', '13%'],
                  ].map(([l, c, p]) => (
                    <div key={l} className="mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full" style={{ background: c }} />
                        <p className="text-[7px] text-white/50">{l}</p>
                      </div>
                      <p className="text-[7px] font-bold" style={{ color: c }}>
                        {p}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="relative z-10 w-[210px] overflow-hidden rounded-[38px]"
                style={{
                  background: 'linear-gradient(145deg, #1a3a6b, #071628)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              >
                <div className="absolute left-1/2 top-3 z-10 h-3.5 w-14 -translate-x-1/2 rounded-full bg-navy-deep" />
                <div className="min-h-[420px] bg-[#0B1E3D] px-3.5 pb-4 pt-8">
                  <div className="mb-4 flex items-center gap-1.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal text-[8px] font-bold text-navy">
                      AO
                    </div>
                    <p className="text-[10px] font-semibold text-white">Adebayo</p>
                  </div>
                  <div
                    className="mb-3 rounded-xl p-3"
                    style={{
                      background: 'linear-gradient(145deg, #0F2547, #071628)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <p className="mb-0.5 text-[7px] uppercase tracking-wider text-white/35">
                      Total Balance
                    </p>
                    <p
                      className="text-xl font-extrabold text-white"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      ₦2,560,450.50
                    </p>
                    <p className="mt-0.5 text-[7px] text-teal">+12.6% from last month</p>
                    <div className="mt-2.5 flex gap-2">
                      <div className="flex h-6 flex-1 items-center justify-center rounded-lg bg-teal text-[7px] font-bold text-navy">
                        Send Money
                      </div>
                      <div className="flex h-6 flex-1 items-center justify-center rounded-lg bg-white/[0.08] text-[7px] font-semibold text-white/70">
                        Add Money
                      </div>
                    </div>
                  </div>
                  <p className="mb-2 text-[8px] font-bold text-white">Recent Transactions</p>
                  {[
                    { n: 'Netflix', a: '-₦4,500', c: '#EF4444' },
                    { n: 'Salary', a: '+₦450K', c: '#14B8A6' },
                    { n: 'Shoprite', a: '-₦12.5K', c: '#EF4444' },
                  ].map((t) => (
                    <div
                      key={t.n}
                      className="flex items-center justify-between border-b border-white/[0.05] py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-lg bg-white/[0.06]" />
                        <p className="text-[7px] text-white/70">{t.n}</p>
                      </div>
                      <p
                        className="text-[8px] font-bold"
                        style={{ color: t.c, fontVariantNumeric: 'tabular-nums' }}
                      >
                        {t.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal">Product</p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              Every naira,
              <br className="hidden sm:block" /> one screen.
            </h2>
            <p className="text-lg leading-relaxed text-white/50">
              Paylio pulls your income, transactions, and spending patterns into a single dashboard.
              Quick actions up front, full history one tap away.
            </p>
            <ul className="mt-1 flex flex-col gap-3.5">
              {bullets.map((item) => {
                const [title, desc] = item.split(' — ')
                return (
                  <li key={title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal/15">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#14B8A6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white">{title}</span>
                      <span className="text-sm text-white/40"> — {desc}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="mt-2 flex gap-3">
              <Link
                href="/demo/home"
                className="inline-flex h-11 items-center justify-center rounded-full bg-teal px-6 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
              >
                Get Started
              </Link>
              <Link
                href="/product"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] px-6 text-sm font-semibold text-white/65 transition-all hover:bg-white/[0.05] hover:text-white"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
