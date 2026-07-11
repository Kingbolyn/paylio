import Link from 'next/link'

export const metadata = {
  title: 'About — Paylio',
  description: 'The thinking behind Paylio and the team that built it.',
}

const values = [
  {
    title: 'Clarity first',
    body: 'Every decision in Paylio starts with the same question: does this make the user more or less certain about what is happening to their money? If the answer is less certain, we do not ship it.',
  },
  {
    title: 'Speed is respect',
    body: 'A 3-second transfer is not a technical feature. It is a statement that your time matters. We have never accepted "processing" as an acceptable state when the technology for instant exists.',
  },
  {
    title: 'Security without friction',
    body: 'Security that annoys people gets turned off. We built Paylio so that the most secure path is also the easiest one. Face ID is faster than a password. That is not an accident.',
  },
  {
    title: 'Design as function',
    body: 'Every visual choice is a functional one. If it does not help the user understand their money better, it does not belong in the interface. This is why Paylio looks the way it does.',
  },
]

const timeline = [
  {
    year: '2023',
    label: 'Concept and research',
    body: 'Started by identifying the three biggest friction points in Nigerian personal banking: slow transfers, no spending visibility, and no card control.',
  },
  {
    year: 'Early 2024',
    label: 'Foundation built',
    body: 'Design system, component library, and the five core app screens all shipped. First interactive prototype tested with 40+ users.',
  },
  {
    year: 'Mid 2024',
    label: 'Marketing site and public demo',
    body: 'Full public launch of the demo app and marketing website. Open to anyone who wants to experience the product without signing up.',
  },
  {
    year: 'Late 2024',
    label: 'Physical cards and business accounts',
    body: 'Physical card fulfilment and business account tools are next. The same principles, applied to teams and SMEs.',
  },
]

export default function AboutPage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            About
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6 max-w-4xl mx-auto">
            Built by people who were frustrated with{' '}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              existing banking apps.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Paylio started as a question: what would a Nigerian fintech look like if it was built by designers and engineers who cared equally about how it worked and how it felt?
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="rounded-2xl border border-teal/15 bg-gradient-to-br from-teal/[0.07] to-transparent p-10 lg:p-14 text-center">
            <p className="text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">
              &ldquo;Money should be simple to understand, fast to move, and completely within your control. That is the whole idea.&rdquo;
            </p>
            <p className="text-sm text-white/35 mt-6">Paylio founding principle</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">What we believe</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">Four principles. Every decision runs through them.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-teal/20 p-8 transition-all duration-200">
                <p className="text-5xl font-black text-teal/10 leading-none mb-4">0{i + 1}</p>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-teal/70 uppercase tracking-[0.15em] mb-3">How we got here</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight">The build, in order.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.07]" />
            <div className="flex flex-col gap-12 pl-12">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative">
                  <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-teal bg-teal/20' : i === 1 ? 'border-teal/60 bg-navy' : 'border-white/15 bg-navy'}`}>
                    {i <= 1 && <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-teal' : 'bg-teal/50'}`} />}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <span className={`text-sm font-black flex-shrink-0 w-20 ${i <= 1 ? 'text-teal' : 'text-white/25'}`}>{item.year}</span>
                    <div>
                      <p className="text-base font-bold text-white mb-1">{item.label}</p>
                      <p className="text-sm text-white/45 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio note */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 text-center">
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.15em] mb-3">Note</p>
            <p className="text-sm text-white/40 leading-relaxed">
              Paylio is a portfolio concept built by{' '}
              <Link href="https://paylio-taupe.vercel.app" className="text-teal/70 hover:text-teal transition-colors">Apex Code</Link>
              . It demonstrates product thinking, design execution, and full-stack engineering. It does not process real transactions or hold real funds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-4xl font-black tracking-tight mb-5">See what we built.</h2>
          <p className="text-white/45 mb-10">The full product is interactive in the demo.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo/home"
              className="inline-flex items-center h-12 px-8 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
            >
              Open the Demo
            </Link>
            <Link
              href="/case-study"
              className="inline-flex items-center h-12 px-8 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
            >
              Read the Case Study
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
