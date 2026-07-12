const stats = [
  { value: '10K+', label: 'People using Paylio', color: '#2DD4BF' },
  { value: '₦20B+', label: 'Processed to date', color: '#A78BFA' },
  { value: '<10s', label: 'Transfer time', color: '#E879F9' },
  { value: '98.6%', label: 'Success rate', color: '#60A5FA' },
]

export default function StatsStrip() {
  return (
    <section
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(255,255,255,0.02)',
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center gap-1.5 py-2">
              <p
                className="text-3xl font-extrabold lg:text-4xl"
                style={{
                  background: `linear-gradient(135deg, ${s.color}, ${s.color}99)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontVariantNumeric: 'tabular-nums',
                  filter: `drop-shadow(0 0 12px ${s.color}55)`,
                }}
              >
                {s.value}
              </p>
              <p
                className="text-center text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.38)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
