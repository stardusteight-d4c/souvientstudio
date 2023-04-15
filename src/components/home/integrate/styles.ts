export const projectSliderContainerStyles = {
  title: `text-[38px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8`,
  titleSpan: `text-[#fe5b30]`,
  wrapper: `overflow-x-hidden h-fit relative`,
  overlayLeft: `absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent`,
  overlayRight: `absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent`,
  noProjectsFound: `text-[#2e2e2e] text-xl font-medium py-5 text-center w-full`,
}

export const sliderCardStyles = {
  coverImage: `w-full h-full object-cover pointer-events-none`,
  overlay: `inset-x-0 transition-all duration-75 bg-gradient-to-t from-[#fe9bba] via-[#fe9bba]/50 to-transparent bottom-0 h-[100px] hidden group-hover:block`,
  content: `content`,
  titleContainer: `title px-4 text-center`,
  title: `font-bold text-2xl uppercase`,
  subtitle: `font-medium tracking-widest uppercase text-lg`,
}

export const skillImageStyles = {
  image: `w-[160px] h-[160px] hover:scale-95 cursor-default transition-all duration-300 object-cover rounded-[40px]`,
}

export const serviceCardStyles = {
  handleWrapper: (index: number) => {
    return `${
      index % 2 === 0 && 'mdd:mt-20'
    } shadow-lg max-w-[300px] h-[250px] text-left w-full flex items-start justify-center flex-col px-[20px] rounded-3xl`
  },
  emojiImage: `w-[50px] h-[50px] ml object-cover`,
  title: `text-2xl text-[#2e2e2e] pb-3 pt-2 !leading-[27px] tracking-[-0.3px] font-semibold`,
  text: `font-inter text-sm !leading-[21px] text-[#505050]`,
}
