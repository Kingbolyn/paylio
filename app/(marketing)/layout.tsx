import { Nav, Footer } from '@/components/marketing'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-navy text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy focus:shadow-teal"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
