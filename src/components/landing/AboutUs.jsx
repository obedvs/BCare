import assetTeam from '@/assets/images/Oncologist.webp'
import Image from 'next/image'

import { FaHandHoldingHeart, FaEye } from 'react-icons/fa'
import { TbTargetArrow } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";

export default function AboutUs() {
  return (
    <section id='AboutUs' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="py-6 md:py-10">

          {/* Section header */}
          <div className="flex justify-center text-center pb-4 md:pb-4" data-aos="zoom-y-out">
            <h2 className="text-4xl font-extrabold mb-2 w-2/3 lg:w-1/3">What are we doing in <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span></h2>
          </div>

          {/* Items */}
          <div className="max-w-auto grid gap-6 md:grid-cols-4 mx-2" data-aos="zoom-y-out">
            <div className="md:col-span-2 grid gap-6 md:grid-cols-2">
              {/* 1st item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex justify-between items-center w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Mision</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <TbTargetArrow size={20} color='#ffffff'/>
                  </div>
                </div>
                <p className="text-gray-600 text-start">We aim to revolutionize cancer patient care with an innovative blockchain system that tracks and documents their progress.</p>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex justify-between items-center w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Vision</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <FaEye size={20} color='#ffffff'/>
                  </div>
                </div>
                <p className="text-gray-600 text-start">In B-care, we envision a world where patient data is secure, accessible, and fuels treatment recomcenterations for patients to have a better process.</p>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex justify-between items-center w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Values</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <FaHandHoldingHeart size={20} color='#ffffff'/>
                  </div>
                </div>
                <ul className="list-outside text-gray-600 text-start ml-4">
                  <li className='list-disc'>Embracing cutting-edge technologies and methodologies for better cancer care.</li>
                  <li className='list-disc'>Staying ahead in healthcare innovation.</li>
                </ul>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex justify-between items-center w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Why us?</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <LuBadgeCheck size={20} color='#ffffff'/>
                  </div>
                </div>
                <p className="text-gray-600 text-start">Our patient-centered system prioritizes cancer patients. It's user-friendly, intuitive, and accessible for everyone involved in their care journey.</p>
              </div>

            </div>
            <div className="md:col-span-2 relative flex flex-col gap-6">
              {/* image item */}
              <div className="h-full w-full relative md:inline-flex flex-col bg-white rounded shadow-xl hidden">
                <Image src={ assetTeam } alt="asset-teamwork" className="rounded object-cover h-full w-full" width={1026} height={577}/>
              </div>
              <div className="h-12 relative flex justify-center">
                <a className="text-white w-auto mb-0 sm:w-auto shadow-xl hover:bg-[#552CB3] bg-[#7655C1] px-8 py-3 leading-snug font-medium rounded" href="#team-section">Meet our Team</a>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}