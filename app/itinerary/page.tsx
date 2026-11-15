import type { Metadata } from 'next'
import { GoldCard, PageHero } from '@/components/section-heading'

export const metadata: Metadata = { title: 'Itinerary' }

const days = [
  {
    day: 'Day 1',
    items: [
      ['08:30', 'Delegate Registration'],
      ['10:00', 'Opening Ceremony'],
      ['11:30', 'Committee Session I'],
      ['14:30', 'Committee Session II'],
    ],
  },
  {
    day: 'Day 2',
    items: [
      ['09:00', 'Committee Session III'],
      ['13:30', 'Committee Session IV'],
      ['17:00', 'Delegate Social'],
    ],
  },
  {
    day: 'Day 3',
    items: [
      ['09:00', 'Committee Session V'],
      ['12:30', 'Voting Procedure'],
      ['15:00', 'Closing Ceremony & Awards'],
    ],
  },
]

export default function ItineraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule"
        title="Itinerary"
        description="A tentative schedule for the three days of the conference. Final timings will be confirmed closer to the date."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
        {days.map(({ day, items }) => (
          <GoldCard key={day}>
            <h2 className="mb-4 border-b border-gold/60 pb-3 font-serif text-2xl font-semibold text-gold">{day}</h2>
            <ol className="flex flex-col gap-3">
              {items.map(([time, label]) => (
                <li key={label} className="flex gap-4 text-sm">
                  <span className="w-12 shrink-0 font-semibold tabular-nums text-gold">{time}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
          </GoldCard>
        ))}
      </section>
    </>
  )
}
