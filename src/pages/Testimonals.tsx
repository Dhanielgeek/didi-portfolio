import { useState } from 'react'
import { testimonials } from '../data'
import Reveal from '../components/Reval'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  if (testimonials.length === 0) return null
  const current = testimonials[index]
  return <section id="testimonials" className="section section-light"><div className="wrap"><Reveal><div className="section-head"><div><p className="section-kicker">Reviews</p><h2>Good work is a team effort.</h2></div></div></Reveal><Reveal delay={100}><div className="testimonial-grid"><ul className="quote-list">{testimonials.map((t, i) => <li key={t.name}><button type="button" onClick={() => setIndex(i)} aria-current={index === i}><span>{t.name}<small>{t.role}</small></span><span aria-hidden="true">{index === i ? '↗' : '＋'}</span></button></li>)}</ul><blockquote key={index}><p className="quote-text">“{current.quote}”</p><footer className="quote-by">{current.name} · {current.role}</footer></blockquote></div></Reveal></div></section>
}
