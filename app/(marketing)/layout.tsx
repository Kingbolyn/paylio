import { Nav, Footer } from '@/components/marketing'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
