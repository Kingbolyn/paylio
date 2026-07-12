'use client'

import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import { mockTransactions, getTransactionsByDate } from '@/lib/data/transactions'
import type { Transaction, TransactionCategory, SpendingInsight, SpendingCategory } from '@/types'

// ── Category metadata ──────────────────────────────────────────
const CAT_META: Record<string, { label: string; color: string }> = {
  food: { label: 'Food & Dining', color: '#F59E0B' },
  transport: { label: 'Transport', color: '#3B82F6' },
  shopping: { label: 'Shopping', color: '#8B5CF6' },
  subscription: { label: 'Subscriptions', color: '#F97316' },
  utilities: { label: 'Utilities', color: '#14B8A6' },
  health: { label: 'Health', color: '#10B981' },
  entertainment: { label: 'Entertainment', color: '#EC4899' },
  transfer: { label: 'Transfers', color: '#A78BFA' },
  other: { label: 'Other', color: '#6B7280' },
}

export function computeInsights(
  transactions: Transaction[],
  period: 'week' | 'month' | 'year'
): SpendingInsight {
  const now = new Date()
  const cutoff = new Date(now)
  if (period === 'week') cutoff.setDate(now.getDate() - 7)
  else if (period === 'month') cutoff.setMonth(now.getMonth() - 1)
  else cutoff.setFullYear(now.getFullYear() - 1)

  const filtered = transactions.filter((t) => new Date(t.date) >= cutoff)
  const debits = filtered.filter((t) => t.type === 'debit')
  const credits = filtered.filter((t) => t.type === 'credit')

  const totalSpent = debits.reduce((s, t) => s + t.amount, 0)
  const totalReceived = credits.reduce((s, t) => s + t.amount, 0)

  const byCat: Record<string, number> = {}
  for (const t of debits) byCat[t.category] = (byCat[t.category] ?? 0) + t.amount

  const categories: SpendingCategory[] = Object.entries(byCat)
    .map(([cat, amount]) => ({
      category: cat as TransactionCategory,
      label: CAT_META[cat]?.label ?? cat,
      amount,
      percentage: totalSpent > 0 ? Math.round((amount / totalSpent) * 100) : 0,
      color: CAT_META[cat]?.color ?? '#6B7280',
    }))
    .sort((a, b) => b.amount - a.amount)

  return { period, totalSpent, totalReceived, categories }
}

// ── State ──────────────────────────────────────────────────────
interface DemoState {
  userName: string
  balance: number
  transactions: Transaction[]
  pin: string | null
  biometricEnabled: boolean
  sessionUnlocked: boolean
}

type Action =
  | { type: 'SET_NAME'; name: string }
  | { type: 'SEND_MONEY'; amount: number; merchant: string; category: TransactionCategory }
  | { type: 'ADD_MONEY'; amount: number }
  | { type: 'SET_PIN'; pin: string }
  | { type: 'CLEAR_PIN' }
  | { type: 'TOGGLE_BIOMETRIC' }
  | { type: 'UNLOCK_SESSION' }
  | { type: 'HYDRATE'; partial: Partial<DemoState> }

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map((w) => w[0]?.toUpperCase() ?? '').join('') || 'P'
}

const INITIAL_BALANCE = 50_000_000

const INITIAL: DemoState = {
  userName: '',
  balance: INITIAL_BALANCE,
  transactions: mockTransactions,
  pin: null,
  biometricEnabled: false,
  sessionUnlocked: false,
}

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, userName: action.name }

    case 'SEND_MONEY': {
      const now = new Date()
      const txn: Transaction = {
        id: `txn_live_${Date.now()}`,
        merchant: action.merchant,
        category: action.category,
        amount: action.amount,
        currency: 'NGN',
        type: 'debit',
        date: now.toISOString().slice(0, 10),
        time: now.toTimeString().slice(0, 5),
        status: 'completed',
      }
      return {
        ...state,
        balance: Math.max(0, state.balance - action.amount),
        transactions: [txn, ...state.transactions],
      }
    }

    case 'ADD_MONEY': {
      const now = new Date()
      const txn: Transaction = {
        id: `txn_live_${Date.now()}`,
        merchant: 'Funds Added',
        category: 'transfer',
        amount: action.amount,
        currency: 'NGN',
        type: 'credit',
        date: now.toISOString().slice(0, 10),
        time: now.toTimeString().slice(0, 5),
        status: 'completed',
      }
      return {
        ...state,
        balance: state.balance + action.amount,
        transactions: [txn, ...state.transactions],
      }
    }

    case 'SET_PIN':
      return { ...state, pin: action.pin }

    case 'CLEAR_PIN':
      return { ...state, pin: null }

    case 'TOGGLE_BIOMETRIC':
      return { ...state, biometricEnabled: !state.biometricEnabled }

    case 'UNLOCK_SESSION':
      return { ...state, sessionUnlocked: true }

    case 'HYDRATE':
      return { ...state, ...action.partial }

    default:
      return state
  }
}

// ── Store interface ────────────────────────────────────────────
export interface DemoStore extends DemoState {
  userInitials: string
  setUserName: (name: string) => void
  sendMoney: (amount: number, merchant: string, category?: TransactionCategory) => void
  addMoney: (amount: number) => void
  setPin: (pin: string) => void
  clearPin: () => void
  verifyPin: (pin: string) => boolean
  toggleBiometric: () => void
  unlockSession: () => void
  groupedTransactions: [string, Transaction[]][]
}

const Ctx = createContext<DemoStore | null>(null)
const LS_KEY = 'paylio_demo_v1'

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as Partial<DemoState>
        dispatch({ type: 'HYDRATE', partial: { ...saved, sessionUnlocked: false } })
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(
        LS_KEY,
        JSON.stringify({
          userName: state.userName,
          pin: state.pin,
          biometricEnabled: state.biometricEnabled,
        })
      )
    } catch {}
  }, [state.userName, state.pin, state.biometricEnabled])

  const store: DemoStore = {
    ...state,
    userInitials: getInitials(state.userName),
    setUserName: (name) => dispatch({ type: 'SET_NAME', name }),
    sendMoney: (amount, merchant, category = 'transfer') =>
      dispatch({ type: 'SEND_MONEY', amount, merchant, category }),
    addMoney: (amount) => dispatch({ type: 'ADD_MONEY', amount }),
    setPin: (pin) => dispatch({ type: 'SET_PIN', pin }),
    clearPin: () => dispatch({ type: 'CLEAR_PIN' }),
    verifyPin: (pin) => state.pin === pin,
    toggleBiometric: () => dispatch({ type: 'TOGGLE_BIOMETRIC' }),
    unlockSession: () => dispatch({ type: 'UNLOCK_SESSION' }),
    groupedTransactions: getTransactionsByDate(state.transactions),
  }

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>
}

export function useDemoStore(): DemoStore {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useDemoStore must be used within DemoProvider')
  return ctx
}
