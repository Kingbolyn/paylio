import { DeviceSession, SecuritySettings } from '@/types'

export const mockSecuritySettings: SecuritySettings = {
  biometricEnabled:         true,
  twoFactorEnabled:         true,
  transactionPin:           true,
  loginAlerts:              true,
  largeTransferAlert:       true,
  largeTransferThreshold:   100_000,
}

export const mockDeviceSessions: DeviceSession[] = [
  {
    id:          'dev_001',
    deviceName:  'iPhone 15 Pro',
    location:    'Lagos, Nigeria',
    lastActive:  'Now',
    isCurrent:   true,
  },
  {
    id:          'dev_002',
    deviceName:  'MacBook Pro',
    location:    'Lagos, Nigeria',
    lastActive:  '2 hours ago',
    isCurrent:   false,
  },
  {
    id:          'dev_003',
    deviceName:  'Chrome — Windows',
    location:    'Abuja, Nigeria',
    lastActive:  '3 days ago',
    isCurrent:   false,
  },
]
