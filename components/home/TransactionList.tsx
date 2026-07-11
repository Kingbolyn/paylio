import { mockTransactions, getTransactionsByDate } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import TransactionItem from './TransactionItem'

interface TransactionListProps {
  limit?: number
}

export default function TransactionList({ limit }: TransactionListProps) {
  const all     = limit ? mockTransactions.slice(0, limit) : mockTransactions
  const grouped = getTransactionsByDate(all)

  return (
    <div className="flex flex-col">
      {grouped.map(([date, transactions]) => (
        <div key={date}>
          {/* Date header */}
          <div className="flex items-center justify-between px-5 py-2.5">
            <span className="text-xs font-semibold text-white/35 uppercase tracking-[0.07em]">
              {formatDate(date)}
            </span>
            <span className="text-xs text-white/25">
              {transactions.length} transaction{transactions.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Transaction rows */}
          <div className="flex flex-col">
            {transactions.map((txn) => (
              <TransactionItem key={txn.id} transaction={txn} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
