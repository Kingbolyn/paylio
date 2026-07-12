export default function CardsLoading() {
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

      <div className="flex flex-col gap-5 pb-6 pt-2">
        {/* Page title */}
        <div className="flex flex-col gap-1.5 px-5">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-3 w-40 rounded-full" />
        </div>

        {/* Payment cards */}
        <div className="flex flex-col gap-3 px-5">
          <div className="skeleton h-[160px] rounded-3xl" />
          <div className="skeleton h-[160px] rounded-3xl opacity-60" />
        </div>

        {/* Card Actions label */}
        <div className="px-5">
          <div className="skeleton mb-4 h-2.5 w-24 rounded-full" />
          {/* 4 action buttons */}
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton h-16 rounded-2xl" />
            ))}
          </div>
        </div>

        {/* Add card button */}
        <div className="px-5">
          <div className="skeleton h-14 rounded-3xl" />
        </div>
      </div>
    </div>
  )
}
