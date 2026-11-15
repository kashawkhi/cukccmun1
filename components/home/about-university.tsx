import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export function AboutUniversity() {
  return (
    <section id="about-university" className="border-b border-gold/60 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Our Institution" title="About the University" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border-2 border-gold outline outline-1 outline-offset-4 outline-gold/50">
            <Image
              src="/images/campus.png"
              alt={`The main building of the ${site.college} campus at golden hour`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">{site.college}</span> is a centre of academic excellence
              committed to nurturing thoughtful, responsible and globally aware citizens. With a legacy of holistic
              education, the university brings together diverse disciplines, cultures and ideas on one vibrant campus.
            </p>
            <p>
              Its faculty and students are driven by a shared belief in service, leadership and integrity, fostering an
              environment where critical thinking and meaningful dialogue thrive both inside and beyond the classroom.
            </p>
            <dl className="mt-4 grid grid-cols-3 gap-4 text-center">
              {[
                ['Students', '10,000+'],
                ['Programmes', '50+'],
                ['Clubs', '40+'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-gold/60 py-4">
                  <dt className="text-xs uppercase tracking-widest">{label}</dt>
                  <dd className="font-serif text-2xl font-semibold text-gold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
