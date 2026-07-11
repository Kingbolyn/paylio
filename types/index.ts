// ─── Transaction ─────────────────────────────────────────────
export type TransactionType = 'credit' | 'debit'

export type TransactionCategory =
  | 'food'
  | 'transport'
  | 'shopping'
  | 'entertainment'
  | 'utilities'
  | 'health'
  | 'transfer'
  | 'subscription'
  | 'other'

export interface Transaction {
  id: string
  merchant: string
  category: TransactionCategory
  amount: number
  currency: string
  type: TransactionType
  date: string
  time: string
  note?: string
  status: 'completed' | 'pending' | 'failed'
}

// ─── Account ──────────────────────────────────────────────────
export interface Account {
  id: string
  name: string
  accountNumber: string
  balance: number
  currency: string
  type: 'checking' | 'savings'
}

// ─── Card ─────────────────────────────────────────────────────
export type CardStatus = 'active' | 'frozen' | 'expired'

export interface Card {
  id: string
  label: string
  last4: string
  network: 'visa' | 'mastercard' | 'verve'
  expiry: string
  status: CardStatus
  spendingLimit?: number
  spendingUsed?: number
  isVirtual: boolean
}

// ─── Contact / Recipient ──────────────────────────────────────
export interface Recipient {
  id: string
  name: string
  bankName: string
  accountNumber: string
  avatarInitials: string
  recentTransfer?: string
}

// ─── Spending Insight ─────────────────────────────────────────
export interface SpendingCategory {
  category: TransactionCategory
  label: string
  amount: number
  percentage: number
  color: string
}

export interface SpendingInsight {
  period: 'week' | 'month' | 'year'
  totalSpent: number
  totalReceived: number
  categories: SpendingCategory[]
}

// ─── Security ─────────────────────────────────────────────────
export interface DeviceSession {
  id: string
  deviceName: string
  location: string
  lastActive: string
  isCurrent: boolean
}

export interface SecuritySettings {
  biometricEnabled: boolean
  twoFactorEnabled: boolean
  transactionPin: boolean
  loginAlerts: boolean
  largeTransferAlert: boolean
  largeTransferThreshold: number
}

// ─── Navigation ───────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  icon: string
}

// ─── UI State ─────────────────────────────────────────────────
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}
