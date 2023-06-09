export const navbarStyles = {
  handleWrapper: (isGradientShadowOn: boolean, isDashboardRoute: boolean) => {
    return `${
      isGradientShadowOn &&
      'bg-gradient-to-b from-pink via-pink/50 to-transparent'
    } ${!isDashboardRoute && 'fixed'} nav-animation z-[1000] w-screen inset-x-0 top-0`
  },
  container: `flex relative items-center max-w-[1445px] px-8 md:px-14 mx-auto justify-between py-8`,
  fevientLogo: `font-bold cursor-pointer text-[20px] tracking-[-1px] uppercase text-white`,
  desktopUnorderedList: `hidden text-white sm:flex items-center gap-x-[40px]`,
  desktopListItem: `effect-underline relative w-fit cursor-pointer duration-500 font-medium list-none`,
  hideMobileMenu: `sm:hidden`,
  cursorPointer: `cursor-pointer`,
  wrapperMobileMenu: `bg-gradient-to-b backdrop-blur-sm -z-10 from-pink/90 to-white/50 h-screen fixed inset-0`,
  containerMobileMenu: `absolute top-32 px-[30px] -bottom-48 left-0 w-full`,
  mobileUnorderedList: `w-fit mx-auto flex items-center justify-center flex-col gap-y-4`,
  mobileListItem: `effect-underline text-3xl cursor-pointer font-medium list-none`,
}

export const footerStyles = {
  wrapper: `pt-20 pb-4 w-full max-w-[100vw] overflow-hidden`,
  container: `max-w-[1032px] px-4 lg:px-0 mx-auto`,
  contentContainer: `text-sm text-black flex flex-col gap-y-4 md:flex-row items-center justify-between`,
  span: `text-center md:text-left`,
  unorderedList: `flex items-center gap-x-4`,
}
