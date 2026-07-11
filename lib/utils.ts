import { TransactionCategory } from '@/types'

// ─── Currency formatting ──────────────────────────────────────
export function formatCurrency(
  amount: number,
  currency: string = 'NGN',
  compact: boolean = false
): string {
  if (compact && Math.abs(amount) >= 1_000_000) {
    const value = amount / 1_000_000
    return `${getCurrencySymbol(currency)}${value.toFixed(1)}M`
  }
  if (compact && Math.abs(amount) >= 1_000) {
    const value = amount / 1_000
    return `${getCurrencySymbol(currency)}${value.toFixed(1)}K`
  }

  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    NGN: '₦',
    USD: '$',
    GBP: '£',
    EUR: '€',
  }
  return symbols[currency] ?? currency
}

// ─── Date formatting ──────────────────────────────────────────
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (isSameDay(date, today)) return 'Today'
  if (isSameDay(date, yesterday)) return 'Yesterday'

  return date.toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined,
  })
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  )
}

export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const h = hours % 12 || 12
  return `${h}:${String(minutes).padStart(2, '0')} ${period}`
}

// ─── Account number masking ───────────────────────────────────
export function maskAccountNumber(accountNumber: string): string {
  if (accountNumber.length <= 4) return accountNumber
  const last4 = accountNumber.slice(-4)
  const masked = '*'.repeat(accountNumber.length - 4)
  return `${masked}${last4}`
}

export function formatAccountNumber(accountNumber: string): string {
  return accountNumber.replace(/(\d{4})(?=\d)/g, '$1 ')
}

// ─── Category metadata ────────────────────────────────────────
export function getCategoryLabel(category: TransactionCategory): string {
  const labels: Record<TransactionCategory, string> = {
    food:           'Food & Dining',
    transport:      'Transport',
    shopping:       'Shopping',
    entertainment:  'Entertainment',
    utilities:      'Utilities',
    health:         'Health',
    transfer:       'Transfer',
    subscription:   'Subscription',
    other:          'Other',
  }
  return labels[category] ?? 'Other'
}

export function getCategoryColor(category: TransactionCategory): string {
  const colors: Record<TransactionCategory, string> = {
    food:           '#F59E0B',
    transport:      '#3B82F6',
    shopping:       '#8B5CF6',
    entertainment:  '#EC4899',
    utilities:      '#14B8A6',
    health:         '#10B981',
    transfer:       '#6B7280',
    subscription:   '#F97316',
    other:          '#9CA3AF',
  }
  return colors[category] ?? '#9CA3AF'
}

// ─── Class merging ────────────────────────────────────────────
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

// ─── Number helpers ───────────────────────────────────────────
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function toPercent(value: number, total: number): number {
  if (total === 0) return 0
  return Math.round((value / total) * 100)
}
