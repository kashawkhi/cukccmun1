import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-gold bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/cukccmun-emblem.png" alt="" width={878} height={899} sizes="56px" className="h-14 w-auto" />
            <span className="font-serif text-xl font-semibold tracking-wider text-gold">{site.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {site.tagline} The Model United Nations conference of {site.college}, {site.conferenceDateLabel}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-serif text-sm font-semibold uppercase tracking-widest text-gold">Explore</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-serif text-sm font-semibold uppercase tracking-widest text-gold">Get in touch</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/40">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground">
          {`© ${new Date(site.conferenceDate).getFullYear()} ${site.name} · ${site.college}. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
