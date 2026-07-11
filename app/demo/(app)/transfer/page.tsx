'use client'

import { useState } from 'react'
import { Recipient } from '@/types'
import {
  RecipientSearch,
  AmountEntry,
  TransferConfirm,
  TransferSuccess,
} from '@/components/transfer'

type Step = 'recipient' | 'amount' | 'confirm' | 'success'

export default function TransferPage() {
  const [step,      setStep]      = useState<Step>('recipient')
  const [recipient, setRecipient] = useState<Recipient | null>(null)
  const [amount,    setAmount]    = useState('')
  const [note,      setNote]      = useState('')

  function handleRecipientSelect(r: Recipient) {
    setRecipient(r)
    setStep('amount')
  }

  function handleAmountConfirm(a: string, n: string) {
    setAmount(a)
    setNote(n)
    setStep('confirm')
  }

  function handleSend()  { setStep('success') }

  function handleReset() {
    setStep('recipient')
    setRecipient(null)
    setAmount('')
    setNote('')
  }

  if (step === 'recipient')
    return <RecipientSearch onSelect={handleRecipientSelect} onBack={() => window.history.back()} />

  if (step === 'amount' && recipient)
    return <AmountEntry recipient={recipient} onConfirm={handleAmountConfirm} onBack={() => setStep('recipient')} />

  if (step === 'confirm' && recipient)
    return <TransferConfirm recipient={recipient} amount={amount} note={note} onConfirm={handleSend} onBack={() => setStep('amount')} />

  if (step === 'success' && recipient)
    return <TransferSuccess recipient={recipient} amount={amount} onSendAnother={handleReset} />

  return null
}
