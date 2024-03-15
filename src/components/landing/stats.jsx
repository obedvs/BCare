'use client'

import { useState, useRef, useEffect } from 'react'
import { StatisticsChart1 } from './statisticsBars';
import { StatisticsChart2 } from './statisticsDoughnut'

export default function Stats() {
  
  const [tab, setTab] = useState(1)

  const tabs = useRef<(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section id='stats' className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-10">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <h1 className="text-4xl font-extrabold mb-2">Statistics</h1>
            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>

          {/* Section content */}
          <div className="flex flex-col lg:flex-row">

            {/* Content Left */}
            <div className="h-auto w-full m-2" data-aos="fade-right">
                <div className="relative flex flex-col justify-center items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-3xl font-bold leading-tight text-center mb-3">Most common types of cancer in 2020</h3>
                    <StatisticsChart1 />
                </div>
            </div>
            {/* Content Right */}
            <div className="h-auto w-full m-2" data-aos="fade-left">
              {/* <div className="md:pr-4 lg:px-2 xl:px-2 mb-8"> */}
                <div className="relative flex flex-col justify-center items-center p-6 bg-white rounded shadow-xl">
                  <h3 className="text-3xl font-bold leading-tight text-center mb-3">People who were affected by cancer in 2018</h3>
                    <StatisticsChart2 />
                {/* </div> */}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}