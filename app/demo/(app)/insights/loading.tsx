export default function InsightsLoading() {
  return (
    <div className="flex min-h-dvh w-full flex-col overflow-y-auto bg-navy pb-24">
      {/* App header */}
      <div className="flex items-center justify-between px-5 pb-3 pt-4">
        <div className="flex items-center gap-3">
          <div className="skeleton h-10 w-10 rounded-full" />
          <div className="flex flex-col gap-1.5">
            <div className="skeleton h-2.5 w-16 rounded-full" />
            <div className="skeleton h-3.5 w-24 rounded-full" />
          </div>
        </div>
        <div className="skeleton h-10 w-10 rounded-full" />
      </div>

      <div className="flex flex-col gap-5 px-5 pt-2">
        {/* Page title + period selector */}
        <div className="flex items-center justify-between">
          <div className="skeleton h-6 w-40 rounded-full" />
          <div className="skeleton h-8 w-28 rounded-full" />
        </div>

        {/* Summary stats: 2 cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="skeleton h-20 rounded-2xl" />
          <div className="skeleton h-20 rounded-2xl" />
        </div>

        {/* Donut chart */}
        <div className="flex items-center justify-center py-4">
          <div className="skeleton h-44 w-44 rounded-full" />
        </div>

        {/* Breakdown label */}
        <div className="skeleton h-2.5 w-24 rounded-full" />

        {/* Category rows */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="-mt-2 flex items-center gap-3">
            <div className="skeleton h-8 w-8 flex-shrink-0 rounded-xl" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="skeleton h-3 w-24 rounded-full" />
              <div className="skeleton h-2 w-full rounded-full" />
            </div>
            <div className="skeleton h-3 w-14 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
