import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import AppHeader from './AppHeader'

interface PageShellProps {
  children: ReactNode
  showHeader?: boolean
  headerTitle?: string
  padBottom?: boolean
  className?: string
  scrollable?: boolean
}

export default function PageShell({
  children,
  showHeader = true,
  padBottom = true,
  className,
  scrollable = true,
}: PageShellProps) {
  return (
    <div
      className={cn(
        'flex min-h-dvh w-full flex-col bg-navy',
        scrollable ? 'overflow-y-auto overscroll-contain' : 'overflow-hidden',
        className
      )}
    >
      {showHeader && <AppHeader />}

      <main id="main-content" className={cn('flex flex-1 flex-col', padBottom && 'pb-24 lg:pb-8')}>
        {children}
      </main>
    </div>
  )
}
