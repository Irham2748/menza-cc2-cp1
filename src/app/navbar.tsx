'use client';
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  const pathName = usePathname();

  return (
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/hero_section" className="text-white font-bold">
                  MENZA BARBER & COFFE
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className={`${pathName === "/" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${pathName === "/about" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2`}
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className={`${pathName === "/products" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2`}
                >
                  Products
                </Link>
                <Link
                  href="/teams"
                  className={`${pathName === "/teams" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2`}
                >
                  Teams
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                {isClick ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                  href="/"
                  className={`${pathName === "/" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2 block`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${pathName === "/about" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2 block`}
                >
                  About Me
                </Link>
                <Link
                  href="/products"
                  className={`${pathName === "/products" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2 block`}
                >
                  Products
                </Link>
                <Link
                  href="/teams"
                  className={`${pathName === "/teams" ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"}} hover:text-black rounded-lg p-2 block`}
                >
                  Teams
                </Link>
            </div>
          </div>
        )}
      </nav>
  );
}
