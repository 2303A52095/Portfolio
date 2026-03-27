import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CursorGlow() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const x = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.3 })
  const y = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.3 })

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX - 160)
      mouseY.set(event.clientY - 160)
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.16),_rgba(139,92,246,0.08),_transparent_70%)] blur-3xl md:block"
    />
  )
}
