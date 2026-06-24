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
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            WHO IS
          </h2>
          <h2 className="font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="inline-block border-4 border-black bg-accent px-6 font-black text-white -rotate-1">
              FLORENCE?
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 font-heading font-bold leading-snug text-2xl sm:text-3xl">
              A{' '}
              <span className="inline-block border-4 border-black bg-accent px-3 py-1 font-black text-white">
                BSIT GRADUATE
              </span>{' '}
              FROM CARAGA STATE UNIVERSITY — CABADBARAN CAMPUS, WHO JUST CAN'T
              STICK TO ONE SKILL.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              BASED IN{' '}
              <span className="inline-block border-4 border-black bg-white px-3 py-1 font-black text-black">
                MAGALLANES, AGUSAN DEL NORTE
              </span>{' '}
              — CARAGA.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              I'VE DABBLED IN JAVA, SPRING BOOT, REACT, VUE, DJANGO, FLASK,
              LARAVEL, PHP, AND WHATEVER ELSE LOOKS INTERESTING. FULL STACK,
              BACKEND, FRONTEND — I DON'T PICK LANES. I JUST BUILD.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              WHAT DRIVES ME? AUTHENTICITY. I CHASE THINGS THAT FEEL REAL,
              HONEST, AND GENUINE — WHETHER IT'S CODE, DESIGN, OR A CONVERSATION.
              IF IT AUTHENTIC, I WANT TO UNDERSTAND IT, BREAK IT, AND REBUILD
              IT BETTER.
            </p>

            <p className="mb-6 font-heading font-bold leading-relaxed text-lg sm:text-xl">
              NEXT CHAPTER? TRAVEL. I WANT TO WALK THE STREETS OF MANILA, CLIMB
              THE MOUNTAINS OF THE CORDILLERAS, DIVE IN PALAWAN, AND THEN KEEP
              GOING — ACROSS THE PHILIPPINES AND AROUND THE WORLD.
            </p>

            <div className="mt-10 inline-block border-4 border-black bg-white px-6 py-5 shadow-hardMd rotate-[-1deg]">
              <p className="font-heading font-black uppercase tracking-wider text-lg sm:text-xl">
                "CURIOUS ABOUT ANYTHING THAT IS INTERESTING OR AUTHENTIC."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-4 border-black bg-white p-4 shadow-hardMd transition-all duration-200 hover:rotate-[-1deg] hover:shadow-hardLg">
              <img
                src={profileImg}
                alt="Florence Cris L. Solayao"
                className="block w-full border-4 border-black object-cover"
              />
            </div>

            <div className="mt-8 border-4 border-black bg-accent p-6 shadow-hardMd">
              <h3 className="font-heading font-black uppercase tracking-wider text-white text-xl">
                EDUCATION
              </h3>
              <div className="mt-4">
                <p className="font-heading font-black uppercase tracking-tight text-white text-2xl">
                  CARAGA STATE UNIVERSITY
                </p>
                <p className="font-heading font-bold uppercase tracking-wide text-white">
                  CABADBARAN CAMPUS
                </p>
              </div>
              <div className="mt-4 border-4 border-black bg-secondary px-4 py-3">
                <p className="text-center font-heading font-black uppercase tracking-widest text-black">
                  BS IN INFORMATION TECHNOLOGY
                </p>
                <p className="text-center font-heading font-bold uppercase tracking-wide text-sm">
                  CLASS OF 2026
                </p>
              </div>
            </div>

            <div className="mt-8 border-4 border-black bg-tertiary p-6 shadow-hardMd rotate-1">
              <h3 className="font-heading font-black uppercase tracking-wider text-black text-xl">
                PASSION
              </h3>
              <p className="mt-2 font-heading font-black uppercase text-2xl text-black">
                TRAVEL
              </p>
              <p className="mt-2 font-heading font-bold text-black">
                PHILIPPINES & BEYOND
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
