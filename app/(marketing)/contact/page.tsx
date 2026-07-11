export const metadata = {
  title: 'Contact — Paylio',
  description: 'Get in touch with the Paylio team.',
}

const channels = [
  {
    label: 'General enquiries',
    value: 'hello@paylio.app',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l9 6 9-6M3 8h18v12H3V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Developer support',
    value: 'dev@paylio.app',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Portfolio and press',
    value: 'studio@apexcode.dev',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: heading + channels */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                Contact
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6">
                Say something.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  We read everything.
                </span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-10">
                Whether you have a product question, a developer integration issue, or you want to talk about what Apex Code can build for you.
              </p>
              <div className="space-y-4">
                {channels.map((ch) => (
                  <div key={ch.label} className="flex items-center gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-teal/20 transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal flex-shrink-0">
                      {ch.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/35 mb-0.5">{ch.label}</p>
                      <p className="text-sm font-semibold text-white/80">{ch.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form (static, no backend) */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
              <p className="text-sm font-bold text-white/60 mb-6">Send a message</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/35 mb-2">First name</label>
                    <div className="h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 flex items-center">
                      <span className="text-sm text-white/20">Adebayo</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-white/35 mb-2">Last name</label>
                    <div className="h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 flex items-center">
                      <span className="text-sm text-white/20">Okafor</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/35 mb-2">Email address</label>
                  <div className="h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 flex items-center">
                    <span className="text-sm text-white/20">adebayo@example.com</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/35 mb-2">Subject</label>
                  <div className="h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 flex items-center">
                    <span className="text-sm text-white/20">API integration question</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/35 mb-2">Message</label>
                  <div className="h-28 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-white/20">Type your message here...</span>
                  </div>
                </div>
                <div className="pt-1">
                  <div className="w-full h-12 rounded-xl bg-teal/20 border border-teal/25 flex items-center justify-center cursor-default">
                    <span className="text-sm font-bold text-teal/60">Send Message</span>
                  </div>
                  <p className="text-xs text-white/20 text-center mt-3">
                    Form is static in this portfolio demo. Email us directly using the addresses above.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Response time note */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Response time', value: 'Under 24 hours' },
              { label: 'Developer support', value: 'Via GitHub Issues' },
              { label: 'Based in', value: 'Lagos, Nigeria' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                <p className="text-xs text-white/30 mb-2">{item.label}</p>
                <p className="text-base font-bold text-white/70">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
