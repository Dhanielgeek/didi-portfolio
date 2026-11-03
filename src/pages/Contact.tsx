
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { profile } from '../data'
import { Globe } from 'lucide-react'
import {
  SiFacebook,
  SiSubstack,
} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { RiInstagramFill, RiTwitterXFill } from 'react-icons/ri'

type Status = 'idle' | 'sending' | 'sent' | 'error'

interface Values {
  name: string
  email: string
  message: string
}

type Errors = Partial<Record<keyof Values, string>>

const WEB3FORMS_ACCESS_KEY =
  '693a440c-f5c9-437d-b749-10ec123081d5'

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

    if (Object.keys(foundErrors).length > 0) return

    setStatus('sending')

    try {
      const formData = new FormData()

      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('name', values.name.trim())
      formData.append('email', values.email.trim())
      formData.append('message', values.message.trim())
      formData.append(
        'subject',
        `New website enquiry from ${values.name.trim()}`,
      )
      formData.append('from_name', 'Website Contact Form')

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        },
      )

      const data: { success: boolean; message?: string } =
        await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Message submission failed.')
      }

      setStatus('sent')
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section-light">
      <div className="wrap contact-grid">
        <div>
          <p className="section-kicker">Get in touch</p>

          <h2>Have something in mind? Let's talk.</h2>

          <p
            className="section-intro"
            style={{ marginTop: 20 }}
          >
            Whether you have a project, an idea, a question or simply
            want to explore the possibility of working together,
            I'd love to hear from you.
          </p>

          <p className="section-intro" style={{ marginTop: 16 }}>
            I'll get back to you within 1–2 working days.
            Looking forward to hearing from you!
          </p>

          <dl className="contact-details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </dd>
            </div>

            <div>
              <dt>Connect</dt>

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
            <div role="status" aria-live="polite">
              <h3>
                Thanks, {values.name.split(' ')[0]}.
              </h3>

              <p>
                Your message has been sent successfully.
                Expect a reply within 1–2 working days.
              </p>

              <button
                type="button"
                className="button"
                onClick={() => {
                  setValues({
                    name: '',
                    email: '',
                    message: '',
                  })
                  setErrors({})
                  setStatus('idle')
                }}
              >
                Send another message
              </button>
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
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={
                    errors.name ? 'name-error' : undefined
                  }
                  required
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
                  required
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
                  required
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
                  {status === 'sending'
                    ? 'Sending…'
                    : 'Send message ↗'}
                </button>

                {status === 'error' && (
                  <p role="alert">
                    Your message could not be sent.
                    Please try again or email{' '}
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
