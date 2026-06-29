import React from 'react'
import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    title: 'Consult',
    desc: 'We talk about your business, goals, and what you need.',
    Icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Design',
    desc: 'I create a layout and visual direction for your approval.',
    Icon: Palette,
  },
  {
    num: '03',
    title: 'Build',
    desc: 'I develop your site with clean code and regular updates.',
    Icon: Code2,
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'We go live, test everything, and hand over the keys.',
    Icon: Rocket,
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-b-4 border-black bg-background py-24"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            Process
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            HOW I
            <br />
            <span className="inline-block border-4 border-black bg-secondary px-6 font-black text-black -rotate-1">
              WORK
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="relative">
              <div className="border-4 border-black bg-white p-6 shadow-hardMd transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-4 border-black bg-secondary">
                  <step.Icon size={24} strokeWidth={3} />
                </div>
                <p className="mb-2 font-heading font-black uppercase tracking-wider text-black text-sm">
                  Step {step.num}
                </p>
                <h3 className="mb-2 font-heading font-black uppercase tracking-tight text-black text-2xl">
                  {step.title}
                </h3>
                <p className="font-heading font-bold leading-relaxed text-black">
                  {step.desc}
                </p>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10 -translate-y-1/2">
                  <div className="flex h-8 w-8 items-center justify-center border-4 border-black bg-accent">
                    <span className="font-heading font-black text-white text-xs">→</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
