import UseCarousel from "./carousel-settings";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <h2 className="text-4xl font-extrabold mb-2">Testimonials</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <div className="flex justify-center items-center">
              <UseCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
