import type { Metadata } from 'next'
import { PageHero } from '@/components/section-heading'
import { TeamGrid } from '@/components/team-grid'

export const metadata: Metadata = { title: 'Secretariat' }

export default function SecretariatPage() {
  return (
    <>
      <PageHero
        eyebrow="Organising Team"
        title="Secretariat"
        description="The student secretariat behind CUKCCMUN'27, working to deliver an exceptional conference experience."
      />
      <TeamGrid
        roles={[
          'Secretary-General',
          'Director-General',
          'Deputy Secretary-General',
          'Under-Secretary-General, Delegate Affairs',
          'Under-Secretary-General, Logistics',
          'Under-Secretary-General, Public Relations',
          'Under-Secretary-General, Hospitality',
          'Under-Secretary-General, Media',
        ]}
      />
    </>
  )
}
