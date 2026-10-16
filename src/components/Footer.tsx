import { profile } from '../data'
export default function Footer() { return <footer className="site-footer"><div className="wrap footer-inner"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#top">Back to top ↑</a></div></footer> }
