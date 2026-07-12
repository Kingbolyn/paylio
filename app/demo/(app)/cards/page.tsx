'use client'

import { useState } from 'react'
import { PageShell } from '@/components/layout'
import { PaymentCard, CardActions } from '@/components/cards'
import { mockCards } from '@/lib/data'

export default function CardsPage() {
  const [activeId, setActiveId] = useState(mockCards[0]!.id)
  const activeCard = mockCards.find((c) => c.id === activeId) ?? mockCards[0]!

  return (
    <PageShell>
      <div className="flex flex-col gap-5 pb-6 pt-2">
        <div className="px-5">
          <h1 className="text-xl font-bold text-white">Cards</h1>
          <p className="mt-1 text-sm text-white/55">Manage your linked cards</p>
        </div>

        <div className="flex flex-col gap-3 px-5">
          {mockCards.map((card) => (
            <PaymentCard
              key={card.id}
              card={card}
              isActive={card.id === activeId}
              onSelect={setActiveId}
            />
          ))}
        </div>

        <div className="px-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.07em] text-white/50">
            Card Actions
          </p>
          <CardActions card={activeCard} />
        </div>

        <div className="px-5">
          <button className="group flex h-14 w-full items-center justify-center gap-2 rounded-3xl border border-dashed border-white/[0.14] text-white/35 transition-all duration-150 hover:border-white/25 hover:text-white/55">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25 text-xs transition-all group-hover:border-white/40">
              +
            </span>
            <span className="text-sm font-medium">Add New Card</span>
          </button>
        </div>
      </div>
    </PageShell>
  )
}
