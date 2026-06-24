import React from 'react'
import { GitFork, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-b-4 border-black bg-background py-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            Contact
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            LET'S
            <br />
            <span className="inline-block border-4 border-black bg-secondary px-6 font-black text-black -rotate-1">
              CONNECT
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label className="mb-3 block font-heading font-black uppercase tracking-wider text-sm text-black" htmlFor="name">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="YOUR NAME"
                  className="h-14 w-full border-4 border-black bg-white px-6 font-heading font-bold text-lg text-black placeholder:text-black/40 focus-visible:bg-secondary focus-visible:shadow-hard focus-visible:outline-none transition-all duration-100"
                />
              </div>
              <div className="mb-6">
                <label className="mb-3 block font-heading font-black uppercase tracking-wider text-sm text-black" htmlFor="email">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="h-14 w-full border-4 border-black bg-white px-6 font-heading font-bold text-lg text-black placeholder:text-black/40 focus-visible:bg-secondary focus-visible:shadow-hard focus-visible:outline-none transition-all duration-100"
                />
              </div>
              <div className="mb-6">
                <label className="mb-3 block font-heading font-black uppercase tracking-wider text-sm text-black" htmlFor="message">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  className="w-full rounded-none border-4 border-black bg-white px-6 py-4 font-heading font-bold text-lg text-black placeholder:text-black/40 focus-visible:bg-secondary focus-visible:shadow-hard focus-visible:outline-none transition-all duration-100 resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 border-4 border-black bg-accent px-8 py-4 font-heading font-black uppercase tracking-wider text-white shadow-hard transition-all duration-100 hover:shadow-hardLg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:w-auto"
              >
                <Send size={20} strokeWidth={4} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="border-4 border-black bg-white p-6 shadow-hardMd transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg">
              <div className="mb-4 inline-block border-4 border-black bg-accent px-6 py-3">
                <h3 className="font-heading font-black uppercase tracking-wider text-white text-lg">
                  FIND ME
                </h3>
              </div>
              <div className="space-y-4">
                <a
                  href="https://github.com/crissaunt"
                  className="flex items-center gap-4 border-4 border-black bg-secondary px-6 py-3 font-heading font-bold uppercase tracking-wider text-black transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard"
                >
                  <GitFork size={20} strokeWidth={4} />
                  GitHub
                </a>
                <a
                  href="mailto:solayaoflorence@email.com"
                  className="flex items-center gap-4 border-4 border-black bg-tertiary px-6 py-3 font-heading font-bold uppercase tracking-wider text-black transition-all duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard"
                >
                  <Mail size={20} strokeWidth={4} />
                  solayaoflorence@email.com
                </a>
                <span
                  className="flex items-center gap-4 border-4 border-black bg-white px-6 py-3 font-heading font-bold uppercase tracking-wider text-black"
                >
                  <MapPin size={20} strokeWidth={4} />
                  MAGALLANES, AGUSAN DEL NORTE — CARAGA
                </span>
              </div>
            </div>

            <div className="mt-8 border-4 border-black bg-black p-6 shadow-hardMd">
              <p className="font-heading font-bold uppercase tracking-wider text-white">
                AVAILABLE FOR
              </p>
              <p className="mt-2 font-heading font-black uppercase text-2xl text-secondary">
                FREELANCE & COLLABORATION
              </p>
              <p className="mt-2 font-heading font-bold text-white">
                LET'S BUILD SOMETHING TOGETHER.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
