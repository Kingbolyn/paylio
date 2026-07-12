export default function TransferLoading() {
  return (
    <div className="flex min-h-dvh w-full flex-col overflow-y-auto bg-navy pb-24">
      {/* Header row */}
      <div className="flex items-center gap-4 px-5 pb-3 pt-4">
        <div className="skeleton h-8 w-8 flex-shrink-0 rounded-full" />
        <div className="skeleton h-5 w-28 rounded-full" />
      </div>

      <div className="flex flex-col gap-5 px-5 pt-2">
        {/* Search bar */}
        <div className="skeleton h-12 w-full rounded-2xl" />

        {/* Frequent recipients label */}
        <div className="skeleton h-2.5 w-36 rounded-full" />

        {/* Avatar row */}
        <div className="flex items-center gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="skeleton h-12 w-12 rounded-full" />
              <div className="skeleton h-2.5 w-10 rounded-full" />
            </div>
          ))}
        </div>

        {/* All contacts label */}
        <div className="skeleton mt-2 h-2.5 w-24 rounded-full" />

        {/* Recipient rows */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="-mt-2 flex items-center gap-3.5">
            <div className="skeleton h-11 w-11 flex-shrink-0 rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="skeleton h-3 w-32 rounded-full" />
              <div className="skeleton h-2.5 w-24 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
