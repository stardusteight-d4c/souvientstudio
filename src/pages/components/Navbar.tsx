export default function Navbar() {
  return (
    <nav className="fixed px-8 z-[1000] w-screen overflow-hidden inset-x-0 top-0 bg-gradient-to-b from-[#020202] via-[#020202]/90 to-transparent">
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
