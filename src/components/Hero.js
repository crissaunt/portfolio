import React from 'react'
import { ArrowRight, Code, Zap, Square } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden border-b-4 border-black bg-background pt-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center justify-center px-6 py-16 lg:flex-row lg:py-0">
        <div className="relative z-10 w-full max-w-3xl">
          <div className="mb-6 inline-block border-4 border-black bg-secondary px-5 py-2 font-heading font-black uppercase tracking-widest text-black shadow-hard">
            BSIT Graduate 2026
          </div>

          <h1 className="font-heading font-black uppercase leading-[0.85] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block">FLORENCE</span>
            <span className="block relative inline-block -rotate-1">
              CRIS
              <span className="absolute -right-4 -top-3 text-accent" aria-hidden="true">✦</span>
            </span>
            <span className="block">L. SOLAYAO</span>
          </h1>

          <p className="mt-8 max-w-2xl font-heading font-bold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl">
            BSIT Graduate ·{' '}
            <span className="inline-block border-4 border-black bg-accent px-4 py-1 font-black text-white">
              FULL STACK
            </span>{' '}
            <span className="-rotate-1 inline-block border-4 border-black bg-tertiary px-4 py-1 font-black text-black">
              WEB DEV
            </span>
          </p>

          <p className="mt-6 max-w-xl font-heading font-bold leading-snug text-xl sm:text-2xl">
            I build modern web apps that solve real problems.{' '}
            Clean code. Reliable delivery. Ready to build yours.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 border-4 border-black bg-accent px-8 py-4 font-heading font-black uppercase tracking-wider text-white shadow-hard transition-all duration-100 hover:shadow-hardLg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              VIEW PROJECTS
              <ArrowRight size={20} strokeWidth={4} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border-4 border-black bg-white px-8 py-4 font-heading font-black uppercase tracking-wider text-black shadow-hard transition-all duration-100 hover:bg-secondary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              HIRE ME
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex w-full max-w-lg flex-col items-center gap-6 lg:mt-0">
          <div className="border-4 border-black bg-white p-8 shadow-hardMd transition-all duration-200 hover:-translate-y-2 hover:shadow-hardLg">
            <p className="text-center font-heading font-black uppercase leading-none text-4xl sm:text-5xl">
              BUILD
            </p>
            <p className="text-center font-heading font-black uppercase leading-none text-4xl sm:text-5xl text-accent">
              WITH ME
            </p>
          </div>

          <div className="border-4 border-black bg-accent px-6 py-4 shadow-hard">
            <p className="font-heading font-black uppercase tracking-widest text-white text-center">
              OPEN FOR WORK
            </p>
          </div>

          <div className="border-4 border-black bg-secondary px-6 py-4 shadow-hard rotate-1">
            <p className="font-heading font-black uppercase tracking-wider text-black">
              REACT · NODE · PYTHON · PHP
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-24 left-8 hidden lg:block">
        <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-secondary text-black shadow-hard animate-wiggle">
          <Code size={32} strokeWidth={3} />
        </div>
      </div>
      <div className="absolute bottom-32 right-12 hidden lg:block">
        <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-white shadow-hard animate-float-slow">
          <Zap size={24} strokeWidth={3} fill="white" />
        </div>
      </div>
      <div className="absolute top-40 right-1/4 hidden lg:block">
        <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-tertiary text-black shadow-hard animate-spin-slow">
          <Square size={20} strokeWidth={4} fill="black" />
        </div>
      </div>
    </section>
  )
}
