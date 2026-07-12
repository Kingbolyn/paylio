import { Account, User } from '@/types'

export const mockUser: User = {
  id: 'usr_001',
  firstName: 'Adebayo',
  lastName: 'Okonkwo',
  fullName: 'Adebayo Okonkwo',
  initials: 'AO',
  email: 'adebayo.okonkwo@gmail.com',
  phone: '+234 803 456 7890',
  joinedDate: '2023-04-12',
}

export const mockAccounts: Account[] = [
  {
    id: 'acc_001',
    name: 'Main Account',
    accountNumber: '0123456789',
    balance: 50_000_000.0,
    currency: 'NGN',
    type: 'checking',
  },
  {
    id: 'acc_002',
    name: 'Savings',
    accountNumber: '0987654321',
    balance: 1_240_000.0,
    currency: 'NGN',
    type: 'savings',
  },
]

export const primaryAccount: Account = mockAccounts[0]!
