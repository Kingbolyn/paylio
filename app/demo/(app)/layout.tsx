import { BottomNav } from '@/components/layout'

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="app-shell" className="w-full max-w-[430px] min-h-dvh mx-auto relative overflow-hidden bg-navy">
      {children}
      <BottomNav />
    </div>
  )
}
