export const projectSliderContainerStyles = {
  title: `text-[32px] md:text-[38px] px-2 md:px-4 md:px-0 text-black block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8`,
  titleSpan: `text-orange`,
  wrapper: `h-fit relative z-[10]`,
  overlayLeft: `absolute inset-y-0 w-[20px] md:w-[50px] z-50 -left-5 bg-gradient-to-r from-white via-white/50 to-transparent`,
  noProjectsFound: `text-black text-xl font-medium py-5 text-center w-full`,
}

export const sliderCardStyles = {
  coverImage: `w-full h-full object-cover pointer-events-none`,
  overlay: `inset-x-0 transition-all duration-75 bg-gradient-to-t from-pink/50 to-transparent bottom-0 h-[100px] md:hidden group-hover:block`,
  content: `content`,
  titleContainer: `title px-4 text-center`,
  title: `font-bold text-2xl uppercase`,
  subtitle: `font-medium tracking-widest uppercase text-lg`,
  sliderLink: `card-animate border border-gray/30 card rounded-[40px] overflow-hidden transition-all duration-500 cursor-pointer w-full lg:min-w-[450px] min-w-[300px] max-w-[300px] h-[300px] lg:max-w-[450px] lg:h-[350px] group relative select-none`,
}

export const skillImageStyles = {
  handleContainer: (isVisible: boolean, isEven: boolean) => {
    const animate = isVisible
      ? isEven
        ? 'animate-skill-from-up'
        : 'animate-skill-from-down'
      : ''
    return `${animate} w-[160px] h-[160px] border border-gray/30 rounded-[40px] relative inset-0`
  },
  image: `w-[160px] h-[160px] hover:scale-90 cursor-default transition-all duration-300 object-cover rounded-[40px]`,
}

export const serviceCardStyles = {
  handleWrapper: (index: number, isVisible: boolean) => {
    const wrapperElement = document.getElementById(`wrapper-${index}`)
    const animate = () => {
      setTimeout(() => {
        wrapperElement?.classList.remove('opacity-0')
        wrapperElement?.classList.add('service-card-animation')
      }, 800 * index)
    }
    if (isVisible) {
      animate()
    } else {
      wrapperElement?.classList.add('opacity-0')
      wrapperElement?.classList.remove('service-card-animation')
    }
    return `${
      index % 2 === 0 && 'mdd:mt-20'
    } opacity-0 shadow-lg max-w-[300px] border border-gray/30 h-[270px] text-left w-full flex items-start justify-center flex-col px-[28px] rounded-[40px]`
  },
  emojiImage: `w-[50px] h-[50px] ml object-cover`,
  title: `text-2xl text-black pb-3 pt-2 !leading-[27px] tracking-[-0.3px] font-semibold`,
  text: `font-inter text-sm !leading-[21px] text-gray`,
}
