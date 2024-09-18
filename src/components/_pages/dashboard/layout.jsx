'use client'

import { useEffect, useState } from "react"

import LoadingVideo from './loadingVideo'

const RootLayout = ({ children }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or performing an API request
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Replace with actual data loading logic
  }, []);
  return (
    <>
      <LoadingVideo loading={loading}/>
      <div className={` ${loading ? 'content' : 'content-loaded'}`}>
        {children}
      </div>
    </>
      
  )
}

export default RootLayout