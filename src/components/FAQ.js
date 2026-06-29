import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'A basic 3-page site takes about 7 days. Standard projects are usually 2 weeks, and premium projects can take up to 30 days depending on features.',
  },
  {
    q: 'What\'s your pricing like?',
    a: 'I offer three packages starting at ₱5,000+. Every project is different, so I\'ll give you a clear quote after our first consultation.',
  },
  {
    q: 'Do you work with clients outside the Philippines?',
    a: 'Yes! I work with clients anywhere. Most of my clients are based in the Philippines, but I\'m open to international projects too.',
  },
  {
    q: 'What technologies do you use?',
    a: 'I mainly use React, Vue, Django, and Laravel. For business sites, I often use WordPress or custom HTML/CSS/JS depending on your needs.',
  },
  {
    q: 'How do we get started?',
    a: 'Just reach out via the contact form, WhatsApp, or Messenger. We\'ll set up a quick call or chat to discuss your project, then I\'ll send you a proposal.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section
      id="faq"
      className="relative border-b-4 border-black bg-white py-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            FAQ
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            COMMON
            <br />
            <span className="inline-block border-4 border-black bg-secondary px-6 font-black text-black -rotate-1">
              QUESTIONS
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="border-4 border-black bg-background shadow-hardMd transition-all duration-100"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-heading font-black uppercase tracking-tight text-black text-lg pr-4">
                  {faq.q}
                </span>
                <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border-4 border-black bg-secondary transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} strokeWidth={4} />
                </span>
              </button>
              {openIdx === idx && (
                <div className="border-t-4 border-black bg-white px-6 py-5">
                  <p className="font-heading font-bold leading-relaxed text-black">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
