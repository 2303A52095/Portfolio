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
                className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[rgba(var(--bg-secondary),0.9)] p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
              >
                <img
                  src={profilePhotoSrc}
                  alt="Chirra Ramcharan"
                  className="aspect-[4/5] w-full max-w-[15rem] rounded-[1.2rem] object-cover object-center"
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
