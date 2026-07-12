import type { Metadata } from 'next'
import { PageShell } from '@/components/layout'
import { BalanceCard, QuickActions, TransactionList } from '@/components/home'
import { fetchTransactionsByDate } from '@/lib/data/fetchers'

export const metadata: Metadata = {
  title: 'Home | Paylio Demo',
  description:
    'Your Paylio dashboard — view your balance, recent transactions, and quick-access controls in a live interactive demo.',
}

export default async function HomePage() {
  const grouped = await fetchTransactionsByDate(10)

  return (
    <PageShell>
      <div className="flex flex-col gap-6 px-5 pb-6 pt-2">
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
      <TransactionList grouped={grouped} />
    </PageShell>
  )
}
