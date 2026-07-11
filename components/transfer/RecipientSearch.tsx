'use client'

import { useState } from 'react'
import { Recipient } from '@/types'
import { Input } from '@/components/ui'
import { mockRecipients, recentRecipients } from '@/lib/data'
import RecipientCard from './RecipientCard'

interface RecipientSearchProps {
  onSelect: (r: Recipient) => void
  onBack:   () => void
}

export default function RecipientSearch({ onSelect, onBack }: RecipientSearchProps) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? mockRecipients.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.bankName.toLowerCase().includes(query.toLowerCase())
      )
    : mockRecipients

  return (
    <div className="flex flex-col min-h-dvh bg-navy">

      {/* Header */}
      <div className="flex items-center gap-4 px-5 pt-4 pb-3">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/[0.07] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.11] transition-all flex-shrink-0"
        >
          <BackIcon />
        </button>
        <h1 className="text-lg font-bold text-white">Send Money</h1>
      </div>

      {/* Search */}
      <div className="px-5 pb-4">
        <Input
          placeholder="Search name or bank..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClear={() => setQuery('')}
          leftIcon={<SearchIcon />}
          autoFocus
        />
      </div>

      <div className="flex-1 overflow-y-auto">

        {/* Recent — only shown when not searching */}
        {!query && recentRecipients.length > 0 && (
          <div className="mb-5">
            <p className="px-5 text-xs font-semibold text-white/35 uppercase tracking-[0.07em] mb-3">
              Recent
            </p>
            <div className="flex items-start gap-5 px-5 overflow-x-auto pb-1">
              {recentRecipients.map((r) => (
                <RecipientCard
                  key={r.id}
                  recipient={r}
                  onSelect={onSelect}
                  compact
                />
              ))}
            </div>
          </div>
        )}

        {/* All contacts / filtered results */}
        <div>
          <p className="px-5 text-xs font-semibold text-white/35 uppercase tracking-[0.07em] mb-1">
            {query ? `Results (${filtered.length})` : 'All Contacts'}
          </p>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-12 px-5">
              <p className="text-sm text-white/40 text-center">
                No contacts match &ldquo;{query}&rdquo;
              </p>
            </div>
          ) : (
            <div className="flex flex-col pb-24">
              {filtered.map((r) => (
                <RecipientCard
                  key={r.id}
                  recipient={r}
                  onSelect={onSelect}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
