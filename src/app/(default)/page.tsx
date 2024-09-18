import Stats from '@/components/landing/stats'
import Header from '@/components/landing/header'
import AboutUs from '@/components/landing/about-us'
import FAQ from '@/components/landing/faq-section'
import Roadmap from '@/components/landing/roadmap'
import TeamSection from '@/components/landing/team-section'
import Testimonials from '@/components/landing/testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <Stats />
      <AboutUs />
      <Testimonials />
      <Roadmap />
      <TeamSection />
      <FAQ />
    </>
  )
}