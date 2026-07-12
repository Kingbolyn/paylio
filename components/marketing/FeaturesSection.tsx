import Link from 'next/link'
import { Landmark, ArrowLeftRight, BarChart3, ShieldCheck } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.14em]"
            style={{ color: '#2DD4BF' }}
          >
            What&apos;s inside
          </p>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Four things. Done right.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            No bloat. No 47 features you&apos;ll never use. Just the four things that actually
            matter when money&apos;s involved.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Banking — wide */}
          <Link
            href="/product"
            className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-[1.015] lg:col-span-2"
            style={{
              background:
                'linear-gradient(135deg, rgba(20,184,166,0.09) 0%, rgba(20,184,166,0.04) 100%)',
              border: '1px solid rgba(20,184,166,0.15)',
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse at 20% 20%, rgba(20,184,166,0.07) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: 'rgba(20,184,166,0.12)',
                    boxShadow: '0 0 24px rgba(20,184,166,0.2)',
                  }}
                >
                  <Landmark size={22} color="#2DD4BF" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">Banking</h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '300px' }}
                  >
                    Your balance, statements, and multiple accounts on one screen. No switching
                    apps, no logging in twice.
                  </p>
                </div>
              </div>
              {/* Mini balance widget */}
              <div
                className="hidden shrink-0 rounded-2xl p-4 sm:block"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  minWidth: '152px',
                }}
              >
                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  Balance
                </p>
                <p
                  className="mb-0.5 text-2xl font-extrabold text-white"
                  style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}
                >
                  ₦487K
                </p>
                <p className="text-xs font-semibold" style={{ color: '#2DD4BF' }}>
                  +12.6% this month
                </p>
              </div>
            </div>
            <div
              className="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: '#14B8A6' }}
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

          {/* Security — tall (row-span-2) */}
          <Link
            href="/security"
            className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-[1.015] lg:row-span-2"
            style={{
              background:
                'linear-gradient(160deg, rgba(124,58,237,0.1) 0%, rgba(217,70,239,0.06) 100%)',
              border: '1px solid rgba(124,58,237,0.2)',
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 20%, rgba(124,58,237,0.09) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 flex h-full flex-col gap-5">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(124,58,237,0.15)',
                  boxShadow: '0 0 24px rgba(124,58,237,0.25)',
                }}
              >
                <ShieldCheck size={22} color="#A78BFA" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">Security</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Biometrics, 2FA, and real-time alerts. You set the thresholds — Paylio watches.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  'Biometric login',
                  '2-factor auth',
                  'Active device list',
                  'Configurable alerts',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: '#A78BFA', boxShadow: '0 0 6px #A78BFA' }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-auto flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: '#A78BFA' }}
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
            </div>
          </Link>

          {/* Transfers */}
          <Link
            href="/features"
            className="group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:scale-[1.015]"
            style={{
              background:
                'linear-gradient(135deg, rgba(96,165,250,0.08) 0%, rgba(96,165,250,0.03) 100%)',
              border: '1px solid rgba(96,165,250,0.15)',
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse at 80% 80%, rgba(96,165,250,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 flex flex-col gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(96,165,250,0.12)',
                  boxShadow: '0 0 24px rgba(96,165,250,0.2)',
                }}
              >
                <ArrowLeftRight size={22} color="#60A5FA" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1.5 text-base font-bold text-white">Transfers</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Any Nigerian bank. Under ten seconds. No cut-off times.
                </p>
              </div>
              <div
                className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: '#60A5FA' }}
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
            </div>
          </Link>

          {/* Insights */}
          <Link
            href="/insights"
            className="group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:scale-[1.015]"
            style={{
              background:
                'linear-gradient(135deg, rgba(217,70,239,0.08) 0%, rgba(217,70,239,0.03) 100%)',
              border: '1px solid rgba(217,70,239,0.15)',
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(ellipse at 20% 80%, rgba(217,70,239,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 flex flex-col gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: 'rgba(217,70,239,0.12)',
                  boxShadow: '0 0 24px rgba(217,70,239,0.2)',
                }}
              >
                <BarChart3 size={22} color="#E879F9" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1.5 text-base font-bold text-white">Insights</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Category charts updated after every transaction. Know exactly where it&apos;s
                  going.
                </p>
              </div>
              <div
                className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: '#E879F9' }}
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
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
