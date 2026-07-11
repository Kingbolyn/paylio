import { DeviceSession } from '@/types'
import { Badge } from '@/components/ui'
import { cn } from '@/lib/utils'

interface DeviceCardProps {
  session: DeviceSession
}

export default function DeviceCard({ session }: DeviceCardProps) {
  return (
    <div className={cn(
      'flex items-center gap-3.5 px-5 py-4',
      session.isCurrent && 'bg-teal/[0.04]'
    )}>
      <div className="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center text-white/45 flex-shrink-0">
        <DeviceIcon name={session.deviceName} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-white leading-tight truncate">
            {session.deviceName}
          </p>
          {session.isCurrent && (
            <Badge variant="positive" dot className="flex-shrink-0 text-[10px] py-0.5 px-2">
              This device
            </Badge>
          )}
        </div>
        <p className="text-xs text-white/40 mt-0.5">
          {session.location}&nbsp;·&nbsp;{session.lastActive}
        </p>
      </div>

      {!session.isCurrent && (
        <button className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors flex-shrink-0">
          Revoke
        </button>
      )}
    </div>
  )
}

function DeviceIcon({ name }: { name: string }) {
  const lower = name.toLowerCase()
  if (lower.includes('iphone') || lower.includes('android')) return <MobileIcon />
  if (lower.includes('mac') || lower.includes('windows') || lower.includes('chrome')) return <DesktopIcon />
  return <DesktopIcon />
}

function MobileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function DesktopIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}
