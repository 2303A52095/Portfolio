import { motion } from 'framer-motion'

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  amount = 0.25,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.985, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
