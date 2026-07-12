import Link from 'next/link'
import { Fingerprint, Lock, Smartphone, BellDot } from 'lucide-react'

const features = [
  {
    Icon: Fingerprint,
    t: 'Biometric Authentication',
    d: 'Face ID and fingerprint — no passwords, no friction.',
    color: '#14B8A6',
  },
  {
    Icon: Lock,
    t: 'End-to-End Encryption',
    d: '256-bit SSL on every request. Verified, not marketed.',
    color: '#60A5FA',
  },
  {
    Icon: Smartphone,
    t: 'Device Management',
    d: 'See every session. Revoke access from any device, instantly.',
    color: '#A78BFA',
  },
  {
    Icon: BellDot,
    t: 'Configurable Alerts',
    d: 'Set your own threshold. Get notified when it matters, not always.',
    color: '#F59E0B',
  },
]

export default function SecuritySection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 10% 50%, rgba(20,184,166,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-teal">Security</p>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Security you can audit,
              <br />
              not just trust.
            </h2>
            <p className="text-lg leading-relaxed text-white/50">
              Paylio exposes what most banks hide. Your active devices, alert thresholds, and access
              controls are all visible and configurable in one screen.
            </p>
            <ul className="mt-1 flex flex-col gap-4">
              {features.map((p) => (
                <li key={p.t} className="flex items-start gap-4">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${p.color}18` }}
                  >
                    <p.Icon size={17} color={p.color} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{p.t}</p>
                    <p className="text-sm text-white/40">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/security"
              className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
            >
              See how it works
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-[280px] overflow-hidden rounded-[40px]"
              style={{
                background: 'linear-gradient(145deg, #0F2547, #071628)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
              }}
            >
              <div className="min-h-[460px] bg-[#0B1E3D] px-4 pb-6 pt-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">Security</p>
                    <p className="text-[10px] text-white/40">Your money, protected.</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal/15">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#14B8A6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                </div>
                <p className="mb-2 text-[8px] font-bold uppercase tracking-widest text-white/30">
                  Authentication
                </p>
                <div className="mb-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                  {[
                    ['Biometric Login', 'Face ID or fingerprint'],
                    ['2-Factor Auth', 'Extra login security'],
                    ['Transaction PIN', 'Required every transfer'],
                  ].map(([l, d]) => (
                    <div
                      key={l}
                      className="flex items-center justify-between border-b border-white/[0.05] px-3 py-2.5 last:border-0"
                    >
                      <div>
                        <p className="text-[8px] font-semibold text-white">{l}</p>
                        <p className="text-[7px] text-white/35">{d}</p>
                      </div>
                      <div className="flex h-4 w-8 items-center justify-end rounded-full bg-teal pr-0.5">
                        <div className="h-3 w-3 rounded-full bg-white" />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mb-2 text-[8px] font-bold uppercase tracking-widest text-white/30">
                  Active Devices
                </p>
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
                  {[
                    { n: 'iPhone 15 Pro', l: 'Lagos, Nigeria', cur: true },
                    { n: 'MacBook Pro', l: '2 hrs ago', cur: false },
                  ].map((d) => (
                    <div
                      key={d.n}
                      className="flex items-center justify-between border-b border-white/[0.05] px-3 py-2.5 last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-lg ${d.cur ? 'bg-teal/20' : 'bg-white/[0.06]'}`}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={d.cur ? '#14B8A6' : 'rgba(255,255,255,0.4)'}
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <rect x="5" y="2" width="14" height="20" rx="2" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[8px] font-semibold text-white">{d.n}</p>
                          <p className="text-[7px] text-white/35">{d.l}</p>
                        </div>
                      </div>
                      {d.cur ? (
                        <span className="rounded-full bg-teal/10 px-1.5 py-0.5 text-[7px] font-bold text-teal">
                          This device
                        </span>
                      ) : (
                        <button className="text-[7px] font-bold text-red-400">Revoke</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
