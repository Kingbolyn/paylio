import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import AppHeader from './AppHeader'

interface PageShellProps {
  children:       ReactNode
  showHeader?:    boolean
  headerTitle?:   string
  padBottom?:     boolean
  className?:     string
  scrollable?:    boolean
}

export default function PageShell({
  children,
  showHeader  = true,
  padBottom   = true,
  className,
  scrollable  = true,
}: PageShellProps) {
  return (
    <div
      className={cn(
        'flex flex-col w-full min-h-dvh bg-navy',
        scrollable ? 'overflow-y-auto overscroll-contain' : 'overflow-hidden',
        className
      )}
    >
      {showHeader && <AppHeader />}

      <main
        className={cn(
          'flex-1 flex flex-col',
          padBottom && 'pb-24'
        )}
      >
        {children}
      </main>
    </div>
  )
}
