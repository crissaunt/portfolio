import React from 'react'
import { GitFork, Globe, Mail, Heart, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black">
      <div className="absolute inset-0 bg-dot-grid opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <a
              href="#hero"
              className="inline-block border-4 border-white bg-accent px-5 py-2 font-heading font-black uppercase tracking-tight text-white shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              FCS
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/crissaunt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 font-heading font-black uppercase tracking-wider text-black shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <GitFork size={16} strokeWidth={4} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/florence-solayao-5395a4375/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 font-heading font-black uppercase tracking-wider text-black shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <Globe size={16} strokeWidth={4} />
              LinkedIn
            </a>
            <a
              href="https://wa.me/639925450721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 font-heading font-black uppercase tracking-wider text-black shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <MessageCircle size={16} strokeWidth={4} />
              WhatsApp
            </a>
            <a
              href="mailto:solayaoflorence@gmail.com"
              className="inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 font-heading font-black uppercase tracking-wider text-black shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <Mail size={16} strokeWidth={4} />
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-white pt-8 text-center">
          <p className="flex items-center justify-center gap-2 font-heading font-black uppercase tracking-wider text-white text-xs">
            &copy; 2026 FLORENCE CRIS L. SOLAYAO · BUILT WITH
            <Heart size={14} strokeWidth={4} className="text-accent fill-accent" />
            AND REACT
          </p>
        </div>
      </div>
    </footer>
  )
}
