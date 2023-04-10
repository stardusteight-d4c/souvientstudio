export const heroStyles = {
  wrapper: `pb-[100px] pt-[200px] bg-gradient-to-b from-[#FE9BBA] to-[#F8F7E2] px-4 relative h-fit overflow-hidden`,
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
  presentationTxt: `text-transparent bg-[#fe5b30] bg-clip-text font-medium text-xl font-poppins !tracking-[-0.3px]`,
  headingOne: `text-[#2e2e2e] z-50 relative text-4xl md:text-[50px] mdd:text-[72px] text-center mt-[20px] leading-[40.4px] md:!leading-[58.4px]  mdd:!leading-[86.4px] mx-auto w-full max-w-[350px] sm:max-w-[928px] font-semibold font-poppins !tracking-[-1px]`,
  breakLine: `hidden sm:block`,
  subtitle: `text-[#505050] text-lg mt-[20px] w-full max-w-[350px] sm:max-w-[580px] mx-auto !leading-[28.8px] text-center`,
  linkButton: `hover:scale-105 uppercase text-white z-50 relative bg-[#FE9BBA] transition-all duration-300 rounded-full w-fit block py-3 px-8 active:scale-100 outline-none mx-auto mt-[40px]`,
}

export const marqueeStyles = {
  wrapper: `relative max-w-[100vw] pb-[20px] overflow-x-hidden relative`,
  leftOverlay: `z-[100] bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/80 to-transparent inset-y-0 w-[50px] md:w-[200px] absolute left-0`,
  rightOverlay: `z-[100] bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/80 to-transparent inset-y-0 w-[50px] md:w-[200px] absolute right-0`,
  marqueeWrapper: `w-fit text-[#2e2e2e] cursor-default justify-center relative flex items-center`,
  marqueeAnimateContainer: `animate-marquee text-4xl md:text-[50px] mdd:text-[62px] font-semibold gap-x-3 flex w-fit whitespace-nowrap`,
  itemWrapper: `min-w-fit max-w-fit`,
  spanContainer: `flex items-center !leading-[140%]`,
  slashDivider: `text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3`,
}
