import type { Metadata } from 'next'
import { GoldCard, PageHero } from '@/components/section-heading'

export const metadata: Metadata = { title: 'Committees' }

const committees = [
  { abbr: 'UNGA', name: 'United Nations General Assembly', agenda: 'Agenda to be announced' },
  { abbr: 'UNSC', name: 'United Nations Security Council', agenda: 'Agenda to be announced' },
  { abbr: 'UNHRC', name: 'United Nations Human Rights Council', agenda: 'Agenda to be announced' },
  { abbr: 'WHO', name: 'World Health Organization', agenda: 'Agenda to be announced' },
  { abbr: 'AIPPM', name: 'All India Political Parties Meet', agenda: 'Agenda to be announced' },
  { abbr: 'IP', name: 'International Press', agenda: 'Journalism & Photography' },
]

export default function CommitteesPage() {
  return (
    <>
      <PageHero
        eyebrow="Councils"
        title="Committees"
        description="Explore the committees of CUKCCMUN'27. Agendas and background guides will be released ahead of the conference."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {committees.map((c) => (
          <GoldCard key={c.abbr} className="flex flex-col gap-2">
            <p className="font-serif text-3xl font-bold text-gold">{c.abbr}</p>
            <h2 className="font-semibold">{c.name}</h2>
            <p className="text-sm text-muted-foreground">{c.agenda}</p>
          </GoldCard>
        ))}
      </section>
    </>
  )
}
