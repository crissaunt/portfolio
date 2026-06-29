import React from 'react'
import { Check } from 'lucide-react'

const PRICING = [
  {
    name: 'Basic',
    price: '₱5,000+',
    desc: 'Perfect for small businesses just getting online.',
    features: [
      'Up to 3 pages',
      'Responsive design',
      'Contact form',
      '1 round of revisions',
      '7-day delivery',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Standard',
    price: '₱12,000+',
    desc: 'For growing businesses that need more features.',
    features: [
      'Up to 5 pages',
      'Basic SEO setup',
      'Google Maps integration',
      '2 rounds of revisions',
      '14-day delivery',
      '1 month support',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Premium',
    price: '₱25,000+',
    desc: 'Full-featured sites for established brands.',
    features: [
      'Up to 10 pages',
      'CMS integration',
      'Payment gateway (GCash/PayMongo)',
      'Analytics dashboard',
      '3 rounds of revisions',
      '30-day delivery',
      '3 months support',
    ],
    cta: 'Get Started',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative border-b-4 border-black bg-secondary py-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            Pricing
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            SIMPLE
            <br />
            <span className="inline-block border-4 border-black bg-white px-6 font-black text-black -rotate-1">
              PRICING
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col border-4 border-black bg-white p-6 shadow-hardMd transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg ${
                plan.popular ? 'lg:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-black bg-accent px-4 py-1">
                  <p className="font-heading font-black uppercase tracking-wider text-white text-sm">
                    Most Popular
                  </p>
                </div>
              )}
              <div className="mb-4">
                <h3 className="font-heading font-black uppercase tracking-wider text-black text-xl">
                  {plan.name}
                </h3>
                <p className="mt-2 font-heading font-bold text-black text-lg">
                  {plan.desc}
                </p>
              </div>
              <div className="mb-6">
                <p className="font-heading font-black uppercase tracking-wider text-black text-4xl">
                  {plan.price}
                </p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center border-2 border-black bg-accent">
                      <Check size={12} strokeWidth={4} className="text-white" />
                    </span>
                    <span className="font-heading font-bold text-black">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center border-4 border-black bg-black px-6 py-4 font-heading font-black uppercase tracking-wider text-white shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
