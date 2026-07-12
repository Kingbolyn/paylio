import Link from 'next/link'

export const metadata = {
  title: 'Case Study — Paylio',
  description: 'How Paylio was designed and built, from first principles to final product.',
}

const phases = [
  {
    number: '01',
    phase: 'Problem definition',
    duration: '2 weeks',
    body: 'Started by mapping the failure modes of existing Nigerian banking apps. Three consistent problems emerged: transfer delays with no feedback, zero spending visibility, and card management locked behind bank branches. These became the product brief.',
    detail:
      'Ran informal interviews with 20 people across Lagos. Common pain: "I send money and I do not know if it went." The anxiety of uncertainty was as damaging as actual delays.',
  },
  {
    number: '02',
    phase: 'Design system',
    duration: '3 weeks',
    body: 'Built a dark, premium design system before touching a single screen. Navy palette, teal accent at exactly #14B8A6, Plus Jakarta Sans typeface. Established spacing, radius, shadow, and motion tokens. Then froze them.',
    detail:
      'The constraint of a locked design system forced every later decision to be deliberate. No one-off colours, no ad-hoc sizing. This is why the finished product feels visually consistent across every screen.',
  },
  {
    number: '03',
    phase: 'App screens',
    duration: '4 weeks',
    body: 'Five screens: Home, Transfer, Insights, Security, Cards. Each treated as a separate design and engineering problem. The transfer flow went through six iterations before the three-step model (recipient, amount, confirm) was settled.',
    detail:
      'The spending donut chart on Insights was rebuilt three times. The first two versions were accurate but did not communicate meaning at a glance. The third version added percentage labels and colour-coded legend, and that passed.',
  },
  {
    number: '04',
    phase: 'Marketing site',
    duration: '3 weeks',
    body: 'Nine-page full-width marketing site built after the app was complete. The brief: sell the product clearly, show the product honestly, never mislead about what Paylio actually is as a portfolio piece.',
    detail:
      'The phone mockups on the marketing site render the actual app components, not screenshots. This was a deliberate choice: the marketing site and the demo share one codebase, so they never go out of sync.',
  },
]

const techStack = [
  { label: 'Framework', value: 'Next.js 16 App Router' },
  { label: 'Language', value: 'TypeScript' },
  { label: 'Styling', value: 'Tailwind CSS v3.4' },
  { label: 'Runtime', value: 'React 19' },
  { label: 'Build', value: 'Turbopack' },
  { label: 'Routing', value: 'Route groups (marketing), (app)' },
  { label: 'Deploy target', value: 'Vercel' },
  { label: 'Custom tokens', value: 'navy, teal, shadow-teal' },
]

const metrics = [
  { value: '9', label: 'Marketing pages' },
  { value: '5', label: 'App screens' },
  { value: '40+', label: 'Components' },
  { value: '1', label: 'Codebase' },
]

export default function CaseStudyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,170,0.10),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Case Study
            </div>
            <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight lg:text-6xl">
              Building a fintech product from scratch.{' '}
              <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
                Every decision documented.
              </span>
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-white/50">
              Paylio took twelve weeks from problem definition to a live, interactive product. This
              is the process: what worked, what was rebuilt, and why.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/30">
              <span>Apex Code</span>
              <span>·</span>
              <span>2026</span>
              <span>·</span>
              <span>Fintech / Product Design / Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 text-center"
              >
                <p className="mb-1 text-4xl font-black text-teal">{m.value}</p>
                <p className="text-sm text-white/35">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build phases */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              The process
            </p>
            <h2 className="text-4xl font-black tracking-tight lg:text-5xl">
              Four phases, twelve weeks.
            </h2>
          </div>
          <div className="space-y-5">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 transition-all duration-200 hover:border-teal/20"
              >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr_1fr] lg:gap-10">
                  <div className="flex-shrink-0">
                    <p className="text-5xl font-black leading-none text-teal/10">{phase.number}</p>
                  </div>
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold capitalize text-white">{phase.phase}</h3>
                      <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/35">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-white/50">{phase.body}</p>
                  </div>
                  <div className="rounded-xl border border-teal/10 bg-teal/[0.04] p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-teal/50">
                      Key insight
                    </p>
                    <p className="text-sm leading-relaxed text-white/45">{phase.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
                Tech stack
              </p>
              <h2 className="mb-5 text-4xl font-black tracking-tight">
                One codebase, two experiences.
              </h2>
              <p className="mb-6 leading-relaxed text-white/50">
                The marketing site and the demo app live in the same Next.js project, separated by
                route groups. The app components are used directly inside the marketing mockups, so
                the two never go out of sync visually.
              </p>
              <p className="text-sm leading-relaxed text-white/40">
                Route group{' '}
                <code className="rounded bg-teal/[0.07] px-1.5 py-0.5 text-teal/70">
                  (marketing)
                </code>{' '}
                handles the nine full-width pages. Route group{' '}
                <code className="rounded bg-teal/[0.07] px-1.5 py-0.5 text-teal/70">
                  demo/(app)
                </code>{' '}
                constrains the mobile UI to a 430px shell with its own layout and bottom nav. Both
                share one design system and one globals.css.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.07]">
              {techStack.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-6 py-4 ${i < techStack.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
                >
                  <p className="text-sm text-white/35">{item.label}</p>
                  <p className="text-sm font-semibold text-white/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design decisions */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-teal/70">
              Design decisions
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Three choices that defined the result.
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                decision: 'Dark-first, always',
                why: 'Nigerian mobile users skew heavily toward AMOLED screens. A dark UI saves battery, reduces eye strain at night, and allowed the teal accent to carry significantly more visual weight than it would on light backgrounds.',
              },
              {
                decision: 'Tabular numerals on all monetary figures',
                why: 'Numbers in financial interfaces shift horizontally when they change value, which creates visual instability. Setting fontVariantNumeric to tabular-nums on every monetary display keeps columns aligned and eliminates jitter.',
              },
              {
                decision: 'Phone mockup renders real app components',
                why: 'On the landing page and features page, the phone mockup is not a static screenshot. It renders actual TSX components from the app. This meant one fewer artifact to maintain and zero risk of the marketing site showing an outdated UI.',
              },
            ].map((item) => (
              <div
                key={item.decision}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8"
              >
                <h3 className="mb-3 text-lg font-bold text-white">{item.decision}</h3>
                <p className="text-sm leading-relaxed text-white/45">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.05] py-24">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="mb-5 text-4xl font-black tracking-tight">See the finished product.</h2>
          <p className="mb-10 text-white/45">
            The demo is live. Every screen, every interaction, fully built.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/demo/home"
              className="inline-flex h-12 items-center rounded-full bg-teal px-8 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
            >
              Open the Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              Work with Apex Code
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
