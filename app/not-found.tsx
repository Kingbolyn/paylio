import Link from 'next/link'
import { Nav, Footer } from '@/components/marketing'

export const metadata = {
  title: '404 — Paylio',
  description: 'This page does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy focus:shadow-teal"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-5">
          {/* Atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,200,170,0.07),transparent)]" />
          </div>

          <div className="relative max-w-lg text-center">
            {/* Large ghost number */}
            <p
              className="mb-6 select-none font-black leading-none"
              style={{
                fontSize: 'clamp(8rem, 20vw, 14rem)',
                background:
                  'linear-gradient(180deg, rgba(0,200,170,0.18) 0%, rgba(0,200,170,0.03) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              404
            </p>

            <h1 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Page not found.</h1>
            <p className="mx-auto mb-10 max-w-sm leading-relaxed text-white/45">
              This page does not exist or has been moved. The rest of Paylio is right where you left
              it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex h-11 items-center rounded-full bg-teal px-6 text-sm font-bold text-navy shadow-teal transition-all hover:bg-teal-light"
              >
                Back to Home
              </Link>
              <Link
                href="/demo/home"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:text-white"
              >
                Open Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
