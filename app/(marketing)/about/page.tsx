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
    year: 'Q4 2026',
    label: 'Physical cards and business accounts',
    body: 'Physical card fulfilment and business account tools. The same calm principles, applied to teams and SMEs.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            About
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight lg:text-7xl">
            Built by people who were frustrated with{' '}
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              existing banking apps.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
            Paylio started as a question: what would a Nigerian fintech look like if it was built by
            designers and engineers who cared equally about how it worked and how it felt?
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-2xl border border-teal/15 bg-gradient-to-br from-teal/[0.07] to-transparent p-10 text-center lg:p-14">
            <p className="text-2xl font-black leading-tight tracking-tight text-white lg:text-3xl">
              &ldquo;Money should be simple to understand, fast to move, and completely within your
              control. That is the whole idea.&rdquo;
            </p>
            <p className="mt-6 text-sm text-white/35">Paylio founding principle</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              What we believe
            </p>
            <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
              Four principles. Every decision runs through them.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 transition-all duration-200 hover:border-teal/20"
              >
                <p className="mb-4 text-5xl font-black leading-none text-teal/10">0{i + 1}</p>
                <h3 className="mb-3 text-xl font-bold text-white">{v.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              How we got here
            </p>
            <h2 className="text-4xl font-black tracking-tight lg:text-5xl">The build, in order.</h2>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/[0.07]" />
            <div className="flex flex-col gap-12 pl-12">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative">
                  <div
                    className={`absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${i === 0 ? 'border-teal bg-teal/20' : i === 1 ? 'border-teal/60 bg-navy' : 'border-white/15 bg-navy'}`}
                  >
                    {i <= 1 && (
                      <div
                        className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-teal' : 'bg-teal/50'}`}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <span
                      className={`w-20 flex-shrink-0 text-sm font-black ${i <= 1 ? 'text-teal' : 'text-white/25'}`}
                    >
                      {item.year}
                    </span>
                    <div>
                      <p className="mb-1 text-base font-bold text-white">{item.label}</p>
                      <p className="text-sm leading-relaxed text-white/45">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio note */}
      <section className="border-t border-white/[0.05] py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/30">Note</p>
            <p className="text-sm leading-relaxed text-white/40">
              Paylio is a portfolio concept built by{' '}
              <Link
                href="https://kingbolyn.github.io"
                className="text-teal/70 transition-colors hover:text-teal"
              >
                Apex Code
              </Link>
              . It demonstrates product thinking, design execution, and full-stack engineering. It
              does not process real transactions or hold real funds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="mb-5 text-4xl font-black tracking-tight">See what we built.</h2>
          <p className="mb-10 text-white/45">The full product is interactive in the demo.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo/home"
              className="inline-flex h-12 items-center rounded-full bg-teal px-8 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
            >
              Open the Demo
            </Link>
            <Link
              href="/case-study"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              Read the Case Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
