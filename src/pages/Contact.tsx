
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { profile } from '../data'
import { Globe } from 'lucide-react'
import {

  SiFacebook,

  SiSubstack,
} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import {RiInstagramFill, RiTwitterXFill} from "react-icons/ri"

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface Values {
  name: string
  email: string
  message: string
}

type Errors = Partial<Record<keyof Values, string>>

function validate(values: Values): Errors {
  const errors: Errors = {}

  if (!values.name.trim()) {
    errors.name = 'Add your name so I know who to reply to.'
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'That email looks incomplete. Check the @ and the domain.'
  }

  if (values.message.trim().length < 20) {
    errors.message = 'Add a sentence or two about what you want to grow.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const onChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }))
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const foundErrors = validate(values)
    setErrors(foundErrors)

    if (Object.keys(foundErrors).length > 0) {
      return
    }

    setStatus('sending')

    try {
      if (profile.formEndpoint) {
        const response = await fetch(profile.formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(values),
        })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        setStatus('sent')
      } else {
        const body = `${values.message}

From: ${values.name} (${values.email})`

        const subject = `Project enquiry from ${values.name}`

        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`

        setStatus('sent')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section-light">
      <div className="wrap contact-grid">
        <div>
          <p className="section-kicker">Get in touch</p>

          <h2>Tell me what you are trying to grow.</h2>

          <p className="section-intro" style={{ marginTop: 20 }}>
            I reply within two working days, usually with a question or two
            and a rough idea of where I would start.
          </p>

          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>

         <div>
  <dt>Socials</dt>

  <dd className="social-icons">
    {profile.socials.map((social) => {
      const label = social.label.toLowerCase()

      const Icon =
        label === 'instagram'
          ? RiInstagramFill
          : label === 'linkedin'
            ? FaLinkedin
            : label === 'facebook'
              ? SiFacebook
              : label === 'x' || label === 'twitter'
                ? RiTwitterXFill
                : label === 'substack'
                  ? SiSubstack
                  : Globe

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
          <Icon size={20} />
        </a>
      )
    })}
  </dd>
</div>
          </dl>
        </div>

        <div>
          {status === 'sent' ? (
            <div role="status">
              <h3>Thanks, {values.name.split(' ')[0]}.</h3>

              <p>
                {profile.formEndpoint
                  ? 'Your message is on its way. Expect a reply within two working days.'
                  : 'Your email app should have opened with the message ready to send. Press send there to finish.'}
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="contact-form"
            >
              <div>
                <label htmlFor="name">Your name</label>

                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? 'name-error' : undefined
                  }
                />

                {errors.name && (
                  <p id="name-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? 'email-error' : undefined
                  }
                />

                {errors.email && (
                  <p id="email-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message">Leave a Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />

                {errors.message && (
                  <p id="message-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="button"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message ↗'}
                </button>

                {status === 'error' && (
                  <p role="alert">
                    That did not send. Try again, or email{' '}
                    {profile.email} directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
