'use client'

import { useState } from 'react'
import { PageShell } from '@/components/layout'
import {
  PeriodSelector,
  InsightsSummary,
  SpendingDonut,
  CategoryBreakdown,
} from '@/components/insights'
import { useDemoStore } from '@/lib/demo-store'
import { computeInsights } from '@/lib/demo-store'

type Period = 'week' | 'month' | 'year'

export default function InsightsPage() {
  const { transactions } = useDemoStore()
  const [period, setPeriod] = useState<Period>('month')

  const insight = computeInsights(transactions, period)

  return (
    <PageShell>
      <div className="flex flex-col gap-5 px-5 pb-6 pt-2 lg:max-w-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Spending Insights</h1>
          <PeriodSelector active={period} onChange={setPeriod} />
        </div>
        <InsightsSummary insight={insight} />
        <SpendingDonut
          key={period}
          categories={insight.categories}
          totalSpent={insight.totalSpent}
        />
        <div>
          <p className="mb-1 px-1 text-xs font-semibold uppercase tracking-[0.07em] text-white/35">
            Breakdown
          </p>
          <CategoryBreakdown categories={insight.categories} />
        </div>
      </div>
    </PageShell>
  )
}
