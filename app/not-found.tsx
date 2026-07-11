import Link from 'next/link'

export const metadata = {
  title: '404 — Paylio',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy text-white flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="text-8xl font-black text-teal/15 leading-none mb-2">404</p>
        <h1 className="text-3xl font-black tracking-tight mb-4">Page not found.</h1>
        <p className="text-white/45 leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center h-11 px-6 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all shadow-teal"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:border-white/30 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
