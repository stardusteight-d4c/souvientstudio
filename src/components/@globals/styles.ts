export const navbarStyles = {
  handleWrapper: (isGradientShadowOn: boolean) => {
    return `${
      isGradientShadowOn &&
      'bg-gradient-to-b from-[#FE9BBA] via-[#FE9BBA]/50 to-transparent'
    } fixed z-[1000] w-screen inset-x-0 top-0`
  },
  container: `flex relative items-center max-w-[1445px] px-8 md:px-14 mx-auto justify-between py-8`,
  fevientLogo: `font-bold cursor-pointer text-[20px] tracking-[-1px] uppercase`,
  desktopUnorderedList: `hidden text-[#F8F7E2] sm:flex items-center gap-x-[40px]`,
  desktopListItem: `effect-underline relative w-fit cursor-pointer duration-500 font-medium list-none`,
  hideMobileMenu: `sm:hidden`,
  cursorPointer: `cursor-pointer`,
  wrapperMobileMenu: `bg-gradient-to-b backdrop-blur-sm -z-10 from-[#FE9BBA]/90 to-[#F8F7E2]/50 h-screen fixed inset-0`,
  containerMobileMenu: `absolute px-[30px] -bottom-48 left-0 w-full`,
  mobileUnorderedList: `w-fit mx-auto flex items-center justify-center flex-col gap-y-4`,
  mobileListItem: `effect-underline text-3xl cursor-pointer font-medium list-none`,
}
