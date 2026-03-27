import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export function BackToTop() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    return scrollY.on('change', (value) => setVisible(value > 420))
  }, [scrollY])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="primary-button fixed bottom-6 right-4 z-40 h-12 w-12 rounded-full p-0 sm:right-6"
          aria-label="Back to top"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowUp />
          </motion.span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
