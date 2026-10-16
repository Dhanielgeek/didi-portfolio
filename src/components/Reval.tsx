import type { ReactNode } from 'react'
import { useInView } from '../Hooks/hooks'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** Gently brings a section into view as it enters the viewport. */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, seen } = useInView<HTMLDivElement>()
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal${seen ? ' is-visible' : ''} ${className}`}>{children}</div>
}
