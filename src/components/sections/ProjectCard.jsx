import { motion } from 'framer-motion'
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiDatabase,
  FiExternalLink,
  FiFileText,
  FiGithub,
} from 'react-icons/fi'

function ProjectPreview({ preview }) {
  if (preview === 'quiz') {
    return (
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(15,23,42,0.88))] p-4"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35 }}
          className="rounded-[1.4rem] bg-[rgba(255,255,255,0.08)] p-4 backdrop-blur-md"
        >
          <div className="rounded-2xl bg-white/95 p-4 text-slate-900 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Quiz Dashboard
                </p>
                <h4 className="mt-2 text-lg font-bold">Frontend Challenge</h4>
              </div>
              <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Score 8/10
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-3 rounded-full bg-slate-200" />
              <div className="grid gap-2">
                {[72, 84, 64, 78].map((width) => (
                  <div key={width} className="rounded-xl border border-slate-200 px-3 py-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <div className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
                  Next Question
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (preview === 'stopwatch') {
    return (
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(29,78,216,0.32))] p-4"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.35 }}
          className="rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="mx-auto flex aspect-square max-w-[14rem] items-center justify-center rounded-full border border-cyan-300/25 bg-[radial-gradient(circle,rgba(96,165,250,0.22),rgba(15,23,42,0.82)_68%)] shadow-[0_0_60px_rgba(59,130,246,0.18)]"
          >
            <div className="flex h-[11rem] w-[11rem] flex-col items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Stopwatch
              </p>
              <p className="mt-3 font-display text-3xl font-bold text-white">
                00:12:48
              </p>
              <div className="mt-4 flex gap-2">
                {['Start', 'Stop', 'Reset'].map((item, index) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      index === 0
                        ? 'bg-emerald-400/20 text-emerald-200'
                        : index === 1
                          ? 'bg-amber-400/20 text-amber-200'
                          : 'bg-white/10 text-slate-200'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[linear-gradient(160deg,rgba(15,23,42,0.96),rgba(30,41,59,0.85))] p-4"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.35 }}
        className="rounded-[1.4rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_40%),rgba(15,23,42,0.92)] p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Python Analysis Pipeline
        </p>
        <div className="mt-4 grid gap-3">
          {[88, 76, 93].map((width, index) => (
            <div key={width} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                <span>Stage {index + 1}</span>
                <span>{width}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          Authenticity analysis using ORB, SSIM, and image comparison heuristics.
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="animated-gradient-border group relative overflow-hidden rounded-[2rem] p-[1px]"
    >
      <div className="glass-panel relative rounded-[calc(2rem-1px)] border border-white/15 p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400"
              >
                Featured Project
              </motion.span>
              {project.typeLabel ? (
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300"
                >
                  {project.typeLabel}
                </motion.span>
              ) : null}
              {project.verified ? (
                <motion.a
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  href={project.offerLetter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300"
                >
                  <FiCheckCircle />
                  Offer Letter Verified
                </motion.a>
              ) : null}
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-5 text-3xl font-bold"
            >
              {project.title}
            </motion.h3>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-[rgb(var(--muted))]">
              {project.badge ? (
                <span className="inline-flex items-center gap-2">
                  <FiBriefcase className="text-blue-400" />
                  {project.badge}
                </span>
              ) : null}
              {project.period ? (
                <span className="inline-flex items-center gap-2">
                  <FiCalendar className="text-blue-400" />
                  {project.period}
                </span>
              ) : null}
            </div>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgb(var(--muted))]">
              {project.description}
            </p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
              }}
              className="mt-6 space-y-3 text-sm leading-7 text-[rgb(var(--muted))]"
            >
              {project.bullets.map((bullet) => (
                <motion.li
                  key={bullet}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveDemo ? (
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  <FiExternalLink />
                  Live Demo
                </motion.a>
              ) : null}
              {project.datasetHref ? (
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.datasetHref}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <FiDatabase />
                  Dataset
                  <FiArrowUpRight />
                </motion.a>
              ) : null}
              {project.codeFileHref ? (
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.codeFileHref}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <FiFileText />
                  Code File
                  <FiArrowUpRight />
                </motion.a>
              ) : null}
              {project.reportHref ? (
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.reportHref}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  <FiFileText />
                  Report
                  <FiArrowUpRight />
                </motion.a>
              ) : null}
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                <FiGithub />
                View Code
                <FiArrowUpRight />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <ProjectPreview preview={project.preview} />

            <div className="soft-border rounded-[1.75rem] p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[rgb(var(--muted))]">
                Tech Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
