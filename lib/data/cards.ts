import { Card } from '@/types'

export const mockCards: Card[] = [
  {
    id:           'card_001',
    label:        'Main Card',
    last4:        '4821',
    network:      'visa',
    expiry:       '09/28',
    status:       'active',
    spendingLimit: 200_000,
    spendingUsed:  87_450,
    isVirtual:    false,
  },
  {
    id:        'card_002',
    label:     'Virtual Card',
    last4:     '3307',
    network:   'mastercard',
    expiry:    '03/27',
    status:    'active',
    isVirtual: true,
  },
  {
    id:        'card_003',
    label:     'Savings Card',
    last4:     '9142',
    network:   'verve',
    expiry:    '11/25',
    status:    'frozen',
    isVirtual: false,
  },
]

export const primaryCard = mockCards[0]
