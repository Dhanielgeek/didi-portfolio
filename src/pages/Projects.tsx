
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { projects, type Project } from '../data'
import Reveal from '../components/Reval'

const FILTERS = [
  'All',
  'AI Images',
  'AI Videos',
  'Graphics',
  'Reels',
  'Videos',
] as const

type Filter = (typeof FILTERS)[number]

function matches(project: Project, filter: Filter): boolean {
  if (filter === 'All') return true

  if (filter === 'Videos') {
    return project.media.kind === 'video'
  }

  return project.channels.some((channel) => String(channel) === filter)
}


function Art({
  project,
  large = false,
}: {
  project: Project
  large?: boolean
}) {
  const { tone, client, title, channels: tags, media } = project
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={large ? 'modal-art' : 'project-art'}
      style={
        {
          '--art-bg': `linear-gradient(135deg, ${tone[0]}, ${tone[1]})`,
        } as CSSProperties
      }
    >
      {!failed && (media.kind === 'image' ? (
        <img
          src={media.src}
          alt={title}
          className="project-media-image"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <video
          src={media.src}
          className="project-media-video"
          muted
          playsInline
          autoPlay={!large}
          loop={!large}
          preload={large ? 'metadata' : 'none'}
          controls={large}
          onError={() => setFailed(true)}
        />
      ))}

      {failed && <span className="media-fallback" role="img" aria-label={`${title} media unavailable`}>Media unavailable</span>}

      <div className="art-overlay">
        <span className="art-label">
          {client} · {tags[0]}
        </span>

        <span className="art-title">{title}</span>

        {/* <span className="art-index">
          {year} / {project.id.slice(0, 2).toUpperCase()}
        </span> */}
      </div>
    </div>
  )
}



function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (project: Project) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="project-card"
      aria-label={`View ${project.title} project details`}
    >
      <Art project={project} />

      <div className="project-meta">
        <h3>{project.title}</h3>
        {/* <span className="project-arrow" aria-hidden="true">
          ↗
        </span> */}
      </div>

      <p className="project-client">{project.client}</p>
      <p className="project-result">{project.result}</p>
    </button>
  )
}


function Modal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="modal"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal-inner">
        <Art project={project} large />

        <div className="modal-copy">
          <button
            ref={closeRef}
            type="button"
            className="modal-close"
            onClick={onClose}
          >
            Close ×
          </button>

       

          <h3>{project.title}</h3>
          {/* <p>{project.summary}</p> */}
          <strong>{project.result}</strong>

          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          <p>{project.channels.join(' · ')}</p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [open, setOpen] = useState<Project | null>(null)

  const visible = projects.filter((project) => matches(project, filter))

  return (
    <section id="work" className="section section-dark">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="section-kicker">Selected work · 2024—26</p>

              <h2>Work with a point of view.</h2>

              <p className="section-intro" style={{ marginTop: 16 }}>
                A selection of campaigns, creative and growth work. Choose a
                category to explore.
              </p>
            </div>

            <div
              className="filters"
              role="group"
              aria-label="Filter projects"
            >
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="project-grid">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setOpen}
              />
            ))}
          </div>

          {visible.length === 0 && (
            <p>No projects in this category yet.</p>
          )}
        </Reveal>
      </div>

      {open && (
        <Modal
          project={open}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  )
}
