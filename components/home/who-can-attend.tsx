import Link from 'next/link'
import { GraduationCap, School, User } from 'lucide-react'
import { GoldCard, SectionHeading } from '@/components/section-heading'

export const delegationTypes = [
  {
    icon: School,
    title: 'School Delegations',
    text: 'Teams of students from secondary and higher-secondary schools, led by a faculty advisor.',
  },
  {
    icon: GraduationCap,
    title: 'College Delegations',
    text: 'Groups of undergraduate and postgraduate students representing their college or university.',
  },
  {
    icon: User,
    title: 'Individual Delegation',
    text: 'Students who wish to participate on their own, independent of any school or college team.',
  },
]

export function WhoCanAttend() {
  return (
    <section id="who-can-attend" className="bg-card/50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Participation" title="Who Can Attend" />
        <div className="grid gap-8 md:grid-cols-3">
          {delegationTypes.map(({ icon: Icon, title, text }) => (
            <GoldCard key={title} className="flex flex-col items-center gap-4 text-center">
              <span className="flex size-16 items-center justify-center rounded-full border border-gold bg-gold-soft">
                <Icon className="size-7 text-gold" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-gold">{title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <Link
                href="/registration"
                className="rounded-md border border-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold-soft"
              >
                Register
                <span className="sr-only"> as {title}</span>
              </Link>
            </GoldCard>
          ))}
        </div>
      </div>
    </section>
  )
}
