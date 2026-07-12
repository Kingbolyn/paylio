const stats = [
  { value: '10K+', label: 'Happy Users' },
  { value: '₦20B+', label: 'Transactions' },
  { value: '98.6%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' },
]

export default function StatsStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-1 py-2">
              <p
                className="text-3xl font-extrabold lg:text-4xl"
                style={{
                  background: 'linear-gradient(135deg, #2DD4BF, #14B8A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </p>
              <p className="text-sm font-medium text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
