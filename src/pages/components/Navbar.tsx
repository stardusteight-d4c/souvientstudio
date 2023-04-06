import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)

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
        'bg-gradient-to-b from-[#020202] via-[#020202]/90 to-transparent'
      } fixed px-8 z-[1000] w-screen overflow-hidden inset-x-0 top-0`}
    >
      <div className="flex items-center max-w-[1200px] mx-auto justify-between py-8 ">
        <h2 className="font-bold text-[20px] tracking-[-1px] uppercase">
          Fevient
        </h2>
        <ul className="hidden sm:flex items-center gap-x-[40px]">
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="sm:hidden">Menu hamburguer</div>
      </div>
    </nav>
  )
}
