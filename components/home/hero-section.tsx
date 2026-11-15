import Image from 'next/image'
import Link from 'next/link'
import { Countdown } from '@/components/countdown'
import { GoldDivider } from '@/components/section-heading'
import { site } from '@/lib/site'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b-2 border-gold">
      <div
        className="pointer-events-none absolute inset-4 rounded-md border border-gold/60 md:inset-8"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center">
        <div className="relative size-40 overflow-hidden rounded-full border-2 border-gold outline outline-1 outline-offset-4 outline-gold/50 md:size-52">
          <Image
            src="/images/cukccmun-logo.png"
            alt="CUKCCMUN 2027 emblem: a golden globe framed by olive branches"
            fill
            priority
            sizes="208px"
            className="scale-[1.65] object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">{site.college} presents</p>
          <h1 id="hero-title" className="font-serif text-5xl font-bold tracking-wider text-gold md:text-7xl">
            {site.name}
          </h1>
          <GoldDivider />
          <p className="max-w-xl text-pretty font-serif text-lg italic md:text-2xl">{site.tagline}</p>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{site.conferenceDateLabel}</p>
        </div>

        <Countdown date={site.conferenceDate} />

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/registration"
            className="rounded-md bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            Register Now
          </Link>
          <Link
            href="/committees"
            className="rounded-md border border-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold-soft"
          >
            View Committees
          </Link>
        </div>
      </div>
    </section>
  )
}
