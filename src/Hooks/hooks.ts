/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from 'react'

const REDUCED = '(prefers-reduced-motion: reduce)'

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(REDUCED).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(REDUCED)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

const IN_VIEW: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }

/** Flips `seen` to true the first time the element scrolls into view. */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const reduced = usePrefersReducedMotion()
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, IN_VIEW)
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, seen: seen || reduced }
}

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  const key = ids.join('|')

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}

export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}
