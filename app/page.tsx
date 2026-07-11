import Link from 'next/link'
import { Nav, Footer } from '@/components/marketing'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Nav />
      <main>
        <HeroSection />
        <StatsStrip />
        <FeaturesSection />
        <ProductShowcase />
        <SecuritySection />
        <DeveloperTeaser />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}

/* ─────────────────────────────── Hero ───────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy" />
      <div
        className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-40 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <GlobeSVG />
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)] py-20 lg:py-0">
          <div className="flex flex-col gap-7 max-w-xl">
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-teal/25 bg-teal/[0.07] text-xs font-semibold text-teal tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              MODERN PAYMENTS
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] tracking-tight">
              Money,{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 50%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Made Simple.
              </span>
            </h1>
            <p className="text-lg text-white/55 leading-relaxed max-w-md">
              Paylio brings all your financial needs together in one powerful and beautifully simple app. Bank, send, spend, and grow your money with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/demo/home" className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-teal text-navy font-bold text-sm hover:bg-teal-light transition-all duration-150 shadow-teal-strong active:scale-[0.97]">
                Get Started
              </Link>
              <Link href="/product" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/[0.14] text-white/70 font-semibold text-sm hover:bg-white/[0.06] hover:text-white transition-all duration-150">
                Explore Product
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {['#14B8A6','#60A5FA','#A78BFA','#F59E0B'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-navy" style={{ background: `radial-gradient(circle at 35% 35%, ${c}dd, ${c}66)` }} />
                ))}
              </div>
              <p className="text-sm text-white/40">
                Trusted by <span className="text-white/70 font-semibold">10,000+</span> people and businesses
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent pointer-events-none" />
    </section>
  )
}

function GlobeSVG() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[560px] h-[560px] opacity-20 pointer-events-none hidden lg:block" aria-hidden>
      <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="280" cy="280" r="240" stroke="#14B8A6" strokeWidth="0.75" strokeOpacity="0.6"/>
        {[50,100,140,160,180,200,220,240].map((ry, i) => (
          <ellipse key={i} cx="280" cy="280" rx="240" ry={ry} stroke="#14B8A6" strokeWidth="0.5" strokeOpacity="0.35"/>
        ))}
        {[0,30,60,90,120,150].map((angle, i) => (
          <ellipse key={i} cx="280" cy="280" rx="240" ry="240" stroke="#14B8A6" strokeWidth="0.5" strokeOpacity="0.35"
            transform={`rotate(${angle} 280 280)`} style={{ transformOrigin: '280px 280px' }}
          />
        ))}
        {[[280,80],[420,160],[460,300],[380,440],[200,460],[120,340],[100,180],[200,100],[350,220],[310,380],[160,260],[400,360]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r={i%3===0?4:2.5} fill="#14B8A6" fillOpacity={i%3===0?0.9:0.6}/>
        ))}
        <path d="M280 80 L420 160 L460 300 L380 440 M280 80 L200 100 L120 180 M420 160 L460 300 M350 220 L310 380 M160 260 L200 460" stroke="#14B8A6" strokeWidth="0.75" strokeOpacity="0.4"/>
        <circle cx="280" cy="280" r="80" fill="url(#globeGlow)" opacity="0.3"/>
        <defs>
          <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 scale-90 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)' }} />
      <div className="relative w-[260px] sm:w-[300px] rounded-[44px] overflow-hidden shadow-2xl"
        style={{ background: 'linear-gradient(145deg, #1a3a6b, #071628)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)' }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-deep rounded-full z-10" />
        <div className="bg-[#0B1E3D] px-4 pt-10 pb-4 min-h-[540px]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center text-[10px] font-bold text-navy">AO</div>
              <div>
                <p className="text-[9px] text-white/40">Good afternoon</p>
                <p className="text-[11px] font-bold text-white">Adebayo</p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/[0.07] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
          </div>
          <div className="rounded-2xl p-4 mb-4" style={{ background: 'linear-gradient(145deg, #0F2547, #071628)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p className="text-[8px] font-semibold text-white/40 uppercase tracking-widest mb-1">Available Balance</p>
            <p className="text-2xl font-extrabold text-white mb-1" style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>₦487,350.00</p>
            <p className="text-[9px] text-white/35 mb-3">Main Account ••••6789</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-teal/20 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                </div>
                <div>
                  <p className="text-[7px] text-white/35">Income</p>
                  <p className="text-[10px] font-bold text-teal" style={{ fontVariantNumeric: 'tabular-nums' }}>₦770.0K</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                </div>
                <div>
                  <p className="text-[7px] text-white/35">Spent</p>
                  <p className="text-[10px] font-bold text-red-400" style={{ fontVariantNumeric: 'tabular-nums' }}>₦163.4K</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: 'Send', color: 'rgba(20,184,166,0.12)' },
              { label: 'Receive', color: 'rgba(59,130,246,0.12)' },
              { label: 'Top Up', color: 'rgba(139,92,246,0.12)' },
              { label: 'History', color: 'rgba(255,255,255,0.06)' },
            ].map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl" style={{ background: a.color }} />
                <p className="text-[8px] font-semibold text-white/45">{a.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold text-white">Recent Transactions</p>
            <p className="text-[9px] text-teal font-semibold">See all</p>
          </div>
          {[
            { name: 'Bolt', time: '8:14 AM', amount: '-₦2,800', color: '#EF4444' },
            { name: 'Salary', time: 'Yesterday', amount: '+₦450K', color: '#14B8A6' },
            { name: 'Shoprite', time: '2 days ago', amount: '-₦12,500', color: '#EF4444' },
          ].map((t) => (
            <div key={t.name} className="flex items-center justify-between py-2 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-white/[0.06]" />
                <div>
                  <p className="text-[9px] font-semibold text-white">{t.name}</p>
                  <p className="text-[7px] text-white/35">{t.time}</p>
                </div>
              </div>
              <p className="text-[10px] font-bold" style={{ color: t.color, fontVariantNumeric: 'tabular-nums' }}>{t.amount}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute -right-6 top-1/3 rounded-2xl px-3 py-2 shadow-xl"
        style={{ background: 'rgba(15,37,71,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-teal/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12l7-7 7 7"/></svg>
          </div>
          <div>
            <p className="text-[8px] text-white/40">This month</p>
            <p className="text-[11px] font-extrabold text-teal" style={{ fontVariantNumeric: 'tabular-nums' }}>+₦770K</p>
          </div>
        </div>
      </div>
      <div
        className="absolute -left-8 bottom-1/3 rounded-2xl px-3 py-2 shadow-xl"
        style={{ background: 'rgba(15,37,71,0.95)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"><path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <div>
            <p className="text-[8px] text-white/40">Secure</p>
            <p className="text-[9px] font-bold text-green-400">256-bit SSL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────── Stats ──────────────────────────────── */

function StatsStrip() {
  const stats = [
    { value: '10K+',  label: 'Happy Users'  },
    { value: '₦20B+', label: 'Transactions' },
    { value: '98.6%', label: 'Success Rate' },
    { value: '24/7',  label: 'Support'      },
  ]
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-1 py-2">
              <p className="text-3xl lg:text-4xl font-extrabold"
                style={{ background: 'linear-gradient(135deg, #2DD4BF, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontVariantNumeric: 'tabular-nums' }}
              >{s.value}</p>
              <p className="text-sm text-white/40 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── Features ───────────────────────────── */

function FeaturesSection() {
  const features = [
    { title: 'Banking',   desc: 'Manage your accounts with ease. View balances, track statements, and stay on top of your finances.', color: 'rgba(20,184,166,0.1)',   stroke: '#14B8A6', href: '/product' },
    { title: 'Transfers', desc: 'Send and receive money instantly across all Nigerian banks. No delays, no friction.',                   color: 'rgba(96,165,250,0.1)',   stroke: '#60A5FA', href: '/features' },
    { title: 'Insights',  desc: 'Track and improve your spending. Visual breakdowns that make your money story clear.',                  color: 'rgba(139,92,246,0.1)',   stroke: '#A78BFA', href: '/insights' },
    { title: 'Security',  desc: "Your money is protected 24/7. Biometrics, 2FA, and real-time alerts keep you in control.",             color: 'rgba(34,197,94,0.1)',    stroke: '#22C55E', href: '/security' },
  ]
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-teal uppercase tracking-[0.12em] mb-4">Everything You Need</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">The All-In-One Finance App</h2>
          <p className="text-lg text-white/45 leading-relaxed">Banking, transfers, budgeting, and more. Everything you need to manage your money in one place.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <Link key={f.title} href={f.href}
              className="group relative rounded-3xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ background: f.color, color: f.stroke }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="7"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5">{f.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold" style={{ color: f.stroke }}>
                Learn more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── Product showcase ───────────────────── */

function ProductShowcase() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="absolute inset-0 blur-3xl opacity-25 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.3), transparent 70%)' }} />
            <div className="relative flex items-end gap-4">
              <div className="relative w-[190px] rounded-[34px] overflow-hidden translate-y-8 opacity-70"
                style={{ background: 'linear-gradient(145deg, #0F2547, #071628)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
              >
                <div className="bg-[#0B1E3D] px-3 pt-7 pb-4 min-h-[380px]">
                  <p className="text-[9px] font-bold text-white mb-3">Spending Insights</p>
                  <div className="flex justify-center mb-3">
                    <svg viewBox="0 0 100 100" className="w-20 h-20">
                      <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14"/>
                      <circle cx="50" cy="50" r="36" fill="none" stroke="#A78BFA" strokeWidth="14" strokeDasharray="113 226" strokeDashoffset="0" transform="rotate(-90 50 50)"/>
                      <circle cx="50" cy="50" r="36" fill="none" stroke="#14B8A6" strokeWidth="14" strokeDasharray="64 275" strokeDashoffset="-113" transform="rotate(-90 50 50)"/>
                      <circle cx="50" cy="50" r="36" fill="none" stroke="#60A5FA" strokeWidth="14" strokeDasharray="32 307" strokeDashoffset="-177" transform="rotate(-90 50 50)"/>
                      <text x="50" y="47" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontWeight="600">SPENT</text>
                      <text x="50" y="56" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="800">₦163.4K</text>
                    </svg>
                  </div>
                  {[['Shopping','#A78BFA','59%'],['Food','#14B8A6','18%'],['Transport','#60A5FA','13%']].map(([l,c,p])=>(
                    <div key={l} className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                        <p className="text-[7px] text-white/50">{l}</p>
                      </div>
                      <p className="text-[7px] font-bold" style={{ color: c }}>{p}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative w-[210px] rounded-[38px] overflow-hidden z-10"
                style={{ background: 'linear-gradient(145deg, #1a3a6b, #071628)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)' }}
              >
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-navy-deep rounded-full z-10" />
                <div className="bg-[#0B1E3D] px-3.5 pt-8 pb-4 min-h-[420px]">
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-6 h-6 rounded-full bg-teal flex items-center justify-center text-[8px] font-bold text-navy">AO</div>
                    <p className="text-[10px] font-semibold text-white">Adebayo</p>
                  </div>
                  <div className="rounded-xl p-3 mb-3" style={{ background: 'linear-gradient(145deg, #0F2547, #071628)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <p className="text-[7px] text-white/35 uppercase tracking-wider mb-0.5">Total Balance</p>
                    <p className="text-xl font-extrabold text-white" style={{ fontVariantNumeric: 'tabular-nums' }}>₦2,560,450.50</p>
                    <p className="text-[7px] text-teal mt-0.5">+12.6% from last month</p>
                    <div className="flex gap-2 mt-2.5">
                      <div className="h-6 flex-1 rounded-lg bg-teal flex items-center justify-center text-[7px] font-bold text-navy">Send Money</div>
                      <div className="h-6 flex-1 rounded-lg bg-white/[0.08] flex items-center justify-center text-[7px] font-semibold text-white/70">Add Money</div>
                    </div>
                  </div>
                  <p className="text-[8px] font-bold text-white mb-2">Recent Transactions</p>
                  {[{ n:'Netflix', a:'-₦4,500',c:'#EF4444' },{ n:'Salary', a:'+₦450K',c:'#14B8A6' },{ n:'Shoprite', a:'-₦12.5K',c:'#EF4444' }].map(t=>(
                    <div key={t.n} className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-lg bg-white/[0.06]" />
                        <p className="text-[7px] text-white/70">{t.n}</p>
                      </div>
                      <p className="text-[8px] font-bold" style={{ color: t.c, fontVariantNumeric: 'tabular-nums' }}>{t.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <p className="text-xs font-bold text-teal uppercase tracking-[0.12em]">Product</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">Banking that Moves With You</h2>
            <p className="text-lg text-white/50 leading-relaxed">Paylio brings all your financial needs together in one powerful and beautifully simple app. Built for people who expect more from their money.</p>
            <ul className="flex flex-col gap-3.5 mt-1">
              {['Instant Transfers — Send to any Nigerian bank in seconds.','Smart Insights — Visualize where your money goes, every naira.','Bill Payments — DSTV, EKEDC, airtime — all in one tap.','Virtual Cards — Shop online safely with disposable virtual cards.','Real-time Alerts — Never miss a transaction. Always in the loop.'].map((item) => {
                const [title, desc] = item.split(' — ')
                return (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white">{title}</span>
                      <span className="text-sm text-white/40"> — {desc}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className="flex gap-3 mt-2">
              <Link href="/demo/home" className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-teal text-navy font-bold text-sm hover:bg-teal-light transition-all shadow-teal">Get Started</Link>
              <Link href="/product" className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-white/[0.12] text-white/65 font-semibold text-sm hover:bg-white/[0.05] hover:text-white transition-all">View Product</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── Security ───────────────────────────── */

function SecuritySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 10% 50%, rgba(20,184,166,0.06) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold text-teal uppercase tracking-[0.12em]">Security</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Your Security is Our Priority</h2>
            <p className="text-lg text-white/50 leading-relaxed">Advanced security features to keep your money and information safe. Bank with confidence, knowing we have every angle covered.</p>
            <ul className="flex flex-col gap-4 mt-1">
              {[
                { e:'🔐', t:'Biometric Authentication', d:'Face ID and fingerprint login for instant, secure access.' },
                { e:'🛡️', t:'End-to-End Encryption',   d:'256-bit SSL encryption on every request, every time.'   },
                { e:'📱', t:'Device Management',        d:'View and revoke access from any connected device.'       },
                { e:'🔔', t:'Fraud Detection',          d:'Real-time alerts on unusual activity and large transfers.'},
              ].map((p) => (
                <li key={p.t} className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0">{p.e}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{p.t}</p>
                    <p className="text-sm text-white/40">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/security" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-light transition-colors mt-1 w-fit">
              Learn about our security
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-[280px] rounded-[40px] overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #0F2547, #071628)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}
            >
              <div className="bg-[#0B1E3D] px-4 pt-8 pb-6 min-h-[460px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm font-bold text-white">Security</p>
                    <p className="text-[10px] text-white/40">Your money, protected.</p>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-teal/15 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round"><path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z"/><polyline points="9 12 11 14 15 10"/></svg>
                  </div>
                </div>
                <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-2">Authentication</p>
                <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] mb-3">
                  {[['Biometric Login','Face ID or fingerprint'],['2-Factor Auth','Extra login security'],['Transaction PIN','Required every transfer']].map(([l,d])=>(
                    <div key={l} className="flex items-center justify-between px-3 py-2.5 border-b border-white/[0.05] last:border-0">
                      <div>
                        <p className="text-[8px] font-semibold text-white">{l}</p>
                        <p className="text-[7px] text-white/35">{d}</p>
                      </div>
                      <div className="w-8 h-4 rounded-full bg-teal flex items-center justify-end pr-0.5">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mb-2">Active Devices</p>
                <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
                  {[{ n:'iPhone 15 Pro', l:'Lagos, Nigeria', cur:true },{ n:'MacBook Pro', l:'2 hrs ago', cur:false }].map((d)=>(
                    <div key={d.n} className="flex items-center justify-between px-3 py-2.5 border-b border-white/[0.05] last:border-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${d.cur ? 'bg-teal/20' : 'bg-white/[0.06]'}`}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={d.cur ? '#14B8A6' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/></svg>
                        </div>
                        <div>
                          <p className="text-[8px] font-semibold text-white">{d.n}</p>
                          <p className="text-[7px] text-white/35">{d.l}</p>
                        </div>
                      </div>
                      {d.cur ? <span className="text-[7px] font-bold text-teal bg-teal/10 px-1.5 py-0.5 rounded-full">This device</span>
                              : <button className="text-[7px] font-bold text-red-400">Revoke</button>}
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

/* ─────────────────────────────── Developer teaser ───────────────────── */

function DeveloperTeaser() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 90% 50%, rgba(96,165,250,0.06) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden" style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.07]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <p className="ml-3 text-xs text-white/30 font-mono">POST /api/v1/transfer</p>
            </div>
            <pre className="p-6 text-xs font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-blue-400">const</span>{' '}<span className="text-white">response</span>{' '}<span className="text-white/50">=</span>{' '}<span className="text-blue-400">await</span>{' '}<span className="text-teal">paylio</span><span className="text-white/50">.</span><span className="text-yellow-300">transfer</span><span className="text-white/50">{'({'}</span>{'\n'}
                {'  '}<span className="text-white/60">amount</span><span className="text-white/50">:</span>{' '}<span className="text-orange-300">50000</span><span className="text-white/50">,</span>{'\n'}
                {'  '}<span className="text-white/60">currency</span><span className="text-white/50">:</span>{' '}<span className="text-green-300">&apos;NGN&apos;</span><span className="text-white/50">,</span>{'\n'}
                {'  '}<span className="text-white/60">recipient</span><span className="text-white/50">:</span>{' '}<span className="text-white/50">{'{'}</span>{'\n'}
                {'    '}<span className="text-white/60">bank</span><span className="text-white/50">:</span>{' '}<span className="text-green-300">&apos;GTBank&apos;</span><span className="text-white/50">,</span>{'\n'}
                {'    '}<span className="text-white/60">account</span><span className="text-white/50">:</span>{' '}<span className="text-green-300">&apos;0123456789&apos;</span>{'\n'}
                {'  '}<span className="text-white/50">{'}'}</span>{'\n'}
                <span className="text-white/50">{'});'}</span>{'\n\n'}
                <span className="text-white/40">{'// Response'}</span>{'\n'}
                <span className="text-white/50">{'{'}</span>{'\n'}
                {'  '}<span className="text-white/60">status</span><span className="text-white/50">:</span>{' '}<span className="text-green-300">&apos;success&apos;</span><span className="text-white/50">,</span>{'\n'}
                {'  '}<span className="text-white/60">reference</span><span className="text-white/50">:</span>{' '}<span className="text-green-300">&apos;PAY-2024-8A3F&apos;</span><span className="text-white/50">,</span>{'\n'}
                {'  '}<span className="text-white/60">timestamp</span><span className="text-white/50">:</span>{' '}<span className="text-orange-300">&apos;2024-06-21T09:14:00Z&apos;</span>{'\n'}
                <span className="text-white/50">{'}'}</span>
              </code>
            </pre>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.12em]">Developers</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Build with Paylio APIs</h2>
            <p className="text-lg text-white/50 leading-relaxed">Powerful APIs and tools to help you build the future of finance. Clean documentation, sandbox testing, and SDKs for every stack.</p>
            <div className="grid grid-cols-2 gap-4 mt-1">
              {[['REST API','Endpoints for every operation'],['Webhooks','Real-time event notifications'],['SDKs','Node, Python, Go, and more'],['Sandbox','Test safely before going live']].map(([l,d])=>(
                <div key={l} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-sm font-bold text-white mb-1">{l}</p>
                  <p className="text-xs text-white/40">{d}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-1">
              <Link href="/developers" className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-semibold text-sm hover:bg-blue-500/25 transition-all">View Docs</Link>
              <Link href="/developers#sandbox" className="inline-flex items-center justify-center h-11 px-6 rounded-full border border-white/[0.12] text-white/65 font-semibold text-sm hover:bg-white/[0.05] hover:text-white transition-all">Get API Key</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────── CTA Banner ─────────────────────────── */

function CtaBanner() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="relative rounded-3xl lg:rounded-[40px] overflow-hidden px-8 py-16 lg:py-20 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.15) 0%, rgba(96,165,250,0.08) 50%, rgba(139,92,246,0.12) 100%)', border: '1px solid rgba(20,184,166,0.2)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(20,184,166,0.12) 0%, transparent 60%)' }} />
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-bold text-teal uppercase tracking-[0.12em] mb-5">Get Started Today</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">Ready to Take Control of Your Money?</h2>
            <p className="text-lg text-white/55 leading-relaxed mb-9">Join thousands of people who trust Paylio to manage their finances. Simple, secure, and built for you.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/demo/home" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-teal text-navy font-bold text-sm hover:bg-teal-light transition-all shadow-teal-strong active:scale-[0.97]">Try the Demo</Link>
              <Link href="/about" className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:bg-white/[0.07] hover:text-white transition-all">About Paylio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
