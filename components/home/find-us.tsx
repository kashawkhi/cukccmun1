import { Clock, MapPin, Navigation } from 'lucide-react'
import { GoldCard, SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export function FindUs() {
  return (
    <section id="find-us" className="border-b border-gold/60 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Venue" title="Find Us" />
        <div className="grid gap-8 md:grid-cols-5">
          <div
            role="img"
            aria-label="Map placeholder. The venue map has not been set yet."
            className="relative flex aspect-video items-center justify-center overflow-hidden rounded-md border-2 border-gold bg-card outline outline-1 outline-offset-4 outline-gold/50 md:col-span-3 md:aspect-auto md:min-h-80"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-2 text-center">
              <MapPin className="size-10 text-gold" aria-hidden="true" />
              <p className="font-serif text-lg font-semibold text-gold">Map coming soon</p>
              <p className="text-sm text-muted-foreground">The venue map will be added here.</p>
            </div>
          </div>

          <GoldCard className="flex flex-col gap-6 md:col-span-2">
            <div className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-serif font-semibold text-gold">Location</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{site.address}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-serif font-semibold text-gold">Dates</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{site.conferenceDateLabel}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Navigation className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <h3 className="font-serif font-semibold text-gold">Getting here</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Directions, parking and transport details will be shared with registered delegates.
                </p>
              </div>
            </div>
          </GoldCard>
        </div>
      </div>
    </section>
  )
}
