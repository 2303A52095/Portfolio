import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#internships' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass-panel mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <motion.a
          href="#home"
          className="font-display text-lg font-bold tracking-wide"
          whileHover={{ y: -1, scale: 1.02 }}
        >
          Portfolio
        </motion.a>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.12 },
            },
          }}
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              variants={{
                hidden: { opacity: 0, y: -8 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-sm font-medium text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="flex items-center gap-3"
        >
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </motion.div>
      </motion.div>
    </header>
  )
}
