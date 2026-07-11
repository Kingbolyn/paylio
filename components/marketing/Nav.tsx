'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home',       href: '/'           },
  { label: 'Product',    href: '/product'     },
  { label: 'Features',   href: '/features'    },
  { label: 'Security',   href: '/security'    },
  { label: 'Cards',      href: '/cards'       },
  { label: 'Insights',   href: '/insights'    },
  { label: 'Developers', href: '/developers'  },
  { label: 'About',      href: '/about'       },
]

export default function Nav() {
  const pathname   = usePathname()
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navy-deep/95 backdrop-blur-md border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shadow-teal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2Z" fill="white" fillOpacity="0.9"/>
                <path d="M9 12l2 2.5 4-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight">Paylio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                    active
                      ? 'text-teal'
                      : 'text-white/55 hover:text-white/90 hover:bg-white/[0.05]'
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
              className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all duration-150 shadow-teal active:scale-[0.97]"
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/[0.07] transition-colors"
            >
              <span className={cn('w-5 h-[1.5px] bg-white/70 rounded-full transition-all duration-200', open && 'rotate-45 translate-y-[6.5px]')} />
              <span className={cn('w-5 h-[1.5px] bg-white/70 rounded-full transition-all duration-200', open && 'opacity-0')} />
              <span className={cn('w-5 h-[1.5px] bg-white/70 rounded-full transition-all duration-200', open && '-rotate-45 -translate-y-[6.5px]')} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" />
          <nav
            className="absolute top-16 left-0 right-0 bg-navy-mid border-b border-white/[0.08] px-5 py-4 flex flex-col gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150',
                    active
                      ? 'text-teal bg-teal/[0.08]'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-2 border-t border-white/[0.07] mt-2">
              <Link
                href="/demo/home"
                className="flex items-center justify-center h-11 rounded-full bg-teal text-navy text-sm font-bold hover:bg-teal-light transition-all"
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
