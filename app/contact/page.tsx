import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { GoldCard, PageHero } from '@/components/section-heading'
import { site } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact' }

const contacts = [
  { icon: Mail, title: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, title: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: MapPin, title: 'Address', value: site.address },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        title="Contact"
        description="Have a question about delegations, committees or logistics? The secretariat is happy to help."
      />
      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-16 md:grid-cols-3">
        {contacts.map(({ icon: Icon, title, value, href }) => (
          <GoldCard key={title} className="flex flex-col items-center gap-3 text-center">
            <Icon className="size-8 text-gold" aria-hidden="true" />
            <h2 className="font-serif text-lg font-semibold text-gold">{title}</h2>
            {href ? (
              <a href={href} className="break-all text-sm hover:text-gold">
                {value}
              </a>
            ) : (
              <p className="text-sm">{value}</p>
            )}
          </GoldCard>
        ))}
      </section>
    </>
  )
}
