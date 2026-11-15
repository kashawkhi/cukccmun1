import type { Metadata } from 'next'
import { GoldCard, PageHero } from '@/components/section-heading'
import { delegationTypes } from '@/components/home/who-can-attend'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Registration' }

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Registration"
        description="Registrations open soon. Choose your delegation type below; fees and deadlines will be announced shortly."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
        {delegationTypes.map(({ icon: Icon, title, text }) => (
          <GoldCard key={title} className="flex flex-col gap-4">
            <Icon className="size-8 text-gold" aria-hidden="true" />
            <h2 className="font-serif text-xl font-semibold text-gold">{title}</h2>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
            <p className="text-sm">
              <span className="text-muted-foreground">Fee: </span>
              <span className="font-semibold">To be announced</span>
            </p>
            <span className="rounded-md border border-gold/60 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-gold/80">
              Opening Soon
            </span>
          </GoldCard>
        ))}
      </section>
      <p className="px-4 pb-16 text-center text-sm text-muted-foreground">
        {'Questions about registration? Write to '}
        <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-4">
          {site.email}
        </a>
      </p>
    </>
  )
}
