import Link from 'next/link'

export const metadata = {
  title: 'Security — Paylio',
  description: 'How Paylio protects your money and your data.',
}

const layers = [
  {
    number: '01',
    title: 'Encryption at rest and in transit',
    body: 'Every byte stored on our servers is encrypted with AES-256. Every request between your phone and our infrastructure travels over TLS 1.3. There is no unencrypted path to your data.',
  },
  {
    number: '02',
    title: 'Biometric authentication',
    body: 'Paylio does not send SMS OTPs that can be intercepted. Every sensitive action, login, transfer, card creation, requires Face ID or fingerprint directly on your device. The biometric data never leaves your phone.',
  },
  {
    number: '03',
    title: 'Real-time fraud detection',
    body: 'Every transaction is scored against a behavioural model built from your normal patterns. An unusual amount, an unfamiliar device, an unexpected location. Any anomaly triggers a hold before money moves.',
  },
  {
    number: '04',
    title: 'Zero-trust session architecture',
    body: 'No session is trusted by default. Each request is verified against your device fingerprint, location, and session token simultaneously. A stolen session token without your device is worthless.',
  },
  {
    number: '05',
    title: 'Instant full account lock',
    body: 'One tap in Settings locks every card and blocks all outbound transfers immediately. No waiting, no support ticket. You can lock your account faster than a fraudster can complete a transaction.',
  },
  {
    number: '06',
    title: 'Trusted device management',
    body: 'See every device that has ever accessed your account. Remove any device you do not recognise with a single tap. New device logins always require re-verification, no exceptions.',
  },
]

const certBadges = [
  { label: 'AES-256', sub: 'Encryption standard' },
  { label: 'TLS 1.3', sub: 'Transport layer' },
  { label: 'PCI DSS', sub: 'Card data standard' },
  { label: 'ISO 27001', sub: 'Info security framework' },
]

export default function SecurityPage() {
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
                Security
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6">
                Your money is safe.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  We can prove it.
                </span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                Security is not a feature added on top of Paylio. It is the foundation every other feature is built on.
              </p>
              <Link
                href="/demo/home"
                className="inline-flex items-center h-12 px-7 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
              >
                See the Security Screen
              </Link>
            </div>

            {/* Visual: layered shield */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full border border-teal/10 animate-ping" style={{animationDuration:'3s'}} />
                <div className="absolute inset-6 rounded-full border border-teal/15" />
                <div className="absolute inset-12 rounded-full border border-teal/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-teal/10 border border-teal/25 flex items-center justify-center backdrop-blur-sm">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z" fill="rgba(0,200,170,0.15)" stroke="#00C8AA" strokeWidth="1.5"/>
                      <path d="M9 12l2 2.5 4-4.5" stroke="#00C8AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                {/* Orbiting dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-teal/40"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`,
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certification badges */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certBadges.map((b) => (
              <div key={b.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 text-center">
                <p className="text-2xl font-black text-teal mb-1">{b.label}</p>
                <p className="text-xs text-white/35">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security layers */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">Six layers of protection</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
              Security that goes all the way down.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {layers.map((layer) => (
              <div key={layer.number} className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-teal/20 hover:bg-white/[0.04] p-7 transition-all duration-200">
                <p className="text-4xl font-black text-teal/15 mb-4 leading-none">{layer.number}</p>
                <h3 className="text-base font-bold text-white mb-3">{layer.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{layer.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live app callout */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="rounded-2xl border border-teal/15 bg-gradient-to-br from-teal/[0.07] to-transparent p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-4">In the demo</p>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-4">
                The Security screen is fully interactive.
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Toggle biometric lock, review connected devices, and trigger the account lock flow inside the demo app. Every control is wired up.
              </p>
              <Link
                href="/demo/security"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
              >
                Open Security Screen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Face ID Lock', status: 'Active', on: true },
                { label: 'Fraud Detection', status: 'Monitoring', on: true },
                { label: 'Transaction Alerts', status: 'Enabled', on: true },
                { label: 'Device Trust', status: '2 devices', on: false },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-xs text-white/60 leading-tight">{item.label}</p>
                    <div className={`w-6 h-3 rounded-full flex-shrink-0 relative ${item.on ? 'bg-teal' : 'bg-white/10'}`}>
                      <div className={`absolute top-0.5 w-2 h-2 rounded-full bg-white transition-all ${item.on ? 'right-0.5' : 'left-0.5'}`} />
                    </div>
                  </div>
                  <p className={`text-xs font-semibold ${item.on ? 'text-teal' : 'text-white/30'}`}>{item.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
