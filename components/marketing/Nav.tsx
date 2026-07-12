'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import PayloLogo from '@/components/marketing/PayloLogo'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Features', href: '/features' },
  { label: 'Security', href: '/security' },
  { label: 'Cards', href: '/cards' },
  { label: 'Insights', href: '/insights' },
  { label: 'Developers', href: '/developers' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-white/[0.07] bg-navy-deep/95 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-5 lg:h-[72px] lg:px-8">
          {/* Logo */}
          <Link href="/" aria-label="Paylio — home">
            <PayloLogo size={32} wordmark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150',
                    active ? 'text-teal' : 'text-white/55 hover:bg-white/[0.05] hover:text-white/90'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/demo/home"
              className="hidden h-9 items-center justify-center rounded-full bg-teal px-5 text-sm font-bold text-navy shadow-teal transition-all duration-150 hover:bg-teal-light active:scale-[0.97] sm:inline-flex"
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-white/[0.07] lg:hidden"
            >
              <span
                className={cn(
                  'h-[1.5px] w-5 rounded-full bg-white/70 transition-all duration-200',
                  open && 'translate-y-[6.5px] rotate-45'
                )}
              />
              <span
                className={cn(
                  'h-[1.5px] w-5 rounded-full bg-white/70 transition-all duration-200',
                  open && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'h-[1.5px] w-5 rounded-full bg-white/70 transition-all duration-200',
                  open && '-translate-y-[6.5px] -rotate-45'
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" />
          <nav
            id="mobile-nav"
            className="absolute left-0 right-0 top-16 flex flex-col gap-1 border-b border-white/[0.08] bg-navy-mid px-5 py-4"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150',
                    active
                      ? 'bg-teal/[0.08] text-teal'
                      : 'text-white/60 hover:bg-white/[0.05] hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-2 border-t border-white/[0.07] pt-2">
              <Link
                href="/demo/home"
                className="flex h-11 items-center justify-center rounded-full bg-teal text-sm font-bold text-navy transition-all hover:bg-teal-light"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
