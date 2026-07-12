import type { Metadata } from 'next'
import { PageShell } from '@/components/layout'
import { SecurityRow, DeviceCard } from '@/components/security'
import {
  FingerprintIcon,
  ShieldCheckIcon,
  KeyIcon,
  BellIcon,
  AlertIcon,
  ShieldIcon,
} from '@/components/security'
import { fetchSecuritySettings, fetchDeviceSessions } from '@/lib/data/fetchers'

export const metadata: Metadata = {
  title: 'Security | Paylio Demo',
  description:
    'Paylio security center — biometric login, two-factor authentication, transaction PIN, and real-time device management.',
}

export default async function SecurityPage() {
  const [settings, sessions] = await Promise.all([fetchSecuritySettings(), fetchDeviceSessions()])

  return (
    <PageShell>
      <div className="flex flex-col gap-1 pb-6 pt-2">
        <div className="mb-4 px-5">
          <h1 className="text-xl font-bold text-white">Security</h1>
          <p className="mt-1 text-sm text-white/55">
            Your money, protected. Here&rsquo;s exactly how.
          </p>
        </div>

        <SectionLabel>Authentication</SectionLabel>
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
          <SecurityRow
            icon={<FingerprintIcon />}
            label="Biometric Login"
            description="Use Face ID or fingerprint to sign in"
            checked={settings.biometricEnabled}
          />
          <SecurityRow
            icon={<ShieldCheckIcon />}
            label="Two-Factor Authentication"
            description="Extra layer of security on every login"
            checked={settings.twoFactorEnabled}
          />
          <SecurityRow
            icon={<KeyIcon />}
            label="Transaction PIN"
            description="Required before every transfer"
            checked={settings.transactionPin}
          />
        </div>

        <SectionLabel>Alerts</SectionLabel>
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
          <SecurityRow
            icon={<BellIcon />}
            label="Login Alerts"
            description="Notify me of every new device login"
            checked={settings.loginAlerts}
          />
          <SecurityRow
            icon={<AlertIcon />}
            label="Large Transfer Alert"
            description={`Alert me for transfers above ₦${(settings.largeTransferThreshold / 1000).toFixed(0)}K`}
            checked={settings.largeTransferAlert}
          />
        </div>

        <SectionLabel>Active Devices</SectionLabel>
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
          {sessions.map((session) => (
            <DeviceCard key={session.id} session={session} />
          ))}
        </div>

        <div className="mx-5 mt-2 flex items-start gap-2.5 rounded-2xl border border-teal/[0.15] bg-teal/[0.05] px-4 py-3">
          <ShieldIcon />
          <p className="text-xs leading-relaxed text-white/60">
            New device detected. Confirm it&rsquo;s you before continuing.
          </p>
        </div>
      </div>
    </PageShell>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-5 pb-2 pt-4 text-xs font-semibold uppercase tracking-[0.07em] text-white/50">
      {children}
    </p>
  )
}
