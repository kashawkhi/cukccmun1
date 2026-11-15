import { UserRound } from 'lucide-react'
import { GoldCard } from '@/components/section-heading'

export function TeamGrid({ roles }: { roles: string[] }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {roles.map((role, index) => (
        <GoldCard key={`${role}-${index}`} className="flex flex-col items-center gap-3 text-center">
          <span className="flex size-24 items-center justify-center rounded-full border-2 border-gold bg-gold-soft">
            <UserRound className="size-10 text-gold" aria-hidden="true" />
          </span>
          <h2 className="font-serif text-lg font-semibold">To be announced</h2>
          <p className="text-xs uppercase tracking-widest text-gold">{role}</p>
        </GoldCard>
      ))}
    </section>
  )
}
