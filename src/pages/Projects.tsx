import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { projects, type Project } from '../data'
import Reveal from '../components/Reval'

const FILTERS = ['All', 'Video', 'Paid social', 'Search', 'Email', 'SEO'] as const
type Filter = (typeof FILTERS)[number]
function matches(p: Project, f: Filter) { return f === 'All' || (f === 'Video' ? p.media.kind === 'video' : p.channels.includes(f)) }
function Art({ project, large = false }: { project: Project; large?: boolean }) {
  const { tone, client, title, year, channels: tags } = project
  return <div className={large ? 'modal-art' : 'project-art'} style={{ '--art-bg': `linear-gradient(135deg,${tone[0]},${tone[1]})` } as CSSProperties}>
    <span className="art-label">{client} · {tags[0]}</span><span className="art-title">{title}</span><span className="art-index">{year} / {project.id.slice(0,2).toUpperCase()}</span>
  </div>
}
function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return <button type="button" onClick={() => onOpen(project)} className="project-card" aria-label={`View ${project.title} project details`}>
    <Art project={project}/><div className="project-meta"><h3>{project.title}</h3><span className="project-year">{project.year}</span></div><p className="project-client">{project.client}</p><p className="project-summary">{project.summary}</p><p className="project-result">{project.result} ↗</p>
  </button>
}
function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => { const previous = document.activeElement as HTMLElement | null; const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); document.body.style.overflow = 'hidden'; window.addEventListener('keydown', onKey); closeRef.current?.focus(); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); previous?.focus() } }, [onClose])
  return <div role="dialog" aria-modal="true" aria-label={project.title} className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}><div className="modal-inner"><Art project={project} large/><div className="modal-copy"><button ref={closeRef} type="button" className="modal-close" onClick={onClose}>Close ×</button><p className="section-kicker">{project.client} · {project.year}</p><h3>{project.title}</h3><p>{project.summary}</p><strong>{project.result}</strong><ul>{project.details.map((d) => <li key={d}>{d}</li>)}</ul><p>{project.channels.join(' · ')}</p></div></div></div>
}
export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const [open, setOpen] = useState<Project | null>(null)
  const visible = projects.filter((p) => matches(p, filter))
  return <section id="work" className="section section-dark"><div className="wrap"><Reveal><div className="section-head"><div><p className="section-kicker">Selected work · 2024—26</p><h2>Work with a point of view.</h2><p className="section-intro" style={{marginTop:16}}>A selection of campaigns, creative and growth work. Choose a category to explore.</p></div><div className="filters" role="group" aria-label="Filter projects">{FILTERS.map((f) => <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div></div></Reveal>
    <Reveal delay={100}><div className="project-grid">{visible.map((p) => <ProjectCard key={p.id} project={p} onOpen={setOpen}/>)}</div>{visible.length === 0 && <p>No projects in this category yet.</p>}</Reveal></div>{open && <Modal project={open} onClose={() => setOpen(null)}/>}</section>
}
