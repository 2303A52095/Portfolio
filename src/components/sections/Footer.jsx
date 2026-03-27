import { motion } from 'framer-motion'

export function Footer({ socialLinks }) {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass-panel mx-auto flex w-full max-w-7xl justify-center px-6 py-6"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex items-center gap-3"
        >
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="soft-border flex h-11 w-11 items-center justify-center rounded-full text-[rgb(var(--text))] hover:text-blue-400"
              >
                <Icon />
              </motion.a>
            )
          })}
        </motion.div>
      </motion.div>
    </footer>
  )
}
