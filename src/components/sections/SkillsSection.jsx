import { motion } from 'framer-motion'
import { TbBinaryTree2 } from 'react-icons/tb'
import {
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPython,
  SiReact,
  SiScikitlearn,
} from 'react-icons/si'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const skillItemIcons = {
  Python: SiPython,
  DSA: TbBinaryTree2,
  SQL: SiMysql,
  'PL/SQL': SiMysql,
  MongoDB: SiMongodb,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  'Machine Learning': SiScikitlearn,
  'Generative AI': SiScikitlearn,
  OpenCV: SiOpencv,
  'Scikit-Learn': SiScikitlearn,
  NumPy: SiNumpy,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
}

function SkillCard({ skill, index }) {
  const Icon = skill.icon

  return (
    <Reveal delay={index * 0.05}>
      <motion.article
        whileHover={{ y: -8, scale: 1.01 }}
        className="soft-border rounded-[1.75rem] p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400"
            >
              <Icon className="text-xl" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
            </div>
          </div>
          <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {skill.items.map((item) => {
            const ItemIcon = skillItemIcons[item]

            return (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[rgba(var(--bg),0.18)] px-3 py-2 text-xs font-medium text-[rgb(var(--muted))]"
              >
                {ItemIcon ? <ItemIcon className="text-sm text-blue-400" /> : null}
                <span>{item}</span>
              </span>
            )
          })}
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgba(var(--border),0.2)]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            className="relative h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
          >
            <motion.span
              animate={{ x: ['-120%', '240%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.12 }}
              className="absolute inset-y-0 w-12 bg-white/25 blur-sm"
            />
          </motion.div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Skills"
        title="Skills"
        description="Technologies and tools I use."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}
