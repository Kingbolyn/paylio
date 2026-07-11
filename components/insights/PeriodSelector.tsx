import { cn } from '@/lib/utils'

type Period = 'week' | 'month' | 'year'

interface PeriodSelectorProps {
  active:   Period
  onChange: (p: Period) => void
}

const periods: { label: string; value: Period }[] = [
  { label: 'Week',  value: 'week'  },
  { label: 'Month', value: 'month' },
  { label: 'Year',  value: 'year'  },
]

export default function PeriodSelector({ active, onChange }: PeriodSelectorProps) {
  return (
    <div className="flex items-center bg-white/[0.06] border border-white/[0.08] rounded-full p-1 gap-1">
      {periods.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={cn(
            'flex-1 h-8 rounded-full text-xs font-semibold transition-all duration-200',
            active === value
              ? 'bg-teal text-white shadow-teal'
              : 'text-white/45 hover:text-white/70'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
