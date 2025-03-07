// import ModalVideo from './modal-video'

export default function Header() {
  return (
    <section id='home' className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-4 md:pb-6">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Be Careful</h2>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-b from-[#552CB3] to-[#6DFFD6]">B-CARE</span></h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-0" data-aos="zoom-y-out" data-aos-delay="150">In B-Care we seek to ease the tracking of the treatment of cancer.</p>
              <p className="text-xl text-gray-600 mb-0" data-aos="zoom-y-out" data-aos-delay="150">We provide a method so patients can keep the progress of their sickness in their control.</p>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb="/assets/images/logoAnimation.gif"
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="B-Care Video Thumbnail"
            video="/b-care.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section>
  )
}