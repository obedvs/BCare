import '@/css/additional-styles/timeline.css'

import { IoLogoAndroid, IoLogoApple, IoLocation, IoFlag } from 'react-icons/io5'

const items = [
  {
    title: 'Q3 2023',
    color: '#6DFFD6',
    icon: IoLocation,
    list: [
      'Project Settlement',
      'Beta Android App',
      'Cancer Tracker',
      'Social Website'
    ]
  },
  {
    title: 'Q1 2024',
    color: '#2392F5',
    icon: IoLogoAndroid,
    list: [
      'Android App Launch',
      'Pre-Sale on Nomo Zeniq',
      'Public Launch on Zeniq Smart Chain',
      'Audit Contract',
      'Diabetes Tracker'
    ]
  },
  {
    title: 'Q2 2024',
    color: '#552CB3',
    icon: IoLogoApple,
    list: [
      'Launch',
      'Infuencer Marketing',
      'Beta iOS App',
      'Team Expansion',
      'Hypertension Tracker'
    ]
  },
  {
    title: 'Q3 2024',
    color: '#34A5AB',
    icon: IoFlag,
    list: [
      'Alpha Diagnosis IA',
      'Renal Insufficiency Tracker',
      'Beta iOS App',
      'Associations Expansion',
      'iOS App Launch'
    ]
  }
]

export default function Roadmap() {
    return (
      <section id="roadmap" className="relative">
  
        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
  
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex justify-around">
          <div className="py-6 md:py-10 flex flex-col justify-around">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center md:mb-6" data-aos="zoom-in-down">
              <h2 className="text-4xl font-extrabold"><span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span> Roadmap</h2>
            </div>
  
            {/* Items */}
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto" data-aos="zoom-in-down">
              <div className="timeline-step lg:mt-0 mt-12">
                <div className="timeline-icon border-q0 mb-14">
                  <IoLocation color='#6DFFD6' size={64} style={{transform: "rotate(-45deg)"}} className='svg-q0'/>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#6DFFD6]'>Q3 2023</h4>
                  <div className="line bg-[#6DFFD6]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Project Settlement</li>
                    <li>• Beta Android App</li>
                    <li>• Cancer Tracker</li>
                    <li>• Social Website</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-step lg:mt-24 mt-12">
                <div className="timeline-icon border-q1 mb-14">
                  <IoLogoAndroid color='#2392F5' size={64} style={{transform: "rotate(-45deg)"}} className='svg-q1'/>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#2392F5]'>Q1 2024</h4>
                  <div className="line bg-[#2392F5]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Android App Launch</li>
                    <li>• Pre-Sale on Nomo Zeniq</li>
                    <li>• Public Launch on Zeniq Smart Chain</li>
                    <li>• Audit Contract</li>
                    <li>• Diabetes Tracker</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-step lg:mt-0 mt-12">
                <div className="timeline-icon border-q2 mb-14">
                  <IoLogoApple color='#552CB3' size={64} style={{transform: "rotate(-45deg)"}} className='svg-q2'/>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#552CB3]'>Q2 2024</h4>
                  <div className="line bg-[#552CB3]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Launch</li>
                    <li>• Infuencer Marketing</li>
                    <li>• Beta iOS App</li>
                    <li>• Team Expansion</li>
                    <li>• Hypertension Tracker</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-step lg:mt-24 mt-12">
                <div className="timeline-icon border-q3 mb-14">
                  <IoFlag color='#34A5AB' size={64} style={{transform: "rotate(-45deg)"}} className='svg-q3'/>
                </div>
                <div className="timeline-info">
                  <h4 className='h4 mb-2 text-[#34A5AB]'>Q3 2024</h4>
                  <div className="line bg-[#34A5AB]"></div>
                  <ul className="list-inside text-gray-600 text-left">
                    <li>• Alpha Diagnosis IA</li>
                    <li>• Renal Insufficiency Tracker</li>
                    <li>• Beta iOS App</li>
                    <li>• Associations Expansion</li>
                    <li>• iOS App Launch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }