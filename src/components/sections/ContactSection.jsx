import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const contactCards = [
  { key: 'email', icon: FiMail, label: 'Email', href: (value) => `mailto:${value}` },
  {
    key: 'phone',
    icon: FiPhone,
    label: 'Phone',
    href: (value) => `tel:${value.replace(/\s+/g, '')}`,
  },
]

export function ContactSection({ contact }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Contact"
        description="Get in touch with me."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactCards.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.key} delay={index * 0.05}>
                <motion.a
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 18px 38px rgba(59,130,246,0.12)' }}
                  href={item.href(contact[item.key])}
                  className="soft-border rounded-[1.5rem] p-5"
                >
                  <motion.div
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400"
                  >
                    <Icon className="text-xl" />
                  </motion.div>
                  <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[rgb(var(--muted))]">
                    {item.label}
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold text-[rgb(var(--text))]">
                    {contact[item.key]}
                  </p>
                </motion.a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.12}>
          <motion.form
            whileHover={{ y: -4, boxShadow: '0 20px 44px rgba(59,130,246,0.1)' }}
            onSubmit={handleSubmit}
            action={`https://formsubmit.co/${contact.email}`}
            method="POST"
            className="soft-border rounded-[2rem] p-6 sm:p-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-[rgb(var(--muted))]">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/15 bg-[rgba(var(--bg-secondary),0.72)] px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-[rgb(var(--muted))]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  inputMode="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/15 bg-[rgba(var(--bg-secondary),0.72)] px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-[rgb(var(--muted))]">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell me about your project, collaboration idea, or opportunity."
                  className="w-full rounded-2xl border border-white/15 bg-[rgba(var(--bg-secondary),0.72)] px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                type="submit"
                className="primary-button"
                whileHover={{ y: -3, boxShadow: '0 18px 42px rgba(99,102,241,0.34)' }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <FiSend />
              </motion.button>
              <p className="text-sm text-[rgb(var(--muted))]">
                {submitted ? 'Thank you. Your message has been submitted.' : ''}
              </p>
            </div>
          </motion.form>
        </Reveal>
      </div>
    </section>
  )
}
