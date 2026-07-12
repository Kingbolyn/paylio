'use client'

import { ReactNode, useState } from 'react'
import { Toggle } from '@/components/ui'

interface SecurityRowProps {
  icon: ReactNode
  label: string
  description: string
  checked: boolean
  onChange?: (v: boolean) => void
  readonly?: boolean
}

export default function SecurityRow({
  icon,
  label,
  description,
  checked,
  onChange,
  readonly = false,
}: SecurityRowProps) {
  const [value, setValue] = useState(checked)

  function handle(v: boolean) {
    setValue(v)
    onChange?.(v)
  }

  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-white/50">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-tight text-white">{label}</p>
        <p className="mt-0.5 text-xs leading-snug text-white/55">{description}</p>
      </div>
      {!readonly && <Toggle checked={value} onChange={handle} label={label} />}
      {readonly && (
        <span className="flex-shrink-0 rounded-full bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal">
          Active
        </span>
      )}
    </div>
  )
}
