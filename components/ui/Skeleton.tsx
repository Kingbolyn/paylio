import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-shimmer bg-[length:200%_100%] animate-shimmer',
        className
      )}
    />
  )
}

export function SkeletonBalance() {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-14 w-52" />
      <Skeleton className="h-4 w-20" />
    </div>
  )
}

export function SkeletonTransaction() {
  return (
    <div className="flex items-center gap-3 px-5 py-3">
      <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
      <div className="flex-1 flex flex-col gap-2">
        <Skeleton className="h-3.5 w-32" />
        <Skeleton className="h-3 w-20" />
      </div>
      <Skeleton className="h-3.5 w-16" />
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="rounded-3xl bg-white/[0.05] border border-white/[0.08] p-5 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton className="h-8 w-36" />
      <div className="flex gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn('h-3.5', i === lines - 1 ? 'w-3/4' : 'w-full')}
        />
      ))}
    </div>
  )
}
