export default function SecurityLoading() {
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

      <div className="flex flex-col gap-1 pb-6 pt-2">
        {/* Page title */}
        <div className="mb-4 flex flex-col gap-1.5 px-5">
          <div className="skeleton h-6 w-24 rounded-full" />
          <div className="skeleton h-3 w-48 rounded-full" />
        </div>

        {/* Section: Authentication */}
        <div className="skeleton mx-5 mb-3 mt-4 h-2.5 w-28 rounded-full" />
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4">
              <div className="skeleton h-10 w-10 flex-shrink-0 rounded-2xl" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="skeleton h-3 w-32 rounded-full" />
                <div className="skeleton h-2.5 w-44 rounded-full" />
              </div>
              <div className="skeleton h-7 w-12 flex-shrink-0 rounded-full" />
            </div>
          ))}
        </div>

        {/* Section: Alerts */}
        <div className="skeleton mx-5 mb-3 mt-6 h-2.5 w-16 rounded-full" />
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4">
              <div className="skeleton h-10 w-10 flex-shrink-0 rounded-2xl" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="skeleton h-3 w-28 rounded-full" />
                <div className="skeleton h-2.5 w-40 rounded-full" />
              </div>
              <div className="skeleton h-7 w-12 flex-shrink-0 rounded-full" />
            </div>
          ))}
        </div>

        {/* Section: Active Devices */}
        <div className="skeleton mx-5 mb-3 mt-6 h-2.5 w-28 rounded-full" />
        <div className="mx-5 divide-y divide-white/[0.06] overflow-hidden rounded-3xl border border-white/[0.07]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-3.5 px-5 py-4">
              <div className="skeleton h-10 w-10 flex-shrink-0 rounded-2xl" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="skeleton h-3 w-28 rounded-full" />
                <div className="skeleton h-2.5 w-36 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
