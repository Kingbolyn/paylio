'use client'

import { useState } from 'react'
import { PageShell } from '@/components/layout'
import { PaymentCard, CardActions } from '@/components/cards'
import { mockCards } from '@/lib/data'

export default function CardsPage() {
  const [activeId, setActiveId] = useState(mockCards[0].id)
  const activeCard = mockCards.find((c) => c.id === activeId) ?? mockCards[0]

  return (
    <PageShell>
      <div className="flex flex-col gap-5 pt-2 pb-6">

        <div className="px-5">
          <h1 className="text-xl font-bold text-white">Cards</h1>
          <p className="text-sm text-white/40 mt-1">Manage your linked cards</p>
        </div>

        <div className="flex flex-col gap-3 px-5">
          {mockCards.map((card) => (
            <PaymentCard key={card.id} card={card} isActive={card.id === activeId} onSelect={setActiveId} />
          ))}
        </div>

        <div className="px-5">
          <p className="text-xs font-semibold text-white/35 uppercase tracking-[0.07em] mb-3">Card Actions</p>
          <CardActions card={activeCard} />
        </div>

        <div className="px-5">
          <button className="w-full h-14 rounded-3xl border border-dashed border-white/[0.14] flex items-center justify-center gap-2 text-white/35 hover:text-white/55 hover:border-white/25 transition-all duration-150 group">
            <span className="w-5 h-5 rounded-full border border-white/25 group-hover:border-white/40 flex items-center justify-center text-xs transition-all">
              +
            </span>
            <span className="text-sm font-medium">Add New Card</span>
          </button>
        </div>

      </div>
    </PageShell>
  )
}
