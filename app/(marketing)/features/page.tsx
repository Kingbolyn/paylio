import Link from 'next/link'

export const metadata = {
  title: 'Features — Paylio',
  description: 'Every feature in Paylio, explained in full.',
}

const features = [
  {
    tag: 'Transfers',
    headline: 'Send money like you send a text.',
    body: 'Type a name or account number, confirm with Face ID, and it lands in under 3 seconds. Paylio routes every transfer through real-time NIBSS rails so there are no delays, no pending states, and no mystery.',
    points: [
      'Send to any Nigerian bank, zero delay',
      'Biometric confirmation on every transfer',
      'Full transfer history with receipts',
      'Schedule future-dated payments',
    ],
    mockup: 'transfer',
  },
  {
    tag: 'Insights',
    headline: 'Know where your money actually goes.',
    body: 'Every transaction is automatically categorised. Food, transport, bills, subscriptions. You see a weekly breakdown the moment you open the app, no manual entry, no spreadsheets.',
    points: [
      'Auto-categorised spending from day one',
      'Weekly and monthly trend charts',
      'Merchant-level spend breakdown',
      'Budget alerts before you overspend',
    ],
    mockup: 'insights',
  },
  {
    tag: 'Cards',
    headline: 'A card for every situation.',
    body: 'Create virtual cards instantly for online shopping, subscriptions, or any merchant you do not fully trust. Freeze, unfreeze, or delete any card in one tap. Physical cards ship to your door and work on any Mastercard terminal globally.',
    points: [
      'Unlimited virtual cards, instant creation',
      'Per-card spending limits and controls',
      'Physical card with worldwide acceptance',
      'One-tap freeze without closing your account',
    ],
    mockup: 'cards',
  },
  {
    tag: 'Security',
    headline: 'Secured at every layer.',
    body: "Paylio uses the same encryption standard as Nigeria's tier-1 banks. Every session is monitored for anomalies. If something looks off, the account locks before a transaction can complete.",
    points: [
      '256-bit AES encryption end-to-end',
      'Real-time fraud detection on every transaction',
      'Biometric authentication, no SMS OTPs to intercept',
      'Instant full account lock from the app',
    ],
    mockup: 'security',
  },
]

const PhoneMockup = ({ type }: { type: string }) => {
  if (type === 'transfer')
    return (
      <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[28px] border border-white/10 bg-navy-deep shadow-2xl">
        <div className="flex h-6 items-center justify-center bg-navy-deep">
          <div className="h-1.5 w-16 rounded-full bg-white/10" />
        </div>
        <div className="px-4 pb-6 pt-2">
          <p className="mb-3 text-[11px] font-medium text-white/40">Send Money</p>
          <div className="mb-3 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.05] p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/20 text-[10px] font-bold text-teal">
              AO
            </div>
            <div>
              <p className="text-xs font-medium text-white/80">Adebayo Okafor</p>
              <p className="text-[10px] text-white/35">Zenith Bank • 0112345678</p>
            </div>
          </div>
          <div className="mb-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-3">
            <p className="mb-1 text-[10px] text-white/35">Amount</p>
            <p
              className="text-2xl font-black tracking-tight text-white"
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              ₦25,000
            </p>
          </div>
          <div className="flex h-10 w-full items-center justify-center rounded-xl bg-teal">
            <p className="text-[11px] font-bold text-navy">Confirm with Face ID</p>
          </div>
        </div>
      </div>
    )

  if (type === 'insights')
    return (
      <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[28px] border border-white/10 bg-navy-deep shadow-2xl">
        <div className="flex h-6 items-center justify-center bg-navy-deep">
          <div className="h-1.5 w-16 rounded-full bg-white/10" />
        </div>
        <div className="px-4 pb-6 pt-2">
          <p className="mb-3 text-[11px] font-medium text-white/40">June Overview</p>
          <div className="mb-3 flex h-20 items-end justify-center gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-teal/20" style={{ height: `${h}%` }}>
                {i === 5 && <div className="h-full w-full rounded-t bg-teal" />}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              { cat: 'Food & Dining', pct: 42, color: 'bg-teal' },
              { cat: 'Transport', pct: 28, color: 'bg-blue-400' },
              { cat: 'Bills', pct: 18, color: 'bg-purple-400' },
            ].map((c) => (
              <div key={c.cat}>
                <div className="mb-0.5 flex items-center justify-between">
                  <p className="text-[10px] text-white/50">{c.cat}</p>
                  <p className="text-[10px] text-white/50">{c.pct}%</p>
                </div>
                <div className="h-1 rounded-full bg-white/[0.07]">
                  <div
                    className={`h-full rounded-full ${c.color}`}
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )

  if (type === 'cards')
    return (
      <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[28px] border border-white/10 bg-navy-deep shadow-2xl">
        <div className="flex h-6 items-center justify-center bg-navy-deep">
          <div className="h-1.5 w-16 rounded-full bg-white/10" />
        </div>
        <div className="px-4 pb-6 pt-2">
          <p className="mb-3 text-[11px] font-medium text-white/40">My Cards</p>
          <div className="relative mb-3 overflow-hidden rounded-xl bg-gradient-to-br from-teal to-teal/60 p-4">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/[0.08]" />
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-wide text-white/60">
              Virtual Card
            </p>
            <p className="mb-2 text-xs font-bold tracking-widest text-white">•••• •••• •••• 4291</p>
            <p className="text-[10px] text-white/70">Adebayo O. · 09/27</p>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.04] p-3">
            <div>
              <p className="text-[10px] text-white/40">Shopping Card</p>
              <p className="text-xs font-medium text-white/70">Limit: ₦50,000</p>
            </div>
            <div className="relative h-4 w-8 rounded-full border border-teal/40 bg-teal/30">
              <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-teal" />
            </div>
          </div>
        </div>
      </div>
    )

  return (
    <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[28px] border border-white/10 bg-navy-deep shadow-2xl">
      <div className="flex h-6 items-center justify-center bg-navy-deep">
        <div className="h-1.5 w-16 rounded-full bg-white/10" />
      </div>
      <div className="px-4 pb-6 pt-2">
        <p className="mb-3 text-[11px] font-medium text-white/40">Security</p>
        {[
          { label: 'Face ID Lock', on: true },
          { label: 'Transaction Alerts', on: true },
          { label: 'Fraud Detection', on: true },
          { label: 'Device Trust', on: false },
        ].map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between border-b border-white/[0.05] py-2.5 last:border-0"
          >
            <p className="text-xs text-white/70">{r.label}</p>
            <div
              className={`relative h-4 w-8 rounded-full transition-colors ${r.on ? 'bg-teal' : 'bg-white/10'}`}
            >
              <div
                className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${r.on ? 'right-0.5' : 'left-0.5'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.12),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            Features
          </div>
          <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight lg:text-7xl">
            Built for the way{' '}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              you actually use money.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
            Four core features, each built from scratch to remove friction. No compromises.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      {features.map((feature, i) => (
        <section key={feature.tag} className="border-t border-white/[0.05] py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div
              className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24 ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
                  {feature.tag}
                </p>
                <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                  {feature.headline}
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-white/50">{feature.body}</p>
                <ul className="mb-10 space-y-3">
                  {feature.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-teal/25 bg-teal/15">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="#00C8AA"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-white/60">{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo/home"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
                >
                  See it in the demo
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

              {/* Mockup */}
              <div
                className={`flex justify-center ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative">
                  <div className="absolute -inset-12 rounded-full bg-teal/[0.06] blur-3xl" />
                  <div className="relative">
                    <PhoneMockup type={feature.mockup} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="mb-5 text-4xl font-black tracking-tight lg:text-5xl">
            All of this, in one app.
          </h2>
          <p className="mb-10 text-lg text-white/45">
            Open the demo and walk through every feature yourself.
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
