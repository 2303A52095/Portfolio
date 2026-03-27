import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle color theme"
      className="soft-border relative inline-flex h-12 w-12 items-center justify-center rounded-full"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="text-lg text-[rgb(var(--text))]"
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </motion.span>
    </button>
  )
}
