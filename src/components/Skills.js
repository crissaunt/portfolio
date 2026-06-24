import React from 'react'

const SKILLS = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'ReactJS'],
  Backend: ['Django', 'Flask', 'PHP', 'Laravel', 'Java', 'Spring Boot'],
  Tools: ['Git', 'REST APIs', 'MySQL', 'PostgreSQL', 'Linux'],
}

const JAVA_SKILLS = ['Java', 'Spring Boot']

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b-4 border-black bg-background py-24"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            Skills
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            TECH
            <br />
            <span className="inline-block border-4 border-black bg-secondary px-6 font-black text-black -rotate-1">
              STACK
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items], idx) => (
            <div
              key={category}
              className={`border-4 border-black bg-white p-6 shadow-hardMd transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg ${
                idx === 0 ? 'lg:-translate-y-4' : ''
              }`}
            >
              <div className="mb-4 inline-block border-4 border-black bg-secondary px-4 py-2">
                <h3 className="font-heading font-black uppercase tracking-wider text-black text-xl">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => {
                  const isJava = JAVA_SKILLS.includes(skill)
                  return (
                    <span
                      key={skill}
                      className={`inline-flex items-center border-2 border-black px-3 py-1.5 font-heading font-bold uppercase tracking-wider text-sm transition-all duration-100 hover:scale-110 ${
                        isJava
                          ? 'bg-accent text-white'
                          : 'bg-white text-black hover:bg-secondary'
                      }`}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-block border-4 border-black bg-tertiary px-8 py-4 shadow-hard transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg">
            <p className="font-heading font-black uppercase tracking-wider text-black text-lg sm:text-xl">
              ★ CURRENTLY WORKING: SPRING BOOT ★
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
