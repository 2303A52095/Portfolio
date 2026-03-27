import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { portfolioData } from '../../data/portfolioData'
import { Reveal } from '../ui/Reveal'

function useTypingEffect(items, speed = 70, pause = 1800) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = items[index % items.length]
    const isComplete = display === current
    const isEmpty = display.length === 0
    const nextDelay = isDeleting ? speed / 2 : speed

    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false)
        setIndex((value) => value + 1)
        return
      }

      if (!isDeleting) {
        setDisplay(current.slice(0, display.length + 1))
        return
      }

      setDisplay(current.slice(0, display.length - 1))
    }, !isDeleting && isComplete ? pause : nextDelay)

    return () => window.clearTimeout(timer)
  }, [display, index, isDeleting, items, pause, speed])

  return display
}

export function HeroSection({ hero }) {
  const typedText = useTypingEffect(hero.typedRoles)

  return (
    <section
      id="home"
      className="section-shell min-h-[calc(100vh-7rem)] scroll-mt-24 pt-10 sm:pt-12"
    >
      <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-blue-400">
              AI, Machine Learning, and Full Stack Portfolio
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              {hero.name}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 text-xl font-semibold text-[rgb(var(--muted))] sm:text-2xl">
              {hero.title}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-5 flex min-h-8 items-center text-sm font-medium text-blue-400 sm:text-base">
              <span className="mr-2 text-[rgb(var(--muted))]">Now focused on</span>
              <span>{typedText}</span>
              <span className="ml-1 h-5 w-px animate-pulse bg-blue-400" />
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">
              {hero.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#projects"
                className="primary-button"
                whileHover={{ y: -4, boxShadow: '0 18px 46px rgba(99,102,241,0.38)' }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <FiArrowRight />
              </motion.a>
              <motion.a
                href={hero.resumeHref}
                download
                className="secondary-button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Resume
                <FiDownload />
              </motion.a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-4 flex items-center gap-3">
              <motion.a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="soft-border inline-flex h-14 w-14 items-center justify-center rounded-full text-[rgb(var(--text))] hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="soft-border inline-flex h-14 w-14 items-center justify-center rounded-full text-[rgb(var(--text))] hover:text-blue-400"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </motion.a>
            </div>
          </Reveal>
      </div>
    </section>
  )
}
