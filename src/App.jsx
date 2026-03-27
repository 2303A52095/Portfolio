import { motion } from 'framer-motion'
import { AboutSection } from './components/sections/AboutSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { ContactSection } from './components/sections/ContactSection'
import { EducationSection } from './components/sections/EducationSection'
import { Footer } from './components/sections/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { InternshipsSection } from './components/sections/InternshipsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { BackToTop } from './components/ui/BackToTop'
import { CursorGlow } from './components/ui/CursorGlow'
import { Navbar } from './components/ui/Navbar'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { portfolioData } from './data/portfolioData'
import { useTheme } from './hooks/useTheme'

const mainVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{ opacity: [0.22, 0.36, 0.22] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.02)_48%,transparent_100%)]"
          />
          <motion.div
            animate={{ backgroundPosition: ['0px 0px', '0px 32px'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:72px_72px]"
          />
          <motion.div
            animate={{ x: [0, 36, 0], y: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_70%)] blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -32, 0], y: [0, 24, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[-8rem] top-96 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.16),_transparent_70%)] blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-[40rem] h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.08),_transparent_70%)] blur-3xl"
          />
        </div>

        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <motion.main
          variants={mainVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pb-14 pt-6 sm:px-6 lg:px-8"
        >
          <motion.div variants={sectionVariants}>
            <HeroSection hero={portfolioData.hero} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <AboutSection about={portfolioData.about} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <SkillsSection skills={portfolioData.skills} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <ProjectsSection projects={portfolioData.projects} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <InternshipsSection internships={portfolioData.internships} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <CertificationsSection certifications={portfolioData.certifications} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <EducationSection education={portfolioData.education} />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <ContactSection contact={portfolioData.contact} />
          </motion.div>
        </motion.main>

        <Footer socialLinks={portfolioData.socialLinks} />
      </motion.div>
      <BackToTop />
    </>
  )
}

export default App
