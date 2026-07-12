'use client'

import { useState } from 'react'
import { Recipient } from '@/types'
import {
  RecipientSearch,
  AmountEntry,
  TransferConfirm,
  TransferSuccess,
} from '@/components/transfer'
import PinPad from '@/components/demo/PinPad'
import { useDemoStore } from '@/lib/demo-store'

type Step = 'recipient' | 'amount' | 'confirm' | 'pin' | 'success'

export default function TransferPage() {
  const { pin, sendMoney, verifyPin } = useDemoStore()

  const [step, setStep] = useState<Step>('recipient')
  const [recipient, setRecipient] = useState<Recipient | null>(null)
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')
  const [pinError, setPinError] = useState('')

  function handleRecipientSelect(r: Recipient) {
    setRecipient(r)
    setStep('amount')
  }

  function handleAmountConfirm(a: string, n: string) {
    setAmount(a)
    setNote(n)
    setStep('confirm')
  }

  function handleConfirm() {
    // Require PIN if one is set
    if (pin) {
      setStep('pin')
    } else {
      completeSend()
    }
  }

  function handlePinEntry(entered: string) {
    if (verifyPin(entered)) {
      completeSend()
    } else {
      setPinError('Incorrect PIN — try again.')
      setTimeout(() => setPinError(''), 2400)
    }
  }

  function completeSend() {
    const numeric = parseFloat(amount) || 0
    if (recipient && numeric > 0) {
      sendMoney(numeric, recipient.name, 'transfer')
    }
    setStep('success')
  }

  function handleReset() {
    setStep('recipient')
    setRecipient(null)
    setAmount('')
    setNote('')
    setPinError('')
  }

  if (step === 'recipient')
    return <RecipientSearch onSelect={handleRecipientSelect} onBack={() => window.history.back()} />

  if (step === 'amount' && recipient)
    return (
      <AmountEntry
        recipient={recipient}
        onConfirm={handleAmountConfirm}
        onBack={() => setStep('recipient')}
      />
    )

  if (step === 'confirm' && recipient)
    return (
      <TransferConfirm
        recipient={recipient}
        amount={amount}
        note={note}
        onConfirm={handleConfirm}
        onBack={() => setStep('amount')}
      />
    )

  if (step === 'pin')
    return (
      <PinPad
        title="Confirm with PIN"
        subtitle={`Sending ${amount ? `₦${parseFloat(amount).toLocaleString()}` : ''} to ${recipient?.name ?? ''}`}
        onComplete={handlePinEntry}
        onCancel={() => setStep('confirm')}
        error={pinError}
      />
    )

  if (step === 'success' && recipient)
    return <TransferSuccess recipient={recipient} amount={amount} onSendAnother={handleReset} />

  return null
}
