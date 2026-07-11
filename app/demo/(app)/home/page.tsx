import { PageShell } from '@/components/layout'
import { BalanceCard, QuickActions, TransactionList } from '@/components/home'

export default function HomePage() {
  return (
    <PageShell>
      <div className="flex flex-col gap-6 px-5 pt-2 pb-6">
        <BalanceCard />
        <QuickActions />
        <div className="flex items-center justify-between -mb-2">
          <span className="text-sm font-semibold text-white">Recent Transactions</span>
          <a href="/demo/insights" className="text-xs font-semibold text-teal hover:text-teal-light transition-colors">
            See all
          </a>
        </div>
      </div>
      <TransactionList limit={10} />
    </PageShell>
  )
}
