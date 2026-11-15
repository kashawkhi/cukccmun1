import { HeroSection } from '@/components/home/hero-section'
import { AboutUniversity } from '@/components/home/about-university'
import { AboutMun } from '@/components/home/about-mun'
import { FindUs } from '@/components/home/find-us'
import { WhoCanAttend } from '@/components/home/who-can-attend'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUniversity />
      <AboutMun />
      <FindUs />
      <WhoCanAttend />
    </>
  )
}
