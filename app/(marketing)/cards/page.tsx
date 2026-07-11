import Link from 'next/link'

export const metadata = {
  title: 'Cards — Paylio',
  description: 'Virtual and physical cards built for total control.',
}

const cardFeatures = [
  {
    title: 'Create a virtual card in seconds',
    body: 'Name it, set a limit, and start using it. Virtual cards work everywhere online that accepts Mastercard, and they keep your real account number completely hidden.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Per-card spending limits',
    body: 'Cap what each card can spend per day, per transaction, or in total. Create a card for your Netflix subscription that literally cannot be used anywhere else.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    title: 'Freeze any card instantly',
    body: 'See a charge you do not recognise? Freeze that card in one tap. Nothing else is affected. Your account stays live, every other card keeps working.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 7l10 5 10-5M2 17l10-5 10 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Physical card, worldwide',
    body: 'Order a physical Mastercard from the app. Ships to any address in Nigeria. Works at ATMs and POS terminals in over 150 countries.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
]

export default function CardsPage() {
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
                Cards
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6">
                Control every card.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  From one place.
                </span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                Virtual cards for online spending. A physical card for everywhere else. Each one fully controllable from the app, no bank branch required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/demo/cards"
                  className="inline-flex items-center h-12 px-7 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
                >
                  See the Cards Screen
                </Link>
                <Link
                  href="/demo/home"
                  className="inline-flex items-center h-12 px-7 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
                >
                  Try the Demo
                </Link>
              </div>
            </div>

            {/* Card stack visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-64 w-80">
                {/* Card 3 (back) */}
                <div className="absolute top-8 left-8 w-64 h-40 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-900/40 border border-white/10 shadow-xl transform rotate-6" />
                {/* Card 2 (mid) */}
                <div className="absolute top-4 left-4 w-64 h-40 rounded-2xl bg-gradient-to-br from-navy-mid to-navy-deep border border-white/10 shadow-xl transform rotate-3" />
                {/* Card 1 (front) */}
                <div className="absolute top-0 left-0 w-64 h-40 rounded-2xl bg-gradient-to-br from-teal/70 to-teal/30 border border-teal/30 shadow-2xl shadow-teal/20 overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/[0.07]" />
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/[0.05]" />
                  <div className="relative p-5 h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-6 rounded bg-white/20" />
                      <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
                        <circle cx="10" cy="9" r="9" fill="white" fillOpacity="0.3"/>
                        <circle cx="18" cy="9" r="9" fill="white" fillOpacity="0.3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/80 tracking-[0.2em] mb-1">
                        •••• •••• •••• 4291
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-white/50">Adebayo Okafor</p>
                        <p className="text-xs text-white/50">09/27</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">What you get</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
              Cards built around control.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-teal/20 hover:bg-white/[0.04] p-8 transition-all duration-200">
                <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: virtual vs physical */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Virtual vs Physical</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: 'Virtual Card',
                badge: 'Instant',
                color: 'border-teal/20 bg-teal/[0.04]',
                badgeColor: 'bg-teal/15 text-teal',
                points: [
                  'Ready in under 10 seconds',
                  'Unique number per card, real account hidden',
                  'Set a spending cap on creation',
                  'Delete and replace at any time',
                  'Works on any online Mastercard merchant',
                ],
              },
              {
                type: 'Physical Card',
                badge: 'Ships to you',
                color: 'border-white/[0.08] bg-white/[0.02]',
                badgeColor: 'bg-white/10 text-white/50',
                points: [
                  'Ships to any Nigerian address',
                  'Works at ATMs globally',
                  'Contactless NFC payments',
                  'Freeze from the app without cutting the card',
                  'Linked directly to your Paylio balance',
                ],
              },
            ].map((card) => (
              <div key={card.type} className={`rounded-2xl border ${card.color} p-8`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-white">{card.type}</h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${card.badgeColor}`}>{card.badge}</span>
                </div>
                <ul className="space-y-3">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-teal/15 border border-teal/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#00C8AA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-white/55">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-5">
            Your first virtual card takes 10 seconds.
          </h2>
          <p className="text-white/45 mb-10">Try it now in the demo. No signup, no real card required.</p>
          <Link
            href="/demo/cards"
            className="inline-flex items-center h-12 px-8 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
          >
            Open the Cards Screen
          </Link>
        </div>
      </section>

    </div>
  )
}
