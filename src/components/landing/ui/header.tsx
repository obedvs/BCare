"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";

export default function NavBar() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex gap-x-2 items-center">
            <Logo />
            {/* <h1 className="font-bold text-2xl">B-Care</h1> */}
          </div>

          {/* Desktop navigation */}
          {/* <nav className="hidden md:flex md:grow">
            <Link
              href="/login"
              className="flex grow justify-end flex-wrap items-center"
            >
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <button className="font-medium text-gray-600 hover:text-[#7655C1] px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Login
                  </button>
                </li>
                <li>
                  <button className="text-gray-100 bg-[#34A5AB] hover:bg-[#7655C1] ml-3 px-4 py-2 flex items-center transition duration-150 ease-in-ou rounded shadow font-medium leading-[1.375] border border-transparent">
                    <span>Sign up</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-100 shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </Link>
          </nav> */}

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
