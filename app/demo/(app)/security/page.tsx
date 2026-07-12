'use client'

import { useState } from 'react'
import { PageShell } from '@/components/layout'
import { DeviceCard } from '@/components/security'
import {
  FingerprintIcon,
  ShieldCheckIcon,
  KeyIcon,
  BellIcon,
  AlertIcon,
  ShieldIcon,
} from '@/components/security'
import { useDemoStore } from '@/lib/demo-store'
import PinPad from '@/components/demo/PinPad'
import { mockDeviceSessions } from '@/lib/data'

type PinFlow = null | 'enter-new' | 'confirm-new' | 'verify-before-change'

export default function SecurityPage() {
  const {
    pin,
    setPin,
    clearPin,
    verifyPin,
    biometricEnabled,
    toggleBiometric,
    userName,
    setUserName,
  } = useDemoStore()

  const [pinFlow, setPinFlow] = useState<PinFlow>(null)
  const [newPin, setNewPin] = useState('')
  const [pinError, setPinError] = useState('')
  const [pinSuccess, setPinSuccess] = useState('')

  // Name editing
  const [editingName, setEditingName] = useState(false)
  const [nameInput, setNameInput] = useState(userName)

  // Biometric scan state for demo
  const [bioScan, setBioScan] = useState<'idle' | 'scanning'>('idle')

  // Alert toggles (local — demo only)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [largeTransferAlert, setLargeTransferAlert] = useState(true)

  /* ── PIN flow handlers ── */
  function startSetPin() {
    setPinError('')
    setPinFlow('enter-new')
  }

  function handleEnterNew(entered: string) {
    setNewPin(entered)
    setPinFlow('confirm-new')
  }

  function handleConfirmNew(entered: string) {
    if (entered === newPin) {
      setPin(entered)
      setPinFlow(null)
      setNewPin('')
      setPinSuccess('PIN set successfully.')
      setTimeout(() => setPinSuccess(''), 3000)
    } else {
      setPinError("PINs don't match — try again.")
      setTimeout(() => {
        setPinError('')
        setPinFlow('enter-new')
      }, 2000)
    }
  }

  function startRemovePin() {
    setPinFlow('verify-before-change')
  }

  function handleVerifyBeforeChange(entered: string) {
    if (verifyPin(entered)) {
      clearPin()
      setPinFlow(null)
      setPinSuccess('PIN removed.')
      setTimeout(() => setPinSuccess(''), 3000)
    } else {
      setPinError('Incorrect PIN.')
      setTimeout(() => setPinError(''), 2200)
    }
  }

  /* ── Biometric sim ── */
  function handleBiometricToggle() {
    if (biometricEnabled) {
      toggleBiometric()
      return
    }
    setBioScan('scanning')
    setTimeout(() => {
      toggleBiometric()
      setBioScan('idle')
    }, 1500)
  }

  /* ── Name save ── */
  function saveName() {
    const trimmed = nameInput.trim()
    if (trimmed) setUserName(trimmed)
    setEditingName(false)
  }

  /* ── PIN overlay screens ── */
  if (pinFlow === 'enter-new')
    return (
      <PinPad
        title={pin ? 'Enter new PIN' : 'Set your PIN'}
        subtitle="Choose a 4-digit PIN for your account"
        onComplete={handleEnterNew}
        onCancel={() => setPinFlow(null)}
        error={pinError}
      />
    )

  if (pinFlow === 'confirm-new')
    return (
      <PinPad
        title="Confirm PIN"
        subtitle="Re-enter the same 4 digits"
        onComplete={handleConfirmNew}
        onCancel={() => setPinFlow(null)}
        error={pinError}
      />
    )

  if (pinFlow === 'verify-before-change')
    return (
      <PinPad
        title="Enter current PIN"
        subtitle="Verify your identity to remove PIN"
        onComplete={handleVerifyBeforeChange}
        onCancel={() => setPinFlow(null)}
        error={pinError}
      />
    )

  return (
    <PageShell>
      <div className="flex flex-col gap-1 pb-6 pt-2 lg:max-w-xl">
        {/* Header */}
        <div className="mb-4 px-5">
          <h1 className="text-xl font-bold text-white">Security</h1>
          <p className="mt-1 text-sm text-white/55">
            Your money, protected. Here&rsquo;s exactly how.
          </p>
        </div>

        {/* ── Profile ── */}
        <SectionLabel>Profile</SectionLabel>
        <div className="mx-5 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03] px-4 py-4">
          <p className="mb-1 text-xs font-semibold text-white/40">Display name</p>
          {editingName ? (
            <div className="flex items-center gap-2">
              <input
                autoFocus
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && saveName()}
                className="flex-1 rounded-xl bg-white/[0.07] px-3 py-2 text-sm text-white outline-none"
                style={{ border: '1px solid rgba(20,184,166,0.4)' }}
              />
              <button
                onClick={saveName}
                className="rounded-xl bg-teal px-3 py-2 text-xs font-bold text-navy"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditingName(false)
                  setNameInput(userName)
                }}
                className="rounded-xl bg-white/[0.07] px-3 py-2 text-xs font-medium text-white/50"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{userName}</p>
              <button
                onClick={() => {
                  setEditingName(true)
                  setNameInput(userName)
                }}
                className="text-xs font-medium text-teal transition-colors hover:text-teal-light"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* ── Authentication ── */}
        <SectionLabel>Authentication</SectionLabel>
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
          {/* Biometric */}
          <div className="flex items-center gap-4 px-4 py-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
              <FingerprintIcon />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Biometric Login</p>
              <p className="text-xs text-white/40">
                {bioScan === 'scanning' ? 'Scanning...' : 'Face ID or fingerprint to sign in'}
              </p>
            </div>
            <button
              onClick={handleBiometricToggle}
              aria-pressed={biometricEnabled}
              className="relative h-6 w-11 rounded-full transition-all duration-300 focus:outline-none"
              style={{ background: biometricEnabled ? '#14B8A6' : 'rgba(255,255,255,0.12)' }}
            >
              <span
                className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300"
                style={{ left: biometricEnabled ? '22px' : '2px' }}
              />
            </button>
          </div>

          {/* 2FA */}
          <div className="flex items-center gap-4 px-4 py-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
              <ShieldCheckIcon />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Two-Factor Authentication</p>
              <p className="text-xs text-white/40">Extra layer of security on every login</p>
            </div>
            <span className="rounded-full bg-teal/10 px-2.5 py-1 text-[10px] font-bold text-teal">
              ON
            </span>
          </div>

          {/* Transaction PIN */}
          <div className="flex items-start gap-4 px-4 py-4">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
              <KeyIcon />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Transaction PIN</p>
              <p className="text-xs text-white/40">
                {pin ? 'Required before every transfer' : 'Not set — transfers skip PIN check'}
              </p>
              {pinSuccess && <p className="mt-1 text-xs font-medium text-teal">{pinSuccess}</p>}
            </div>
            <div className="flex flex-col items-end gap-1.5">
              {pin ? (
                <>
                  <button
                    onClick={startSetPin}
                    className="text-xs font-medium text-teal transition-colors hover:text-teal-light"
                  >
                    Change
                  </button>
                  <button
                    onClick={startRemovePin}
                    className="text-xs font-medium text-red-400 transition-colors hover:text-red-300"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <button
                  onClick={startSetPin}
                  className="rounded-full bg-teal/10 px-3 py-1.5 text-xs font-bold text-teal transition-all hover:bg-teal/20"
                >
                  Set PIN
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Alerts ── */}
        <SectionLabel>Alerts</SectionLabel>
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
          <ToggleRow
            icon={<BellIcon />}
            label="Login Alerts"
            description="Notify me of every new device login"
            checked={loginAlerts}
            onToggle={() => setLoginAlerts((v) => !v)}
          />
          <ToggleRow
            icon={<AlertIcon />}
            label="Large Transfer Alert"
            description="Alert me for transfers above ₦100K"
            checked={largeTransferAlert}
            onToggle={() => setLargeTransferAlert((v) => !v)}
          />
        </div>

        {/* ── Active Devices ── */}
        <SectionLabel>Active Devices</SectionLabel>
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.03]">
          {mockDeviceSessions.map((session) => (
            <DeviceCard key={session.id} session={session} />
          ))}
        </div>

        {/* Notice */}
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

function ToggleRow({
  icon,
  label,
  description,
  checked,
  onToggle,
}: {
  icon: React.ReactNode
  label: string
  description: string
  checked: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center gap-4 px-4 py-4">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="text-xs text-white/40">{description}</p>
      </div>
      <button
        onClick={onToggle}
        aria-pressed={checked}
        className="relative h-6 w-11 rounded-full transition-all duration-300 focus:outline-none"
        style={{ background: checked ? '#14B8A6' : 'rgba(255,255,255,0.12)' }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-300"
          style={{ left: checked ? '22px' : '2px' }}
        />
      </button>
    </div>
  )
}
