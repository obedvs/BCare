import Header from '@/components/landing/header'
import Stats from '@/components/landing/stats'
import AboutUs from '@/components/landing/AboutUs'
import Testimonials from '@/components/landing/testimonials'
import FAQ from '@/components/landing/faq-section'
import TeamSection from '@/components/landing/team-section'
import Roadmap from '@/components/landing/roadmap'

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