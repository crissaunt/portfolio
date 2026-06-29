import React from 'react'
import { GitFork, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    group: 'Java / Spring Boot',
    color: 'accent',
    span: 'md:col-span-2',
    items: [
      {
        title: 'Album App (Backend)',
        desc: 'A social platform where users can share photos, chat with friends, and track their mood. Built with Spring Boot, JWT authentication, and PostgreSQL.',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
        dir: 'album/album-app/',
      },
      {
        title: 'Demo REST API',
        desc: 'A lightweight REST API demo with Spring Boot, Spring WebMVC, and an in-memory database. Great for learning backend structure.',
        tags: ['Java', 'Spring Boot', 'REST API'],
        dir: 'demo/',
      },
    ],
  },
  {
    group: 'React',
    color: 'secondary',
    span: '',
    items: [
      {
        title: 'Album App (Frontend)',
        desc: 'The frontend for the social platform — includes login, photo feed, chat interface, and mood tracking. Built with React 19 and Vite.',
        tags: ['React', 'Vite', 'React Router'],
        dir: 'album/album-app/frontend/',
      },
      {
        title: 'Album FE',
        desc: 'A separate React frontend with Tailwind CSS. Includes auth, chat, feed, and reusable component library.',
        tags: ['React', 'Vite', 'Tailwind CSS'],
        dir: 'album/fe/',
      },
    ],
  },
  {
    group: 'Vue.js',
    color: 'tertiary',
    span: 'md:col-span-2',
    items: [
      {
        title: 'FBS Booking System',
        desc: 'A flight booking platform with real-time seat selection, payment processing, and an admin dashboard. Built with Vue 3 and Django.',
        tags: ['Vue 3', 'Django', 'Payments', 'Real-time'],
        dir: 'fbs-vue/',
      },
      {
        title: 'M.A.R.S La Union',
        desc: 'A municipal request management system for tracking resident requests, generating reports, and managing staff assignments.',
        tags: ['Vue 3', 'Django', 'Dashboard', 'Reports'],
        dir: 'M.A.R.S_Launion/',
      },
      {
        title: 'My Dream Place Hotel',
        desc: 'A hotel venue SPA booking page with room listings, amenities, and a clean responsive design.',
        tags: ['Vue 3', 'Vite', 'Tailwind CSS'],
        dir: 'hotel/',
      },
    ],
  },
  {
    group: 'Python / Django',
    color: 'accent',
    span: '',
    items: [
      {
        title: 'Queue Management',
        desc: 'A real-time queue management system for schools and businesses. Includes a dashboard, display screen, and student portal.',
        tags: ['Django', 'WebSocket', 'Redis', 'Dashboard'],
        dir: 'queue/',
      },
      {
        title: 'Practice Django',
        desc: 'A practice project exploring Django REST Framework, custom models, and API design patterns.',
        tags: ['Django', 'DRF', 'SQLite'],
        dir: 'practice_django/',
      },
    ],
  },
  {
    group: 'Python / Flask',
    color: 'secondary',
    span: '',
    items: [
      {
        title: 'IoT Water Level Monitor',
        desc: 'A web app for monitoring water levels in real time using sensor data. Built with Flask and SQLite.',
        tags: ['Flask', 'IoT', 'Real-time', 'SQLite'],
        dir: 'iot-flask/',
      },
      {
        title: 'Richard OCR Engine',
        desc: 'An OCR management app that extracts text from book images using Google Cloud Vision and spaCy NLP.',
        tags: ['Flask', 'OCR', 'NLP', 'Google Vision'],
        dir: 'richard/',
      },
      {
        title: 'Tailor Blueprint App',
        desc: 'A modular Flask app using the Blueprint pattern with a Tailwind CSS frontend.',
        tags: ['Flask', 'Blueprint', 'Tailwind CSS'],
        dir: 'tailor/',
      },
    ],
  },
  {
    group: 'PHP',
    color: 'tertiary',
    span: '',
    items: [
      {
        title: 'Laravel 13 App',
        desc: 'A full Laravel skeleton with Blade templates, Vite build pipeline, and Pest testing.',
        tags: ['PHP', 'Laravel', 'Blade', 'Vite'],
        dir: 'laravel-project/',
      },
      {
        title: 'User Auth System',
        desc: 'A secure registration and login system with OTP verification, password reset, and an admin dashboard.',
        tags: ['PHP', 'MySQL', 'PHPMailer', 'Security'],
        dir: 'solayao107/',
      },
    ],
  },
  {
    group: 'Business Websites',
    color: 'secondary',
    span: '',
    items: [
      {
        title: 'Sample Business Website',
        desc: 'A modern restaurant landing page with menu, gallery, and contact form. Built to show local businesses what is possible with a clean, responsive design.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
        dir: '#',
      },
    ],
  },
]

const colorMap = {
  accent: {
    header: 'bg-accent',
    tag: 'bg-accent text-white',
    btn: 'bg-accent hover:bg-accent',
    label: 'text-accent',
  },
  secondary: {
    header: 'bg-secondary',
    tag: 'bg-secondary text-black',
    btn: 'bg-secondary hover:bg-secondary',
    label: 'text-secondary',
  },
  tertiary: {
    header: 'bg-tertiary',
    tag: 'bg-tertiary text-black',
    btn: 'bg-tertiary hover:bg-tertiary',
    label: 'text-tertiary',
  },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-b-4 border-black bg-tertiary py-24"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <span className="inline-block border-4 border-black bg-accent px-5 py-2 font-heading font-black uppercase tracking-widest text-white shadow-hard">
            Projects
          </span>
          <h2 className="mt-4 font-heading font-black uppercase leading-[0.85] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black">
            THINGS I'VE
            <br />
            <span className="inline-block border-4 border-black bg-secondary px-6 font-black text-black rotate-1">
              BUILT
            </span>
          </h2>
        </div>

        {PROJECTS.map((group, gIdx) => {
          const colors = colorMap[group.color]
          return (
            <div key={group.group} className="mb-12 last:mb-0">
              <div className="mb-6 inline-block border-4 border-black bg-white px-6 py-3 shadow-hard">
                <h3 className={`font-heading font-black uppercase tracking-wider text-black text-xl ${colors.label}`}>
                  {group.group}
                </h3>
              </div>

              <div className={`grid gap-6 ${group.span || 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {group.items.map((project, pIdx) => (
                  <div
                    key={project.title}
                    className={`group border-4 border-black bg-white p-6 shadow-hardMd transition-all duration-100 hover:-translate-y-1 hover:shadow-hardLg ${pIdx % 3 === 1 ? 'lg:translate-y-6' : ''}`}
                  >
                    <div className="mb-4 inline-block border-4 border-black bg-secondary px-4 py-2">
                      <h4 className="font-heading font-black uppercase tracking-tight text-black text-lg">
                        {project.title}
                      </h4>
                    </div>
                    <p className="mb-4 font-heading font-bold leading-relaxed text-black">
                      {project.desc}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-block border-2 border-black px-3 py-1 font-heading font-bold uppercase tracking-wider text-xs ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xs font-bold uppercase tracking-wider text-black">
                        {project.dir}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href="#0"
                          className="inline-flex items-center gap-2 border-4 border-black bg-white px-3 py-2 font-heading font-black uppercase tracking-wider text-black shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                          <ExternalLink size={14} strokeWidth={4} />
                          View Live
                        </a>
                        <a
                          href="#0"
                          className="inline-flex items-center gap-2 border-4 border-black bg-accent px-3 py-2 font-heading font-black uppercase tracking-wider text-white shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                          <GitFork size={14} strokeWidth={4} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
