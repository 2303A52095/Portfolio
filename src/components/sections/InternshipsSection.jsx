import { SectionHeading } from '../ui/SectionHeading'
import { TimelineBlock } from './TimelineBlock'

export function InternshipsSection({ internships }) {
  return (
    <section id="internships" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Internships"
        title="Internships and experience"
        description="My internship work and experience."
      />
      <TimelineBlock items={internships} />
    </section>
  )
}
