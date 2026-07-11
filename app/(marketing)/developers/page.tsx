import Link from 'next/link'

export const metadata = {
  title: 'Developers — Paylio',
  description: 'Build payments into your product with the Paylio API.',
}

const endpoints = [
  { method: 'POST', path: '/v1/transfers', desc: 'Initiate a bank transfer' },
  { method: 'GET',  path: '/v1/transactions', desc: 'List account transactions' },
  { method: 'POST', path: '/v1/cards/virtual', desc: 'Create a virtual card' },
  { method: 'GET',  path: '/v1/accounts/:id', desc: 'Retrieve account details' },
  { method: 'POST', path: '/v1/webhooks', desc: 'Register a webhook endpoint' },
  { method: 'GET',  path: '/v1/balance', desc: 'Get real-time balance' },
]

const sdks = [
  { name: 'Node.js', icon: '⬡', install: 'npm install @paylio/node' },
  { name: 'Python', icon: '🐍', install: 'pip install paylio' },
  { name: 'Go', icon: '◈', install: 'go get github.com/paylio/go' },
  { name: 'PHP', icon: '🐘', install: 'composer require paylio/paylio-php' },
]

export default function DevelopersPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                Developers
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6">
                Payments in your product.{' '}
                <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                  A few lines of code.
                </span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
                The Paylio API is RESTful, predictable, and built for developers who value clarity over clever. One SDK, full coverage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#sdks"
                  className="inline-flex items-center h-11 px-6 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
                >
                  Get the SDK
                </Link>
                <Link
                  href="#sandbox"
                  className="inline-flex items-center h-11 px-6 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
                >
                  Try the Sandbox
                </Link>
              </div>
            </div>

            {/* Code sample */}
            <div className="rounded-2xl border border-white/[0.07] bg-[#0d1117] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-[#161b22]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-2 text-xs text-white/25">transfer.js</span>
              </div>
              <pre className="p-5 text-xs leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span>
                  <span className="text-white"> paylio </span>
                  <span className="text-purple-400">=</span>
                  <span className="text-white"> </span>
                  <span className="text-blue-400">require</span>
                  <span className="text-white">(</span>
                  <span className="text-green-400">&apos;@paylio/node&apos;</span>
                  <span className="text-white">){'\n'}</span>
                  <span className="text-white">{'\n'}</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-white"> client </span>
                  <span className="text-purple-400">=</span>
                  <span className="text-white"> </span>
                  <span className="text-blue-400">new</span>
                  <span className="text-white"> paylio.</span>
                  <span className="text-yellow-400">Client</span>
                  <span className="text-white">({'\n'}</span>
                  <span className="text-white">  apiKey: </span>
                  <span className="text-green-400">process.env.PAYLIO_KEY{'\n'}</span>
                  <span className="text-white">{'}'}{')'}{'\n'}{'\n'}</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-white"> transfer </span>
                  <span className="text-purple-400">=</span>
                  <span className="text-blue-400"> await</span>
                  <span className="text-white"> client.transfers.</span>
                  <span className="text-yellow-400">create</span>
                  <span className="text-white">({'\n'}</span>
                  <span className="text-white">  amount: </span>
                  <span className="text-orange-400">2500000</span>
                  <span className="text-white/40">, {/* ₦25,000 in kobo */}{'\n'}</span>
                  <span className="text-white">  currency: </span>
                  <span className="text-green-400">&apos;NGN&apos;</span>
                  <span className="text-white">,{'\n'}</span>
                  <span className="text-white">  recipient: {'{'}accountNumber, bankCode{'}'},{'\n'}</span>
                  <span className="text-white">  reference: </span>
                  <span className="text-green-400">&apos;txn_01J9X4...&apos;{'\n'}</span>
                  <span className="text-white">{'}'}{')'}{'\n'}{'\n'}</span>
                  <span className="text-white/40">// ✓ transfer.status === &apos;success&apos;{'\n'}</span>
                  <span className="text-white/40">// ✓ transfer.completedAt: &apos;2024-06-23T...&apos;</span>
                </code>
              </pre>
            </div>

          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">API Reference</p>
            <h2 className="text-4xl font-black tracking-tight">Core endpoints</h2>
          </div>
          <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
            {endpoints.map((ep, i) => (
              <div
                key={ep.path}
                className={`flex flex-col sm:flex-row sm:items-center gap-3 p-5 hover:bg-white/[0.02] transition-colors ${i < endpoints.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
              >
                <span className={`text-xs font-black px-2.5 py-1 rounded-md w-14 text-center flex-shrink-0 ${ep.method === 'POST' ? 'bg-teal/15 text-teal' : 'bg-blue-400/15 text-blue-400'}`}>
                  {ep.method}
                </span>
                <code className="text-sm font-mono text-white/80 flex-1">{ep.path}</code>
                <p className="text-sm text-white/35">{ep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section id="sdks" className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">SDKs</p>
            <h2 className="text-4xl font-black tracking-tight">Start in your language of choice.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdks.map((sdk) => (
              <div key={sdk.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-teal/20 p-6 transition-all duration-200">
                <p className="text-3xl mb-3">{sdk.icon}</p>
                <p className="text-base font-bold text-white mb-3">{sdk.name}</p>
                <code className="text-xs text-teal/70 bg-teal/[0.07] px-2 py-1 rounded">{sdk.install}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sandbox */}
      <section id="sandbox" className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-4">Sandbox</p>
              <h2 className="text-4xl font-black tracking-tight mb-5">
                Build and test with no real money involved.
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                The sandbox environment mirrors production exactly. Every endpoint, every webhook, every error code. Flip one environment variable when you are ready to go live.
              </p>
              <ul className="space-y-3">
                {[
                  'Full API parity with production',
                  'Pre-loaded test accounts and recipients',
                  'Trigger any transaction status (pending, success, failed)',
                  'Webhook delivery with replay and inspection',
                ].map((pt) => (
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
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-[#0d1117] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-[#161b22]">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="ml-2 text-xs text-white/25">.env</span>
              </div>
              <pre className="p-5 text-xs leading-relaxed">
                <code>
                  <span className="text-white/40"># Sandbox{'\n'}</span>
                  <span className="text-teal/70">PAYLIO_KEY</span>
                  <span className="text-white/50">=</span>
                  <span className="text-green-400">pk_test_4xK9m2...{'\n'}</span>
                  <span className="text-teal/70">PAYLIO_ENV</span>
                  <span className="text-white/50">=</span>
                  <span className="text-green-400">sandbox{'\n'}{'\n'}</span>
                  <span className="text-white/40"># Production{'\n'}</span>
                  <span className="text-teal/70">PAYLIO_KEY</span>
                  <span className="text-white/50">=</span>
                  <span className="text-green-400">pk_live_9mN3x7...{'\n'}</span>
                  <span className="text-teal/70">PAYLIO_ENV</span>
                  <span className="text-white/50">=</span>
                  <span className="text-green-400">production</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section id="webhooks" className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-4">Webhooks</p>
          <h2 className="text-4xl font-black tracking-tight mb-5">React to events in real time.</h2>
          <p className="text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
            Paylio sends a signed webhook to your endpoint the moment a transfer completes, a card is frozen, or a fraud flag is raised. No polling. No missed events.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              { event: 'transfer.success', desc: 'Fires when a transfer clears successfully' },
              { event: 'transfer.failed', desc: 'Fires when a transfer is declined or reversed' },
              { event: 'card.frozen', desc: 'Fires when a card is frozen by the user or the system' },
            ].map((w) => (
              <div key={w.event} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                <code className="text-xs text-teal font-mono block mb-2">{w.event}</code>
                <p className="text-xs text-white/40 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
