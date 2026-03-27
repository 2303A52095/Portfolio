import { SectionHeading } from '../ui/SectionHeading'
import { TimelineBlock } from './TimelineBlock'

export function EducationSection({ education }) {
  return (
    <section id="education" className="section-shell scroll-mt-24">
      <SectionHeading
        eyebrow="Education"
        title="Education"
        description="My academic background."
      />
      <TimelineBlock items={education} />
    </section>
  )
}
