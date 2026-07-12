import { mockTransactions, getTransactionsByDate } from '@/lib/data'
import type { Transaction } from '@/types'
import { formatDate } from '@/lib/utils'
import TransactionItem from './TransactionItem'

interface TransactionListProps {
  limit?: number
  grouped?: [string, Transaction[]][]
}

export default function TransactionList({ limit, grouped: groupedProp }: TransactionListProps) {
  const all = limit ? mockTransactions.slice(0, limit) : mockTransactions
  const grouped = groupedProp ?? getTransactionsByDate(all)

  return (
    <div className="flex flex-col">
      {grouped.map(([date, transactions]) => (
        <div key={date}>
          {/* Date header */}
          <div className="flex items-center justify-between px-5 py-2.5">
            <span className="text-xs font-semibold uppercase tracking-[0.07em] text-white/35">
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
