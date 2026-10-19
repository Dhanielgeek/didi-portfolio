import { profile } from '../data'

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle' },
  { label: 'Instagram', href: 'https://instagram.com/your-handle' },
  { label: 'Twitter / X', href: 'https://x.com/your-handle' },
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
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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