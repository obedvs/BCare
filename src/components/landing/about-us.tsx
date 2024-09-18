import Image from 'next/image'

import { FaHandHoldingHeart, FaEye } from 'react-icons/fa'
import { TbTargetArrow } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";

export default function AboutUs() {
  return (
    <section id='AboutUs' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="top-1/2 md:mt-24 lg:mt-0 absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-gray-200"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="md:py-10 py-6">

          {/* Section header */}
          <div className="md:pb-4 flex justify-center pb-4 text-center" data-aos="zoom-y-out">
            <h2 className="lg:w-1/3 w-2/3 mb-2 text-4xl font-extrabold">What are we doing in <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span></h2>
          </div>

          {/* Items */}
          <div className="max-w-auto md:grid-cols-4 grid gap-6 mx-2" data-aos="zoom-y-out">
            <div className="md:col-span-2 md:grid-cols-2 grid gap-6">
              {/* 1st item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex items-center justify-between w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Mision</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <TbTargetArrow size={20} color='#ffffff'/>
                  </div>
                </div>
                <p className="text-start text-gray-600">We aim to revolutionize cancer patient care with an innovative blockchain system that tracks and documents their progress.</p>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex items-center justify-between w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Vision</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <FaEye size={20} color='#ffffff'/>
                  </div>
                </div>
                <p className="text-start text-gray-600">In B-care, we envision a world where patient data is secure, accessible, and fuels treatment recomcenterations for patients to have a better process.</p>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex items-center justify-between w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Values</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <FaHandHoldingHeart size={20} color='#ffffff'/>
                  </div>
                </div>
                <ul className="text-start ml-4 text-gray-600 list-outside">
                  <li className='list-disc'>Embracing cutting-edge technologies and methodologies for better cancer care.</li>
                  <li className='list-disc'>Staying ahead in healthcare innovation.</li>
                </ul>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-start p-6 bg-white rounded shadow-xl">
                <div className='flex items-center justify-between w-full mb-2'>
                  <h4 className="text-2xl font-bold leading-snug tracking-tight">Why us?</h4>
                  <div className='bg-[#34A5AB] rounded-full h-10 w-10 flex items-center justify-center'>
                    <LuBadgeCheck size={20} color='#ffffff'/>
                  </div>
                </div>
                <p className="text-start text-gray-600">Our patient-centered system prioritizes cancer patients. It's user-friendly, intuitive, and accessible for everyone involved in their care journey.</p>
              </div>

            </div>
            <div className="md:col-span-2 relative flex flex-col gap-6">
              {/* image item */}
              <div className="md:inline-flex relative flex-col hidden w-full h-full bg-white rounded shadow-xl">
                <Image src="/assets/images/Oncologist.webp" alt="asset-teamwork" className="object-cover w-full h-full rounded" width={1026} height={577}/>
              </div>
              <div className="relative flex justify-center h-12">
                <a className="text-white w-auto mb-0 sm:w-auto shadow-xl hover:bg-[#552CB3] bg-[#7655C1] px-8 py-3 leading-snug font-medium rounded" href="#team-section">Meet our Team</a>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}