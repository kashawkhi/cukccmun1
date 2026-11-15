import { cn } from '@/lib/utils'

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)} aria-hidden="true">
      <span className="h-px w-16 bg-gold" />
      <span className="size-2 rotate-45 border border-gold" />
      <span className="h-px w-16 bg-gold" />
    </div>
  )
}

export function SectionHeading({ eyebrow, title, as: Tag = 'h2' }: { eyebrow?: string; title: string; as?: 'h1' | 'h2' }) {
  return (
    <div className="mb-10 flex flex-col items-center gap-3 text-center">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}
      <Tag className="text-balance font-serif text-3xl font-semibold tracking-wide md:text-4xl">{title}</Tag>
      <GoldDivider />
    </div>
  )
}

export function GoldCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('cream-surface relative rounded-md border p-6 outline outline-1 outline-offset-4', className)}>
      {children}
    </div>
  )
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-gold/60 px-4 pb-4 pt-16">
      <SectionHeading eyebrow={eyebrow} title={title} as="h1" />
      <p className="mx-auto -mt-4 mb-8 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">{description}</p>
    </section>
  )
}
