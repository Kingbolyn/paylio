import Link from 'next/link'

const apiFeatures = [
  ['REST API', 'Endpoints for every operation'],
  ['Webhooks', 'Real-time event notifications'],
  ['SDKs', 'Node, Python, Go, and more'],
  ['Sandbox', 'Test safely before going live'],
]

export default function DeveloperTeaser() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 90% 50%, rgba(96,165,250,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Code block */}
          <div
            className="overflow-hidden rounded-3xl"
            style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center gap-2 border-b border-white/[0.07] px-5 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <p className="ml-3 font-mono text-xs text-white/30">POST /api/v1/transfer</p>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed">
              <code>
                <span className="text-blue-400">const</span>{' '}
                <span className="text-white">response</span>{' '}
                <span className="text-white/50">=</span>{' '}
                <span className="text-blue-400">await</span>{' '}
                <span className="text-teal">paylio</span>
                <span className="text-white/50">.</span>
                <span className="text-yellow-300">transfer</span>
                <span className="text-white/50">{'({'}</span>
                {'\n'}
                {'  '}
                <span className="text-white/60">amount</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-orange-300">50000</span>
                <span className="text-white/50">,</span>
                {'\n'}
                {'  '}
                <span className="text-white/60">currency</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-green-300">&apos;NGN&apos;</span>
                <span className="text-white/50">,</span>
                {'\n'}
                {'  '}
                <span className="text-white/60">recipient</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-white/50">{'{'}</span>
                {'\n'}
                {'    '}
                <span className="text-white/60">bank</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-green-300">&apos;GTBank&apos;</span>
                <span className="text-white/50">,</span>
                {'\n'}
                {'    '}
                <span className="text-white/60">account</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-green-300">&apos;0123456789&apos;</span>
                {'\n'}
                {'  '}
                <span className="text-white/50">{'}'}</span>
                {'\n'}
                <span className="text-white/50">{'});'}</span>
                {'\n\n'}
                <span className="text-white/40">{'// Response'}</span>
                {'\n'}
                <span className="text-white/50">{'{'}</span>
                {'\n'}
                {'  '}
                <span className="text-white/60">status</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-green-300">&apos;success&apos;</span>
                <span className="text-white/50">,</span>
                {'\n'}
                {'  '}
                <span className="text-white/60">reference</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-green-300">&apos;PAY-2024-8A3F&apos;</span>
                <span className="text-white/50">,</span>
                {'\n'}
                {'  '}
                <span className="text-white/60">timestamp</span>
                <span className="text-white/50">:</span>{' '}
                <span className="text-orange-300">&apos;2024-06-21T09:14:00Z&apos;</span>
                {'\n'}
                <span className="text-white/50">{'}'}</span>
              </code>
            </pre>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-400">
              Developers
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Build with Paylio APIs
            </h2>
            <p className="text-lg leading-relaxed text-white/50">
              Powerful APIs and tools to help you build the future of finance. Clean documentation,
              sandbox testing, and SDKs for every stack.
            </p>
            <div className="mt-1 grid grid-cols-2 gap-4">
              {apiFeatures.map(([l, d]) => (
                <div key={l} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4">
                  <p className="mb-1 text-sm font-bold text-white">{l}</p>
                  <p className="text-xs text-white/40">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-1 flex gap-3">
              <Link
                href="/developers"
                className="inline-flex h-11 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/15 px-6 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500/25"
              >
                View Docs
              </Link>
              <Link
                href="/developers#sandbox"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] px-6 text-sm font-semibold text-white/65 transition-all hover:bg-white/[0.05] hover:text-white"
              >
                Get API Key
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
