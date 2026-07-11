import { Recipient } from '@/types'

export const mockRecipients: Recipient[] = [
  {
    id:              'rec_001',
    name:            'Tunde Bakare',
    bankName:        'GTBank',
    accountNumber:   '0234567891',
    avatarInitials:  'TB',
    recentTransfer:  '2026-06-18',
  },
  {
    id:              'rec_002',
    name:            'Amaka Eze',
    bankName:        'Access Bank',
    accountNumber:   '0345678912',
    avatarInitials:  'AE',
    recentTransfer:  '2026-06-10',
  },
  {
    id:              'rec_003',
    name:            'Chidi Obi',
    bankName:        'First Bank',
    accountNumber:   '3012345678',
    avatarInitials:  'CO',
    recentTransfer:  '2026-05-29',
  },
  {
    id:              'rec_004',
    name:            'Mama Chidi',
    bankName:        'UBA',
    accountNumber:   '2098765432',
    avatarInitials:  'MC',
    recentTransfer:  '2026-06-13',
  },
  {
    id:              'rec_005',
    name:            'Folake Adeyemi',
    bankName:        'Zenith Bank',
    accountNumber:   '0056781234',
    avatarInitials:  'FA',
    recentTransfer:  '2026-05-15',
  },
  {
    id:              'rec_006',
    name:            'Emeka Nwosu',
    bankName:        'Kuda Bank',
    accountNumber:   '1234509876',
    avatarInitials:  'EN',
    recentTransfer:  '2026-04-30',
  },
  {
    id:              'rec_007',
    name:            'Sola Williams',
    bankName:        'Opay',
    accountNumber:   '9012345678',
    avatarInitials:  'SW',
  },
  {
    id:              'rec_008',
    name:            'Bola Adewale',
    bankName:        'Moniepoint',
    accountNumber:   '8023456789',
    avatarInitials:  'BA',
  },
]

export const recentRecipients = mockRecipients.filter(r => r.recentTransfer)
