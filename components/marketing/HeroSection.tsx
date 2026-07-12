'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const GlobeSVG = dynamic(() => import('./GlobeSVG'), { ssr: false, loading: () => null })

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      style={{ background: '#08091A' }}
    >
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 left-[10%] h-[700px] w-[700px] animate-float rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.5) 0%, transparent 65%)',
            filter: 'blur(80px)',
            opacity: 0.28,
          }}
        />
        <div
          className="absolute right-[-10%] top-1/4 h-[600px] w-[600px] animate-float-slow rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.65) 0%, transparent 65%)',
            filter: 'blur(80px)',
            opacity: 0.22,
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[35%] h-[500px] w-[500px] animate-float-delayed rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(217,70,239,0.55) 0%, transparent 65%)',
            filter: 'blur(100px)',
            opacity: 0.18,
          }}
        />
      </div>

      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0" style={{ opacity: 0.025 }} />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.022,
        }}
      />

      <GlobeSVG />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-8 lg:py-0">
          {/* Copy */}
          <div className="flex max-w-xl flex-col gap-7">
            <div
              className="inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(20,184,166,0.08)',
                border: '1px solid rgba(20,184,166,0.2)',
                color: '#2DD4BF',
              }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Demo live — No account needed
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              You move fast.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF 0%, #A78BFA 55%, #E879F9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your money should too.
              </span>
            </h1>

            <p
              className="max-w-md text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Instant transfers to any Nigerian bank. Spending analytics that actually make sense.
              Card controls you can audit. Built for the way money moves in 2025.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo/home"
                className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-bold text-navy transition-all duration-150 hover:scale-[1.03] active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF, #14B8A6)',
                  boxShadow: '0 4px 24px rgba(20,184,166,0.4), 0 0 0 1px rgba(20,184,166,0.15)',
                }}
              >
                Open the Demo
              </Link>
              <Link
                href="/product"
                className="inline-flex h-12 items-center gap-2 rounded-full border px-6 text-sm font-semibold transition-all duration-150 hover:bg-white/[0.06] hover:text-white"
                style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
              >
                Explore Product
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {(['#14B8A6', '#A78BFA', '#D946EF', '#60A5FA'] as const).map((c, i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2"
                    style={{
                      background: `radial-gradient(circle at 35% 35%, ${c}dd, ${c}55)`,
                      borderColor: '#08091A',
                    }}
                  />
                ))}
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <span className="font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  10,000+
                </span>{' '}
                already using Paylio
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to top, #0B1E3D, transparent)' }}
      />
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 scale-90 animate-glow-pulse rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(20,184,166,0.2) 0%, rgba(124,58,237,0.15) 50%, transparent 70%)',
        }}
      />
      <div
        className="relative w-[260px] overflow-hidden rounded-[44px] sm:w-[300px]"
        style={{
          background: 'linear-gradient(145deg, #1a3a6b, #071628)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <div
          className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full"
          style={{ background: '#050914' }}
        />
        <div className="min-h-[540px] bg-[#0B1E3D] px-4 pb-4 pt-10">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold"
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF, #A78BFA)',
                  color: '#071628',
                }}
              >
                AO
              </div>
              <div>
                <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Good afternoon
                </p>
                <p className="text-[11px] font-bold text-white">Adebayo</p>
              </div>
            </div>
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
          </div>

          {/* Balance card */}
          <div
            className="mb-4 rounded-2xl p-4"
            style={{
              background: 'linear-gradient(145deg, rgba(20,184,166,0.07), rgba(124,58,237,0.05))',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p
              className="mb-1 text-[8px] font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Available Balance
            </p>
            <p
              className="mb-1 text-2xl font-extrabold text-white"
              style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}
            >
              ₦487,350.00
            </p>
            <p className="mb-3 text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Main Account ••••6789
            </p>
            <div className="flex gap-4">
              {[
                { label: 'Income', amount: '₦770.0K', color: '#14B8A6', dir: 'up' },
                { label: 'Spent', amount: '₦163.4K', color: '#EF4444', dir: 'down' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-1">
                  <div
                    className="flex h-4 w-4 items-center justify-center rounded-full"
                    style={{ background: `${s.color}22` }}
                  >
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={s.color}
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      {s.dir === 'up' ? (
                        <path d="M12 19V5M5 12l7-7 7 7" />
                      ) : (
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[7px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {s.label}
                    </p>
                    <p
                      className="text-[10px] font-bold"
                      style={{ color: s.color, fontVariantNumeric: 'tabular-nums' }}
                    >
                      {s.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="mb-4 grid grid-cols-4 gap-2">
            {[
              { label: 'Send', bg: 'rgba(20,184,166,0.12)' },
              { label: 'Receive', bg: 'rgba(124,58,237,0.12)' },
              { label: 'Top Up', bg: 'rgba(217,70,239,0.1)' },
              { label: 'History', bg: 'rgba(255,255,255,0.06)' },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-1">
                <div className="h-10 w-10 rounded-xl" style={{ background: a.bg }} />
                <p className="text-[8px] font-semibold" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {a.label}
                </p>
              </div>
            ))}
          </div>

          {/* Transactions */}
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] font-bold text-white">Recent</p>
            <p className="text-[9px] font-semibold" style={{ color: '#14B8A6' }}>
              See all
            </p>
          </div>
          {[
            { name: 'Bolt', time: '8:14 AM', amount: '-₦2,800', color: '#EF4444' },
            { name: 'Salary', time: 'Yesterday', amount: '+₦450K', color: '#14B8A6' },
            { name: 'Shoprite', time: '2 days ago', amount: '-₦12,500', color: '#EF4444' },
          ].map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-between border-b py-2"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-7 w-7 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />
                <div>
                  <p className="text-[9px] font-semibold text-white">{t.name}</p>
                  <p className="text-[7px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {t.time}
                  </p>
                </div>
              </div>
              <p
                className="text-[10px] font-bold"
                style={{ color: t.color, fontVariantNumeric: 'tabular-nums' }}
              >
                {t.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating chip — income */}
      <div
        className="absolute -right-8 top-1/3 animate-float-delayed rounded-2xl px-3 py-2"
        style={{
          background: 'rgba(8,9,26,0.88)',
          border: '1px solid rgba(20,184,166,0.25)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-lg"
            style={{ background: 'rgba(20,184,166,0.2)' }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7-7 7 7" />
            </svg>
          </div>
          <div>
            <p className="text-[8px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              This month
            </p>
            <p
              className="text-[11px] font-extrabold"
              style={{ color: '#2DD4BF', fontVariantNumeric: 'tabular-nums' }}
            >
              +₦770K
            </p>
          </div>
        </div>
      </div>

      {/* Floating chip — security */}
      <div
        className="absolute -left-10 bottom-1/3 animate-float rounded-2xl px-3 py-2"
        style={{
          background: 'rgba(8,9,26,0.88)',
          border: '1px solid rgba(124,58,237,0.25)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-lg"
            style={{ background: 'rgba(124,58,237,0.2)' }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A78BFA"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <div>
            <p className="text-[8px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Protected
            </p>
            <p className="text-[9px] font-bold" style={{ color: '#A78BFA' }}>
              256-bit SSL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
