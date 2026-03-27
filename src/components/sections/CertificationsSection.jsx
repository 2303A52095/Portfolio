import { motion } from 'framer-motion'
import { FiArrowUpRight, FiAward } from 'react-icons/fi'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications"
        description="Courses and certificates I have completed."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((certification, index) => (
          <Reveal key={certification.title} delay={index * 0.06}>
            <motion.article
              whileHover={{ y: -8, rotate: -0.5 }}
              className="soft-border rounded-[1.75rem] p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400">
                  <FiAward className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{certification.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))]">
                    Certificate of completion.
                  </p>
                  {certification.href ? (
                    <a
                      href={certification.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                    >
                      View Certificate
                      <FiArrowUpRight />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
