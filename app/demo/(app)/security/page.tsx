import { PageShell } from '@/components/layout'
import { SecurityRow } from '@/components/security'
import { DeviceCard }  from '@/components/security'
import { mockSecuritySettings, mockDeviceSessions } from '@/lib/data'

export default function SecurityPage() {
  return (
    <PageShell>
      <div className="flex flex-col gap-1 pt-2 pb-6">

        <div className="px-5 mb-4">
          <h1 className="text-xl font-bold text-white">Security</h1>
          <p className="text-sm text-white/40 mt-1">
            Your money, protected. Here&rsquo;s exactly how.
          </p>
        </div>

        <SectionLabel>Authentication</SectionLabel>
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl mx-5 overflow-hidden divide-y divide-white/[0.06]">
          <SecurityRow
            icon={<FingerprintIcon />}
            label="Biometric Login"
            description="Use Face ID or fingerprint to sign in"
            checked={mockSecuritySettings.biometricEnabled}
          />
          <SecurityRow
            icon={<ShieldCheckIcon />}
            label="Two-Factor Authentication"
            description="Extra layer of security on every login"
            checked={mockSecuritySettings.twoFactorEnabled}
          />
          <SecurityRow
            icon={<KeyIcon />}
            label="Transaction PIN"
            description="Required before every transfer"
            checked={mockSecuritySettings.transactionPin}
          />
        </div>

        <SectionLabel>Alerts</SectionLabel>
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl mx-5 overflow-hidden divide-y divide-white/[0.06]">
          <SecurityRow
            icon={<BellIcon />}
            label="Login Alerts"
            description="Notify me of every new device login"
            checked={mockSecuritySettings.loginAlerts}
          />
          <SecurityRow
            icon={<AlertIcon />}
            label="Large Transfer Alert"
            description={`Alert me for transfers above ₦${(mockSecuritySettings.largeTransferThreshold / 1000).toFixed(0)}K`}
            checked={mockSecuritySettings.largeTransferAlert}
          />
        </div>

        <SectionLabel>Active Devices</SectionLabel>
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl mx-5 overflow-hidden divide-y divide-white/[0.06]">
          {mockDeviceSessions.map((session) => (
            <DeviceCard key={session.id} session={session} />
          ))}
        </div>

        <div className="mx-5 mt-2 flex items-start gap-2.5 px-4 py-3 bg-teal/[0.05] border border-teal/[0.15] rounded-2xl">
          <ShieldIcon />
          <p className="text-xs text-white/45 leading-relaxed">
            New device detected. Confirm it&rsquo;s you before continuing.
          </p>
        </div>

      </div>
    </PageShell>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-5 pt-4 pb-2 text-xs font-semibold text-white/35 uppercase tracking-[0.07em]">
      {children}
    </p>
  )
}

function FingerprintIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 17c1 .5 2.03 1 4 1" />
      <path d="M20 12c0 3.46-1 6.36-2.5 9" />
      <path d="M5.28 9.83A10 10 0 0 0 2 15" />
      <path d="M9 12a3 3 0 0 1 6 0" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(20,184,166,0.6)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7l-8-4Z" />
    </svg>
  )
}
