'use client'

import { useMemo } from 'react'
import { SpendingCategory } from '@/types'
import { formatCurrency } from '@/lib/utils'

interface SpendingDonutProps {
  categories: SpendingCategory[]
  totalSpent: number
}

const CX           = 100
const CY           = 100
const R            = 72
const STROKE_WIDTH = 26
const CIRCUMFERENCE = 2 * Math.PI * R
const GAP          = 2.5

export default function SpendingDonut({ categories, totalSpent }: SpendingDonutProps) {
  const segments = useMemo(() => {
    let cumulative = 0
    return categories.map((cat) => {
      const length        = (cat.percentage / 100) * CIRCUMFERENCE
      const visibleLength = Math.max(0, length - GAP)
      const seg = {
        ...cat,
        dashArray:  `${visibleLength} ${CIRCUMFERENCE - visibleLength}`,
        dashOffset: -cumulative,
      }
      cumulative += length
      return seg
    })
  }, [categories])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[230px] mx-auto">
        <svg viewBox="0 0 200 200" className="w-full drop-shadow-xl">
          {/* Background track */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={STROKE_WIDTH}
          />

          {/* Segments */}
          {segments.map((seg) => (
            <circle
              key={seg.category}
              cx={CX} cy={CY} r={R}
              fill="none"
              stroke={seg.color}
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={seg.dashArray}
              strokeDashoffset={seg.dashOffset}
              strokeLinecap="butt"
              transform={`rotate(-90, ${CX}, ${CY})`}
              style={{
                transition: 'stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease',
              }}
            />
          ))}

          {/* Center: label */}
          <text
            x={CX} y={CY - 10}
            textAnchor="middle"
            fill="rgba(255,255,255,0.35)"
            fontSize="9"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
            letterSpacing="0.08em"
          >
            SPENT
          </text>

          {/* Center: amount */}
          <text
            x={CX} y={CY + 10}
            textAnchor="middle"
            fill="white"
            fontSize="15"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            {formatCurrency(totalSpent, 'NGN', true)}
          </text>
        </svg>
      </div>

      {/* Legend dots — top 4 categories */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-2">
        {categories.slice(0, 4).map((cat) => (
          <div key={cat.category} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-[10px] font-medium text-white/45">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
