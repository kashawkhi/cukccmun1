import type { Metadata } from 'next'
import { PageHero } from '@/components/section-heading'
import { TeamGrid } from '@/components/team-grid'

export const metadata: Metadata = { title: 'Executive Board' }

export default function ExecutiveBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Chairs & Moderators"
        title="Executive Board"
        description="Meet the experienced chairpersons, vice-chairs and rapporteurs who will guide each committee."
      />
      <TeamGrid roles={['Chairperson', 'Vice-Chairperson', 'Rapporteur', 'Chairperson', 'Vice-Chairperson', 'Rapporteur', 'Chairperson', 'Vice-Chairperson']} />
    </>
  )
}
