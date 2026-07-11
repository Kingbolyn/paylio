import { SpendingCategory } from '@/types'
import { formatCurrency } from '@/lib/utils'

interface CategoryBreakdownProps {
  categories: SpendingCategory[]
}

export default function CategoryBreakdown({ categories }: CategoryBreakdownProps) {
  const sorted = [...categories].sort((a, b) => b.amount - a.amount)

  return (
    <div className="flex flex-col gap-1">
      {sorted.map((cat, i) => (
        <CategoryRow key={cat.category} category={cat} index={i} />
      ))}
    </div>
  )
}

function CategoryRow({
  category,
  index,
}: {
  category: SpendingCategory
  index:    number
}) {
  return (
    <div
      className="flex flex-col gap-2 px-5 py-3.5 rounded-2xl hover:bg-white/[0.03] transition-colors"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Color dot */}
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: category.color }}
          />
          <span className="text-sm font-semibold text-white/80">
            {category.label}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="text-sm font-semibold text-white"
            style={{
              fontVariantNumeric: 'tabular-nums',
              fontFeatureSettings: '"tnum" 1',
            }}
          >
            {formatCurrency(category.amount, 'NGN', true)}
          </span>
          <span
            className="text-xs font-semibold w-8 text-right"
            style={{ color: category.color }}
          >
            {category.percentage}%
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width:           `${category.percentage}%`,
            backgroundColor: category.color,
            opacity:         0.75,
          }}
        />
      </div>
    </div>
  )
}
