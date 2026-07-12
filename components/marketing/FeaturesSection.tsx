import Link from 'next/link'
import { Landmark, ArrowLeftRight, BarChart3, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Banking',
    desc: 'View balances, track statements, and manage multiple accounts from one screen.',
    Icon: Landmark,
    color: 'rgba(20,184,166,0.1)',
    stroke: '#14B8A6',
    href: '/product',
  },
  {
    title: 'Transfers',
    desc: 'Send to any Nigerian bank in under ten seconds. No cut-off times, no intermediary delays.',
    Icon: ArrowLeftRight,
    color: 'rgba(96,165,250,0.1)',
    stroke: '#60A5FA',
    href: '/features',
  },
  {
    title: 'Insights',
    desc: 'Track and improve your spending. Visual breakdowns that make your money story clear.',
    Icon: BarChart3,
    color: 'rgba(139,92,246,0.1)',
    stroke: '#A78BFA',
    href: '/insights',
  },
  {
    title: 'Security',
    desc: 'Biometrics, 2FA, and real-time alerts. You set the thresholds — Paylio does the watching.',
    Icon: ShieldCheck,
    color: 'rgba(34,197,94,0.1)',
    stroke: '#22C55E',
    href: '/security',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-teal">Features</p>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Four things done right.
          </h2>
          <p className="text-lg leading-relaxed text-white/45">
            Paylio covers the ground most banking apps treat as afterthoughts — fast transfers,
            readable analytics, card-level controls, and security you can actually audit.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group relative flex flex-col gap-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-110"
                style={{ background: f.color }}
              >
                <f.Icon size={22} color={f.stroke} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1.5 text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{f.desc}</p>
              </div>
              <div
                className="mt-auto flex items-center gap-1 text-xs font-semibold"
                style={{ color: f.stroke }}
              >
                Learn more
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
