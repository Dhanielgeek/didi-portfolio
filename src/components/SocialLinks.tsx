import { Globe } from 'lucide-react'
import { SiFacebook, SiSubstack } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'
import { profile } from '../data'

function getIcon(label: string) {
  switch (label.toLowerCase()) {
    case 'instagram':
      return RiInstagramFill
    case 'linkedin':
      return FaLinkedin
    case 'facebook':
      return SiFacebook
    case 'x':
    case 'twitter':
      return RiTwitterXFill
    case 'substack':
      return SiSubstack
    default:
      return Globe
  }
}

export default function SocialLinks() {
  return (
    <>
      {profile.socials.map((social) => {
        const Icon = getIcon(social.label)

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="social-icon-box"
          >
            <Icon />
          </a>
        )
      })}
    </>
  )
}