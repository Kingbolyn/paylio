'use client'

import { PageShell } from '@/components/layout'
import { BalanceCard, QuickActions, TransactionList } from '@/components/home'
import { useDemoStore } from '@/lib/demo-store'

export default function HomePage() {
  const { groupedTransactions } = useDemoStore()
  const recent = groupedTransactions.slice(0, 5)

  return (
    <PageShell>
      <div className="flex flex-col gap-6 px-5 pb-6 pt-2 lg:max-w-2xl">
        <BalanceCard />
        <QuickActions />
        <div className="-mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Recent Transactions</span>
          <a
            href="/demo/insights"
            className="text-xs font-semibold text-teal transition-colors hover:text-teal-light"
          >
            See all
          </a>
        </div>
      </div>
      <div className="lg:max-w-2xl">
        <TransactionList grouped={recent} />
      </div>
    </PageShell>
  )
}
