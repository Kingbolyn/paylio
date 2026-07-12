import type {
  Account,
  Card,
  DeviceSession,
  Recipient,
  SecuritySettings,
  SpendingInsight,
  Transaction,
  User,
} from '@/types'
import { mockUser, mockAccounts, primaryAccount } from './account'
import { mockTransactions, getTransactionsByDate } from './transactions'
import { mockCards, primaryCard } from './cards'
import { mockRecipients, recentRecipients } from './recipients'
import { mockInsights } from './insights'
import { mockSecuritySettings, mockDeviceSessions } from './security'

const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export async function fetchUser(): Promise<User> {
  await delay(300)
  return mockUser
}

export async function fetchAccounts(): Promise<Account[]> {
  await delay(300)
  return mockAccounts
}

export async function fetchPrimaryAccount(): Promise<Account> {
  await delay(300)
  return primaryAccount
}

export async function fetchTransactions(limit?: number): Promise<Transaction[]> {
  await delay(300)
  return limit ? mockTransactions.slice(0, limit) : mockTransactions
}

export async function fetchTransactionsByDate(limit?: number): Promise<[string, Transaction[]][]> {
  await delay(300)
  const all = limit ? mockTransactions.slice(0, limit) : mockTransactions
  return getTransactionsByDate(all)
}

export async function fetchCards(): Promise<Card[]> {
  await delay(300)
  return mockCards
}

export async function fetchPrimaryCard(): Promise<Card> {
  await delay(300)
  return primaryCard
}

export async function fetchInsights(period: 'week' | 'month' | 'year'): Promise<SpendingInsight> {
  await delay(300)
  return mockInsights[period]
}

export async function fetchSecuritySettings(): Promise<SecuritySettings> {
  await delay(300)
  return mockSecuritySettings
}

export async function fetchDeviceSessions(): Promise<DeviceSession[]> {
  await delay(300)
  return mockDeviceSessions
}

export async function fetchRecipients(): Promise<Recipient[]> {
  await delay(300)
  return mockRecipients
}

export async function fetchRecentRecipients(): Promise<Recipient[]> {
  await delay(300)
  return recentRecipients
}
