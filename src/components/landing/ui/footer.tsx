import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 ">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 ">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-5">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#7655C1] hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </Link>
              {" · "}
              <Link
                href="/"
                className="text-gray-600 hover:text-[#7655C1] hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-5 lg:col-span-3">
            <h6 className="text-gray-800 mb-2 font-bold">Useful Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#home"
                  className="text-gray-600 hover:text-[#7655C1] transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#stats"
                  className="text-gray-600 hover:text-[#7655C1] transition duration-150 ease-in-out"
                >
                  Statistics
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#AboutUs"
                  className="text-gray-600 hover:text-[#7655C1] transition duration-150 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-[#7655C1] transition duration-150 ease-in-out"
                >
                  Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#team-section"
                  className="text-gray-600 hover:text-[#7655C1] transition duration-150 ease-in-out"
                >
                  Meet our Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#FAQ"
                  className="text-gray-600 hover:text-[#7655C1] transition duration-150 ease-in-out"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block: Newsletter */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h6 className="text-gray-800 font-bold mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="w-full text-gray-800 px-3 py-2 pr-12 text-sm rounded border border-gray-300 focus:ring-[#7655C1]"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-[#7655C1] mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            &copy; B-CARE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
