'use client'

import { useState } from 'react'
import { PageShell } from '@/components/layout'
import {
  PeriodSelector,
  InsightsSummary,
  SpendingDonut,
  CategoryBreakdown,
} from '@/components/insights'
import { mockInsights } from '@/lib/data'

type Period = 'week' | 'month' | 'year'

export default function InsightsPage() {
  const [period, setPeriod] = useState<Period>('month')
  const insight = mockInsights[period]

  return (
    <PageShell>
      <div className="flex flex-col gap-5 px-5 pt-2 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Spending Insights</h1>
          <PeriodSelector active={period} onChange={setPeriod} />
        </div>
        <InsightsSummary insight={insight} />
        <SpendingDonut key={period} categories={insight.categories} totalSpent={insight.totalSpent} />
        <div>
          <p className="text-xs font-semibold text-white/35 uppercase tracking-[0.07em] mb-1 px-1">
            Breakdown
          </p>
          <CategoryBreakdown categories={insight.categories} />
        </div>
      </div>
    </PageShell>
  )
}
