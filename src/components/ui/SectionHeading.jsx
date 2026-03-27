import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={`mb-8 flex flex-col gap-3 ${alignment}`}
    >
      <motion.span
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-400"
      >
        {eyebrow}
      </motion.span>
      <div className="max-w-2xl">
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          className="mt-3 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}
