import { facts, profile, services } from "../data";
import portrait from "../assets/myself.jpg.jpeg";
import Reveal from "../components/Reval";

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="wrap about-grid">
        <Reveal>
          <figure className="about-image">
            <img
              src={portrait}
              alt={`${profile.name} seated at a table, looking at the camera`}
              loading="lazy"
            />
            <figcaption>
              {profile.name} · Digital marketer
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100} className="about-copy">
          <p className="section-kicker">A LITTLE ABOUT ME</p>

          <h2>
            Part strategist, part storyteller, always curious about what makes
            things work.
          </h2>

          <p>
            I've always been drawn to the thinking behind the doing: why people
            respond to certain messages, what makes a relationship work, how an
            idea finds its voice, and what turns a good plan into something
            real.
          </p>

          <p>
            That curiosity has shaped the way I work. I enjoy asking questions,
            connecting dots, figuring things out and moving between the big
            picture and the little details. Sometimes that means developing a
            strategy; other times, it's refining a piece of writing, creating a
            visual, coordinating a project or finding a smarter way to get
            something done.
          </p>

          <p>
            I'm drawn to work that asks me to think, create, communicate and
            keep learning. I appreciate clarity, thoughtful collaboration and
            the kind of details that might go unnoticed but make all the
            difference.
          </p>

          <h3
            className="section-kicker"
            style={{ marginTop: 42 }}
          >
            How I can help
          </h3>

          <ul className="service-list">
            {services.map((s) => (
              <li key={s.title}>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>

          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="/resume.pdf"
            className="button button-main"
            style={{ marginTop: "40px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}