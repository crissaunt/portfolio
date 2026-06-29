import React, { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'PROCESS', href: '#process' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="inline-flex items-center gap-3 border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-tight text-white shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          FCS
          <ArrowRight size={16} strokeWidth={4} />
        </a>

        <ul className="hidden items-center gap-3 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-2 border-transparent px-3 py-2 font-heading font-bold uppercase tracking-wide text-black transition-all duration-100 hover:border-black hover:bg-secondary hover:shadow-hard"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-12 w-12 items-center justify-center border-4 border-black bg-white shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      {open && (
        <div className="border-t-4 border-black bg-background md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b-2 border-black px-6 py-4 font-heading font-bold uppercase tracking-wide text-black transition-all duration-100 hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
