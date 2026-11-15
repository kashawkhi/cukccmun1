import { Globe2, Landmark, MessagesSquare } from 'lucide-react'
import { GoldCard, SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const pillars = [
  { icon: MessagesSquare, title: 'Debate', text: 'Engage in structured, high-level debate on pressing global issues.' },
  { icon: Landmark, title: 'Diplomacy', text: 'Negotiate, build alliances and draft resolutions like real diplomats.' },
  { icon: Globe2, title: 'Perspective', text: 'Step into the shoes of nations and see the world through new lenses.' },
]

export function AboutMun() {
  return (
    <section id="about-mun" className="border-b border-gold/60 bg-card/50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The Conference" title={`About ${site.shortName}`} />
        <p className="mx-auto mb-12 max-w-3xl text-pretty text-center leading-relaxed text-muted-foreground">
          {site.name} is the flagship Model United Nations conference of {site.college}. Over three days, delegates from
          schools and colleges come together to simulate the workings of the United Nations, debating real-world
          challenges, crafting solutions and honing the skills of public speaking, research and negotiation.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <GoldCard key={title} className="flex flex-col items-center gap-3 text-center">
              <Icon className="size-8 text-gold" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-gold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </GoldCard>
          ))}
        </div>
      </div>
    </section>
  )
}
