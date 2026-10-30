import { profile } from '../data'
import SocialLinks from './SocialLinks'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">{profile.name}</a>
          <p className="footer-tagline">
            Campaigns, creative and growth work with a point of view.
          </p>
          <p className="availability">Available for new projects</p>
        </div>

        <nav className="footer-col" aria-label="Footer navigation">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href={`mailto:${profile.email}`} className="footer-email">
            {profile.email}
          </a>
          <div className="social-icons footer-socials">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap footer-inner">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <a href="#top" aria-label="Back to top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}