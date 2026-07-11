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
    body: 'Paylio uses the same encryption standard as Nigeria\'s tier-1 banks. Every session is monitored for anomalies. If something looks off, the account locks before a transaction can complete.',
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
  if (type === 'transfer') return (
    <div className="w-full max-w-[240px] mx-auto rounded-[28px] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl">
      <div className="h-6 bg-navy-deep flex items-center justify-center">
        <div className="w-16 h-1.5 rounded-full bg-white/10" />
      </div>
      <div className="px-4 pb-6 pt-2">
        <p className="text-[11px] text-white/40 mb-3 font-medium">Send Money</p>
        <div className="rounded-xl bg-white/[0.05] border border-white/[0.07] p-3 mb-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center text-[10px] font-bold text-teal">AO</div>
          <div>
            <p className="text-xs text-white/80 font-medium">Adebayo Okafor</p>
            <p className="text-[10px] text-white/35">Zenith Bank • 0112345678</p>
          </div>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3 mb-3">
          <p className="text-[10px] text-white/35 mb-1">Amount</p>
          <p className="text-2xl font-black text-white tracking-tight" style={{fontVariantNumeric:'tabular-nums'}}>₦25,000</p>
        </div>
        <div className="w-full h-10 rounded-xl bg-teal flex items-center justify-center">
          <p className="text-[11px] font-bold text-navy">Confirm with Face ID</p>
        </div>
      </div>
    </div>
  )

  if (type === 'insights') return (
    <div className="w-full max-w-[240px] mx-auto rounded-[28px] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl">
      <div className="h-6 bg-navy-deep flex items-center justify-center">
        <div className="w-16 h-1.5 rounded-full bg-white/10" />
      </div>
      <div className="px-4 pb-6 pt-2">
        <p className="text-[11px] text-white/40 mb-3 font-medium">June Overview</p>
        <div className="flex items-end justify-center gap-1.5 mb-3 h-20">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-teal/20" style={{height:`${h}%`}}>
              {i === 5 && <div className="w-full h-full rounded-t bg-teal" />}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { cat: 'Food & Dining', pct: 42, color: 'bg-teal' },
            { cat: 'Transport', pct: 28, color: 'bg-blue-400' },
            { cat: 'Bills', pct: 18, color: 'bg-purple-400' },
          ].map(c => (
            <div key={c.cat}>
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-[10px] text-white/50">{c.cat}</p>
                <p className="text-[10px] text-white/50">{c.pct}%</p>
              </div>
              <div className="h-1 rounded-full bg-white/[0.07]">
                <div className={`h-full rounded-full ${c.color}`} style={{width:`${c.pct}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  if (type === 'cards') return (
    <div className="w-full max-w-[240px] mx-auto rounded-[28px] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl">
      <div className="h-6 bg-navy-deep flex items-center justify-center">
        <div className="w-16 h-1.5 rounded-full bg-white/10" />
      </div>
      <div className="px-4 pb-6 pt-2">
        <p className="text-[11px] text-white/40 mb-3 font-medium">My Cards</p>
        <div className="rounded-xl bg-gradient-to-br from-teal to-teal/60 p-4 mb-3 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-white/[0.08]" />
          <p className="text-[9px] text-white/60 mb-3 font-semibold uppercase tracking-wide">Virtual Card</p>
          <p className="text-xs font-bold text-white tracking-widest mb-2">•••• •••• •••• 4291</p>
          <p className="text-[10px] text-white/70">Adebayo O. · 09/27</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-white/40">Shopping Card</p>
            <p className="text-xs text-white/70 font-medium">Limit: ₦50,000</p>
          </div>
          <div className="w-8 h-4 rounded-full bg-teal/30 border border-teal/40 relative">
            <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-teal" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-[240px] mx-auto rounded-[28px] border border-white/10 bg-navy-deep overflow-hidden shadow-2xl">
      <div className="h-6 bg-navy-deep flex items-center justify-center">
        <div className="w-16 h-1.5 rounded-full bg-white/10" />
      </div>
      <div className="px-4 pb-6 pt-2">
        <p className="text-[11px] text-white/40 mb-3 font-medium">Security</p>
        {[
          { label: 'Face ID Lock', on: true },
          { label: 'Transaction Alerts', on: true },
          { label: 'Fraud Detection', on: true },
          { label: 'Device Trust', on: false },
        ].map(r => (
          <div key={r.label} className="flex items-center justify-between py-2.5 border-b border-white/[0.05] last:border-0">
            <p className="text-xs text-white/70">{r.label}</p>
            <div className={`w-8 h-4 rounded-full relative transition-colors ${r.on ? 'bg-teal' : 'bg-white/10'}`}>
              <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${r.on ? 'right-0.5' : 'left-0.5'}`} />
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Features
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
            Built for the way{' '}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              you actually use money.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Four core features, each built from scratch to remove friction. No compromises.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      {features.map((feature, i) => (
        <section
          key={feature.tag}
          className="py-24 border-t border-white/[0.05]"
        >
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>

              {/* Text */}
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-4">{feature.tag}</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
                  {feature.headline}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">{feature.body}</p>
                <ul className="space-y-3 mb-10">
                  {feature.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#00C8AA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-white/60">{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo/home"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-light transition-colors"
                >
                  See it in the demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Mockup */}
              <div className={`flex justify-center ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative">
                  <div className="absolute -inset-12 bg-teal/[0.06] rounded-full blur-3xl" />
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
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-5">
            All of this, in one app.
          </h2>
          <p className="text-white/45 text-lg mb-10">
            Open the demo and walk through every feature yourself.
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
