export default function HomeLoading() {
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

      <div className="flex flex-col gap-6 px-5 pb-6 pt-2">
        {/* Balance card */}
        <div className="skeleton h-[196px] rounded-[28px]" />

        {/* Quick actions */}
        <div className="flex items-center justify-between px-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2.5">
              <div className="skeleton h-14 w-14 rounded-2xl" />
              <div className="skeleton h-2.5 w-10 rounded-full" />
            </div>
          ))}
        </div>

        {/* Section label */}
        <div className="skeleton h-3 w-36 rounded-full" />

        {/* Transaction rows */}
        {[...Array(7)].map((_, i) => (
          <div key={i} className="-mt-3 flex items-center gap-3.5">
            <div className="skeleton h-10 w-10 flex-shrink-0 rounded-2xl" />
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="skeleton h-3 w-28 rounded-full" />
              <div className="skeleton h-2.5 w-20 rounded-full" />
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <div className="skeleton h-3 w-16 rounded-full" />
              <div className="skeleton h-2.5 w-12 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
