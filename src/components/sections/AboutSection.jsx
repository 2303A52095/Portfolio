import { motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection({ about }) {
  const profilePhotoSrc = `${import.meta.env.BASE_URL}profile-photo.png`

  return (
    <section id="about" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="About Me"
        title="About me"
        description="My background, skills, and areas of interest."
      />

      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex justify-center lg:justify-start">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-sm"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative isolate overflow-visible rounded-full p-3"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-0.65rem] rounded-full border border-blue-400/30 border-dashed"
                />
                <motion.span
                  animate={{ rotate: -360, scale: [1, 1.03, 1] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-1.15rem] rounded-full bg-[conic-gradient(from_90deg,rgba(59,130,246,0.22),rgba(139,92,246,0.12),transparent_65%,rgba(59,130,246,0.22))] blur-md"
                />
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 18px 40px rgba(15,23,42,0.12)',
                      '0 24px 52px rgba(59,130,246,0.22)',
                      '0 18px 40px rgba(15,23,42,0.12)',
                    ],
                  }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative overflow-hidden rounded-full border border-white/15 bg-[rgba(var(--bg-secondary),0.9)]"
                >
                <img
                  src={profilePhotoSrc}
                  alt="Chirra Ramcharan"
                  className="aspect-square w-full max-w-[15rem] rounded-full object-cover object-center"
                />
                </motion.div>
                <motion.span
                  animate={{ y: [0, -10, 0], opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-3 top-4 h-4 w-4 rounded-full bg-blue-400/70 blur-[1px]"
                />
                <motion.span
                  animate={{ y: [0, 8, 0], opacity: [0.25, 0.7, 0.25] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="absolute bottom-5 left-2 h-3 w-3 rounded-full bg-violet-400/70 blur-[1px]"
                />
              </motion.div>

              <div className="mt-5 text-center">
                <p className="text-xl font-semibold tracking-[0.01em] text-[rgb(var(--text))]">
                  Chirra Ramcharan
                </p>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                  B.Tech CSE (AI & ML) Student
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.08 },
              },
            }}
            className="space-y-6"
          >
            <p className="text-lg leading-8 text-[rgb(var(--muted))]">
              {about.summary}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {about.stats.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="soft-border rounded-2xl p-5"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[rgb(var(--muted))]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base font-semibold text-[rgb(var(--text))]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
