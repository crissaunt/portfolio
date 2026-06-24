import React from 'react'
import { GitFork } from 'lucide-react'

const PROJECTS = [
  {
    group: 'Java / Spring Boot',
    color: 'accent',
    span: 'md:col-span-2',
    items: [
      {
        title: 'Album App (Backend)',
        desc: 'Full-stack social app backend built with Spring Boot 3.4, Spring Security, JWT auth, JPA, and PostgreSQL. Features chat, compliments, mood tracking, and user management.',
        tags: ['Java', 'Spring Boot', 'JPA', 'JWT', 'PostgreSQL'],
        dir: 'album/album-app/',
      },
      {
        title: 'Demo REST API',
        desc: 'Lightweight REST API with Spring Boot 4.0, Spring WebMVC, Spring Data JDBC, and H2 in-memory database.',
        tags: ['Java', 'Spring Boot', 'JDBC', 'H2'],
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
        desc: 'React 19 frontend for the Album App with Vite, React Router, and full auth/chat/feed UI integration.',
        tags: ['React', 'Vite', 'React Router'],
        dir: 'album/album-app/frontend/',
      },
      {
        title: 'Album FE',
        desc: 'Separate React 18 frontend with Vite and Tailwind CSS. Includes auth, chat, feed, hero, login, and register components.',
        tags: ['React', 'Vite', 'Tailwind CSS', 'lucide-react'],
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
        desc: 'Full-stack flight booking platform. Vue 3 frontend with Pinia, Vue Router, Chart.js, Leaflet maps, and WebSockets. Django 6.0 backend with DRF, JWT, XGBoost ML predictions, and PayMongo payments.',
        tags: ['Vue 3', 'Django', 'DRF', 'Pinia', 'WebSocket', 'XGBoost'],
        dir: 'fbs-vue/',
      },
      {
        title: 'M.A.R.S La Union',
        desc: 'Municipal request management system. Vue 3 frontend with Pinia, Vue Router, Chart.js, and PDF generation. Django 6.0 backend with DRF, SimpleJWT, and PostgreSQL.',
        tags: ['Vue 3', 'Django', 'DRF', 'Pinia', 'Chart.js', 'PostgreSQL'],
        dir: 'M.A.R.S_Launion/',
      },
      {
        title: 'My Dream Place Hotel',
        desc: 'Hotel venue SPA built with Vue 3, Vite, and Tailwind CSS. Clean, responsive single-page interface.',
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
        desc: 'Real-time queue management system with Django 5.2, Channels (WebSockets), APScheduler, and Redis. Multi-app architecture with dashboard, display, survey, and student portals.',
        tags: ['Django', 'Channels', 'Redis', 'WebSocket', 'APScheduler'],
        dir: 'queue/',
      },
      {
        title: 'Practice Django',
        desc: 'Django 6.0 practice project with DRF integration, custom models, serializers, views, and URL routing with SQLite.',
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
        desc: 'Flask 3.0 IoT web app for water level monitoring with SQLAlchemy, CORS, and SQLite. Real-time sensor data visualization.',
        tags: ['Flask', 'SQLAlchemy', 'SQLite', 'IoT'],
        dir: 'iot-flask/',
      },
      {
        title: 'Richard OCR Engine',
        desc: 'Flask OCR management app integrating Google Cloud Vision, spaCy NLP, and Tesseract OCR for book image text extraction and analysis.',
        tags: ['Flask', 'Google Vision', 'spaCy', 'OCR'],
        dir: 'richard/',
      },
      {
        title: 'Tailor Blueprint App',
        desc: 'Modular Flask app using the Blueprint pattern with Tailwind CSS frontend. Clean app factory architecture.',
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
        desc: 'Full Laravel 13 skeleton with Blade templates, Vite build pipeline, Pest testing, and PHP 8.3.',
        tags: ['PHP', 'Laravel 13', 'Blade', 'Vite'],
        dir: 'laravel-project/',
      },
      {
        title: 'User Auth System',
        desc: 'Plain PHP registration/login system with OTP verification, password reset, security questions, and admin dashboard. MySQL database with PHPMailer.',
        tags: ['PHP', 'MySQL', 'PHPMailer', 'OTP'],
        dir: 'solayao107/',
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
                      <a
                        href="#0"
                        className="inline-flex items-center gap-2 border-4 border-black bg-accent px-4 py-2 font-heading font-black uppercase tracking-wider text-white shadow-hard transition-all duration-100 hover:shadow-hardMd active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                      >
                        <GitFork size={14} strokeWidth={4} />
                        CODE
                      </a>
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
