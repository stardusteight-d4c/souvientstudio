export const baseLayoutEditorStyles = {
  wrapper: `flex relative z-50 overflow-hidden items-center 3xl:h-screen flex-col justify-between`,
  handleContainer: (showPreview: boolean) => {
    return `${
      showPreview ? 'bg-white' : 'bg-gradient-to-b'
    }  from-pink/80 to-transparent relative z-50 overflow-hidden`
  },
}

export const projectShowdownStyles = {
  wrapper: `min-h-screen`,
  container: `relative`,
  backToEditorButton: `block relative left-1/2 -translate-x-1/2 -mt-12 z-50 font-bold uppercase w-fit text-black py-2 px-4 bg-white rounded-full`,
  thumbnail: `absolute hidden lg:block object-cover rounded-3xl z-50 border-black/50 border-[2px] border-dashed -bottom-[185px] right-20 max-w-[180px] max-h-[125px] min-w-[180px] min-h-[125px]`,
  articleWrapper: `max-w-[800px] mt-8 text-black w-full mx-auto`,
}

export const richTextEditorStyles = {
  headerWrapper: `flex flex-col-reverse gap-y-2 md:gap-y-0 md:flex-row justify-between md:items-center`,
  bodyWrapper: `h-full relative`,
  bodyEditor: `flex md:flex-col`,
}
