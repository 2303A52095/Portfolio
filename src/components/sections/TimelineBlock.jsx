import { motion } from 'framer-motion'
import { FiExternalLink, FiFileText } from 'react-icons/fi'
import { Reveal } from '../ui/Reveal'

export function TimelineBlock({ items }) {
  return (
    <div className="relative ml-3 border-l border-blue-400/20 pl-8 sm:ml-4">
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-1px] top-0 h-full w-px bg-gradient-to-b from-blue-400/0 via-blue-400/60 to-violet-400/0"
      />
      {items.map((item, index) => (
        <Reveal key={`${item.title}-${item.organization}`} delay={index * 0.07}>
          <motion.article
            whileHover={{ x: 6, boxShadow: '0 18px 36px rgba(59,130,246,0.08)' }}
            className="relative mb-8 rounded-[1.75rem] border border-white/15 bg-[rgba(var(--bg-secondary),0.46)] p-5 backdrop-blur-md last:mb-0"
          >
            <motion.span
              animate={{ scale: [1, 1.14, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
              className="absolute -left-[2.15rem] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/30 bg-[rgb(var(--bg))]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
            </motion.span>
            <p className="text-xs uppercase tracking-[0.24em] text-blue-400">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-[rgb(var(--muted))]">
              {item.organization}
            </p>
            <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
              {item.description}
            </p>
            {item.documents?.length ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {item.documents.map((document) => (
                  <motion.a
                    key={document.href}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    href={document.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs font-semibold text-blue-300"
                  >
                    <FiFileText />
                    {document.label}
                    <FiExternalLink />
                  </motion.a>
                ))}
              </div>
            ) : null}
          </motion.article>
        </Reveal>
      ))}
    </div>
  )
}
