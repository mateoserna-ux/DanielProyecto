import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { AboutDoctor } from '@/components/about-doctor'
import { FeaturedTreatments } from '@/components/featured-treatments'
import { TestimonialBand } from '@/components/testimonial-band'
import { ServicesSection } from '@/components/services-section'
import { TreatmentGroups } from '@/components/treatment-groups'
import { HowToStart } from '@/components/how-to-start'
import { ResultsSection } from '@/components/results-section'
import { VideosReels } from '@/components/videos-reels'
import { ScheduleBand } from '@/components/schedule-band'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <StatsBar />
      <AboutDoctor />
      <FeaturedTreatments />
      <TestimonialBand />
      <ServicesSection />
      <TreatmentGroups />
      <HowToStart />
      <ResultsSection />
      <VideosReels />
      <ScheduleBand />
      <SiteFooter />
    </main>
  )
}
