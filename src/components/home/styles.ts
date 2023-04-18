export const heroStyles = {
  wrapper: `pb-[100px] pt-[200px] bg-gradient-to-b from-pink to-white px-4 relative h-fit overflow-hidden`,
  dottedGridContainer: `inset-0 z-10 pointer-events-none`,
  circle: `circle`,
  container: `max-w-[1200px] z-50 h-fit w-full mx-auto`,
  presentationWrapper: `mx-auto w-fit gap-y-[19px] flex flex-col items-center justify-center`,
  avatarContainer: `relative flex items-center justify-center`,
  spinnerLeft: `spinner absolute -top-[50px] -left-[100px] md:-left-[300px] w-[84px] h-[84px]`,
  spinnerRight: `spinner absolute -bottom-[30px] -right-[100px] md:-right-[300px] w-[64px] h-[64px]`,
  spinnerBlurEffect: `spinner1 z-50 w-[110px] h-[110px]`,
  spinnerBlurEffectComplement: `spinner1`,
  avatar: `absolute z-50 top-1 w-[100px] h-[100px] rounded-full object-cover`,
  presentationTxt: `text-transparent bg-orange bg-clip-text font-medium text-xl font-poppins !tracking-[-0.3px]`,
  headingOne: `text-black z-50 relative text-4xl md:text-[50px] mdd:text-[72px] text-center mt-[20px] leading-[40.4px] md:!leading-[58.4px] h-fit mdd:!leading-[86.4px] mx-auto w-full max-w-[350px] sm:max-w-[928px] font-semibold font-poppins !tracking-[-1px]`,
  breakLine: `hidden sm:block`,
  subtitle: `text-gray text-lg mt-[20px] w-full max-w-[350px] sm:max-w-[580px] mx-auto !leading-[28.8px] text-center`,
  linkButton: `hover:scale-105 uppercase text-[#FFFFFF] z-50 relative bg-pink transition-all duration-300 rounded-full w-fit block py-3 px-8 active:scale-100 outline-none mx-auto mt-[40px]`,
}

export const marqueeStyles = {
  wrapper: (isVisible: boolean) => {
    return `${
      isVisible ? 'marquee-section-animation' : 'hidden'
    } relative max-w-[100vw] pb-[20px] overflow-x-hidden relative`
  },
  leftOverlay: `z-[100] bg-gradient-to-r from-white via-white/80 to-transparent inset-y-0 w-[50px] md:w-[200px] absolute left-0`,
  rightOverlay: `z-[100] bg-gradient-to-l from-white via-white/80 to-transparent inset-y-0 w-[50px] md:w-[200px] absolute right-0`,
  marqueeWrapper: `w-fit text-black cursor-default justify-center relative flex items-center`,
  marqueeAnimateContainer: `animate-marquee text-4xl md:text-[50px] mdd:text-[62px] font-semibold gap-x-3 flex w-fit whitespace-nowrap`,
  itemWrapper: `min-w-fit max-w-fit`,
  spanContainer: `flex items-center !leading-[140%]`,
  slashDivider: `text-transparent bg-gradient-to-t from-white to-pink bg-clip-text block ml-3`,
}

export const projectsStyles = {
  wrapper: `max-w-screen overflow-x-hidden`,
  contentWrapper: `py-[100px] md:px-4 lg:px-14 relative h-fit max-w-[1445px] mx-auto`,
  contentContainer: `mx-auto space-y-20`,
  overflowLeftHide: `bg-white hidden lg:block absolute z-50 top-0 bottom-0 left-[36px] -right-[500px] -translate-x-full`,
}

export const behanceStyles = {
  wrapper: `pb-[100px]`,
  container: `max-w-[1200px] mx-auto`,
  handleParagraph: (isVisible: boolean) => {
    return `${
      isVisible && 'behance-animation'
    } !leading-[28.8px] w-full px-2 max-w-[320px] md:max-w-[340px] mx-auto text-center text-lg text-black font-normal`
  },
  handleLinkButton: (isVisible: boolean) => {
    return `${
      isVisible && 'behance-button-animation'
    } block mt-[40px] w-fit bg-pink py-3 px-6 mx-auto text-[#FFFFFF] font-medium rounded-full`
  },
}

export const skillsStyles = {
  wrapper: `pb-[150px] pt-[100px]`,
  container: `max-w-[1200px] px-4 mx-auto`,
  title: `text-[32px] text-black block w-fit mx-auto !tracking-[-2px] font-medium !leading-[41.6px] font-poppins`,
  skillsWrapper: `flex relative flex-col mdd:flex-row overflow-hidden mdd:overflow-visible max-w-[100vw] mdd:max-w-[1032px] items-center gap-y-6 mdd:justify-between mx-auto mt-[50px]`,
}

export const servicesStyles = {
  wrapper: `pb-[100px] pt-[50px]`,
  container: `max-w-[1032px] px-4 lg:px-0 text-center mx-auto`,
  span: `text-orange font-medium text-xl font-poppins !tracking-[-0.3px]`,
  title: `text-[32px] text-black mb-12 block w-fit mx-auto !tracking-[-2px] font-medium !leading-[41.6px] font-poppins`,
  cardWrapper: `flex flex-col gap-y-6 mdd:flex-row justify-between items-center`,
}

export const contactStyles = {
  wrapper: `py-[100px]`,
  container: `max-w-[1032px] text-center lg:text-start px-4 lg:px-0 mx-auto`,
  collab: `text-orange font-medium text-xl font-poppins !tracking-[-0.3px]`,
  haveAproject: `block mt-1 text-black text-[32px] md:text-[48px] !leading-[52.8px] !tracking-[-1px] font-semibold`,
  contactLinkContainer: `cursor-pointer text-black group mx-auto md:mt-3 lg:mt-0 lg:mx-0 w-fit flex flex-col md:flex-row items-center gap-x-2 text-[32px] md:text-[48px] !leading-[52.8px] !tracking-[-1px] font-semibold`,
  contact: `group-hover:text-orange`,
  arrow: `fill-black w-[42px] h-[42px] md:w-[56px] md:h-[56px] group-hover:fill-orange mt-1 group-hover:rotate-[45deg] group-hover:translate-x-2 transition-all duration-200`,
}
