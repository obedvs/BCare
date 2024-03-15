'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/landing/ui/footer'
import NavBar from '@/components/landing/ui/header'

export default function RootLayout({ children }) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <main className="grow">
        <NavBar/>
        {children}
      </main>
      <Footer />
    </>
  )
}