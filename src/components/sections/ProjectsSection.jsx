import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Projects"
        title="Projects"
        description="Some of the projects I have built."
      />

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
