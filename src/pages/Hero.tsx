
import { profile } from '../data'
import portrait from '../assets/myself.jpg.jpeg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">
            Independent creative professional · Lagos &amp; beyond
          </p>

          <h1>
            Good Results
            <br />
            start with <em>good questions.</em>
          </h1>

          <p className="hero-copy">
            I'm Ndidi Amaka. I work at the intersection of people, ideas and
            execution, turning thoughtful questions into meaningful work.
            Whether I'm shaping a strategy, building relationships, telling a
            story or experimenting with new technology, I'm interested in making
            things that communicate clearly, connect genuinely and serve a
            purpose.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-main">
              Explore selected work{' '}
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="button button-quiet button-talk"
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="availability">
            Open to meaningful projects, collaborations and new opportunities.
          </p>
        </div>

        <figure className="hero-portrait">
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
          />

          <figcaption className="portrait-caption">
            Strategy, creative &amp; performance
          </figcaption>
        </figure>
      </div>
    </section>
  )
}