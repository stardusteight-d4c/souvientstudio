import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)
  const [isOpenMenu, setIsOPenMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handlegradientShadowOnScroll)
    // executeAnimation();
    return () => {
      window.removeEventListener('scroll', handlegradientShadowOnScroll)
    }
  }, [])

  function handlegradientShadowOnScroll() {
    if (window.scrollY >= 100) {
      setIsGradientShadowOn(true)
    } else if (window.scrollY === 0) {
      setIsGradientShadowOn(false)
      // executeAnimation();
    } else {
      setIsGradientShadowOn(false)
    }
  }

  return (
    <nav
      className={`${
        isGradientShadowOn &&
        'bg-gradient-to-b from-[#FE9BBA] via-[#FE9BBA]/50 to-transparent'
      } fixed z-[1000] w-screen inset-x-0 top-0`}
    >
      <div className="flex relative items-center max-w-[1445px] px-8 md:px-14 mx-auto justify-between py-8">
        <Link
          href="/"
          className="font-bold cursor-pointer text-[20px] tracking-[-1px] uppercase"
        >
          Fevient
        </Link>
        <ul className="hidden text-[#F8F7E2] sm:flex items-center gap-x-[40px]">
          <li className="cursor-pointer font-medium">About</li>
          <li className="cursor-pointer font-medium">Contact</li>
        </ul>
        <div className="sm:hidden">
          {isOpenMenu ? (
            <div
              onClick={() => setIsOPenMenu(false)}
              className="sm:hidden cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#F8F7E2"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setIsOPenMenu(true)}
              className="sm:hidden cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#F8F7E2"
                viewBox="0 0 256 256"
              >
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
              </svg>
            </div>
          )}
          {isOpenMenu && (
            <>
              <div className="bg-gradient-to-b -z-10 from-[#FE9BBA]/90 to-[#F8F7E2]/50 h-screen fixed inset-0" />
              <div className="absolute px-[30px] -bottom-24 left-0">
                <li className="text-3xl cursor-pointer font-medium list-none">
                  About
                </li>
                <li className="text-3xl cursor-pointer font-medium list-none">
                  Contact
                </li>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
