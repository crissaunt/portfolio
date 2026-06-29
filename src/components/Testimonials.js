import React, { useState } from 'react'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'Florence delivered our restaurant website on time and it looks amazing. Our customers love the new online menu.',
    name: 'Maria Santos',
    role: 'Owner, Lola\'s Eatery',
  },
  {
    quote: 'Professional, responsive, and easy to work with. The booking system she built saved us hours every week.',
    name: 'Jose Ramirez',
    role: 'Manager, Caraga Auto Shop',
  },
  {
    quote: 'I was impressed by how she explained everything in plain English. No tech jargon — just results.',
    name: 'Prof. Ana Reyes',
    role: 'BSIT Program Head, CSU Cabadbaran',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="testimonials"
      className="relative border-b-4 border-black bg-tertiary py-24"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            WHAT
            <br />
            <span className="inline-block border-4 border-black bg-white px-6 font-black text-black -rotate-1">
              CLIENTS SAY
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              className={`border-4 border-black bg-white p-6 shadow-hardMd transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg ${
                idx === active ? 'ring-4 ring-black' : ''
              }`}
              onClick={() => setActive(idx)}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    strokeWidth={3}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-6 font-heading font-bold leading-relaxed text-black text-lg">
                "{t.quote}"
              </p>
              <div className="border-t-2 border-black pt-4">
                <p className="font-heading font-black uppercase tracking-tight text-black">
                  {t.name}
                </p>
                <p className="font-heading font-bold text-black text-sm">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
