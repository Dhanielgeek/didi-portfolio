import { useEffect, useState } from 'react'
import { profile } from '../data'
import { useActiveSection, useScrolled } from '../Hooks/hooks'

const links = [{ id: 'about', label: 'About' }, { id: 'work', label: 'Work' }, { id: 'testimonials', label: 'Reviews' }, { id: 'contact', label: 'Contact' }]

export default function Header() {
  const scrolled = useScrolled()
  const active = useActiveSection(links.map((l) => l.id))
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return <header className={`site-header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
    <div className="nav-wrap"><a href="#top" className="brand"><span className="brand-mark" aria-hidden="true">✳</span>{profile.name}</a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map((l) => <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'location' : undefined}>{l.label}</a>)}<a className="nav-cta" href="#contact">Start a project ↗</a></nav>
      <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>{open ? '×' : '☰'}</button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map((l) => <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a project ↗</a></nav>}
  </header>
}
