'use client'

import { ReactNode, useState } from 'react'
import { Toggle } from '@/components/ui'

interface SecurityRowProps {
  icon:         ReactNode
  label:        string
  description:  string
  checked:      boolean
  onChange?:    (v: boolean) => void
  readonly?:    boolean
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
      <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center text-white/50 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white leading-tight">{label}</p>
        <p className="text-xs text-white/40 mt-0.5 leading-snug">{description}</p>
      </div>
      {!readonly && (
        <Toggle checked={value} onChange={handle} label={label} />
      )}
      {readonly && (
        <span className="text-xs font-semibold text-teal bg-teal/10 px-2.5 py-1 rounded-full flex-shrink-0">
          Active
        </span>
      )}
    </div>
  )
}
