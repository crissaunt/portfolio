import React from 'react'
import profileImg from '../image/SOLAYAO, FLORENCE addfree.jpg'

export default function About() {
  return (
    <section
      id="about"
      className="relative border-b-4 border-black bg-secondary py-24"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            About
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
            WHO IS
          </h2>
          <h2 className="font-heading font-black uppercase leading-[0.85] text-5xl sm:text-5xl md:text-6xl lg:text-6xl">
            <span className="inline-block border-4 border-black bg-accent px-6 font-black text-white -rotate-1">
              FLORENCE?
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 font-heading font-bold leading-snug text-xl sm:text-2xl">
              A{' '}
              <span className="inline-block border-4 border-black bg-accent px-3 py-1 font-black text-white">
                BSIT GRADUATE
              </span>{' '}
              FROM CARAGA STATE UNIVERSITY — CABADBARAN CAMPUS.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              Based in Magallanes, Agusan del Norte — Caraga.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              I've worked with Java, Spring Boot, React, Vue, Django, Flask, Laravel, and PHP. Full stack, backend, frontend — I build what your business needs.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              What drives me? Authenticity. I chase things that feel real, honest, and genuine — whether it's code, design, or a conversation. If it's authentic, I want to understand it, break it, and rebuild it better.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              When I'm not coding, I love traveling across the Philippines and exploring new places.
            </p>

            <div className="mt-10 inline-block border-4 border-black bg-white px-6 py-5 shadow-hardMd rotate-[-1deg]">
              <p className="font-heading font-black uppercase tracking-wider text-sm sm:text-lg">
                "Curious about anything that is interesting or authentic."
              </p>
            </div>

            <div className="mt-8 inline-block border-4 border-black bg-accent px-6 py-5 shadow-hardMd rotate-1">
              <p className="font-heading font-black text-white text-sm sm:text-lg">
                I've built booking systems, management tools, and web apps — and I'm ready to build yours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-4 border-black bg-white p-4 shadow-hardMd transition-all duration-200 hover:rotate-[-1deg] hover:shadow-hardLg">
              <img
                src={profileImg}
                alt="Florence Cris Solayao - Web Developer from Magallanes, Agusan del Norte, Caraga Philippines"
                className="block w-full border-4 border-black object-cover"
              />
            </div>

            <div className="mt-8 border-4 border-black bg-accent p-6 shadow-hardMd">
              <h3 className="font-heading font-black uppercase tracking-wider text-white text-xl">
                Education
              </h3>
              <div className="mt-4">
                <p className="font-heading font-black uppercase tracking-tight text-white text-2xl">
                  CARAGA STATE UNIVERSITY
                </p>
                <p className="font-heading font-bold uppercase tracking-wide text-white">
                  Cabadbaran Campus
                </p>
              </div>
              <div className="mt-4 border-4 border-black bg-secondary px-4 py-3">
                <p className="text-center font-heading font-black uppercase tracking-widest text-black">
                  BS in Information Technology
                </p>
                <p className="text-center font-heading font-bold uppercase tracking-wide text-sm">
                  Class of 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
