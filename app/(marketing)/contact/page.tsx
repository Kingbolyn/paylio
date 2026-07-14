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
        <path
          d="M3 8l9 6 9-6M3 8h18v12H3V8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Developer support',
    value: 'dev@paylio.app',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Portfolio and press',
    value: 'studio@apexcode.dev',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* Left: heading + channels */}
            <div className="pt-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
                Contact
              </div>
              <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight lg:text-6xl">
                Say something.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  We read everything.
                </span>
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-white/50">
                Whether you have a product question, a developer integration issue, or you want to
                talk about what Apex Code can build for you.
              </p>
              <div className="space-y-4">
                {channels.map((ch) => (
                  <div
                    key={ch.label}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-200 hover:border-teal/20"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-teal/20 bg-teal/10 text-teal">
                      {ch.icon}
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs text-white/35">{ch.label}</p>
                      <p className="text-sm font-semibold text-white/80">{ch.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form (static, no backend) */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
              <p className="mb-6 text-sm font-bold text-white/60">Send a message</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs text-white/35">First name</label>
                    <div className="flex h-11 items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-4">
                      <span className="text-sm text-white/20">Adebayo</span>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs text-white/35">Last name</label>
                    <div className="flex h-11 items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-4">
                      <span className="text-sm text-white/20">Okafor</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs text-white/35">Email address</label>
                  <div className="flex h-11 items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-4">
                    <span className="text-sm text-white/20">adebayo@example.com</span>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs text-white/35">Subject</label>
                  <div className="flex h-11 items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-4">
                    <span className="text-sm text-white/20">API integration question</span>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs text-white/35">Message</label>
                  <div className="h-28 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                    <span className="text-sm text-white/20">Type your message here...</span>
                  </div>
                </div>
                <div className="pt-1">
                  <div className="flex h-12 w-full cursor-default items-center justify-center rounded-xl border border-teal/25 bg-teal/20">
                    <span className="text-sm font-bold text-teal/60">Send Message</span>
                  </div>
                  <p className="mt-3 text-center text-xs text-white/20">
                    Form is static in this portfolio demo. Email us directly using the addresses
                    above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response time note */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: 'Response time', value: 'Under 24 hours' },
              { label: 'Developer support', value: 'Via GitHub Issues' },
              { label: 'Based in', value: 'Lagos, Nigeria' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center"
              >
                <p className="mb-2 text-xs text-white/30">{item.label}</p>
                <p className="text-base font-bold text-white/70">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
