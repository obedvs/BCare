import UseTeamCard from './team-settings'

export default function TeamSection() {
    return (
      <section id="team-section" className="relative">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-down">
          <div className="py-6 md:py-10">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
              <h2 className="text-4xl font-extrabold mb-4">Meet our Team</h2>
              <p className="text-xl text-gray-600">Designers, Developers and Project Manager from <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span></p>
            </div>

            <UseTeamCard/>
  
          </div>
        </div>
      </section>
    )
  }