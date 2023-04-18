export const baseRichTextEditorWrapperStyles = {
  wrapper: `grid py-10 text-black place-items-center`,
  container: `bg-white rounded-[40px] flex flex-col gap-2 p-4 w-screen md:w-full md:max-w-[800px] h-fit shadow-md shadow-black/10`,
}

export const controlsStyles = {
  wrapper: `flex w-10 -ml-2 md:-ml-0 mr-2 md:mr-0 flex-col md:flex-row items-center my-2 justify-between md:w-full rounded-[40px] md:border-[2px] border-pink`,
  firstSectionIconsContainer: `flex flex-col md:flex-row p-2 gap-x-1 items-center`,
  listItem: `cursor-pointer rounded-full p-1 hover:bg-pink hover:text-white w-fit`,
  secondSectionIconsContainer: `p-2 gap-x-1 flex flex-col md:flex-row items-center`,
}

export const editingOperationsStyles = {
  wrapper: `flex items-center justify-between`,
  editingInfoContainer: `flex items-center gap-x-2`,
  editingSpan: `font-medium uppercase tracking-tighter`,
  operationsContainer: `flex items-center ml-auto w-fit gap-x-2`,
  cancelEditButton: `block w-fit border-[2px] border-pink py-[7px] px-4 text-black font-medium rounded-full`,
  deleteEditButton: `block w-fit bg-orange py-2 px-4 text-white font-medium rounded-full`,
  updateEditButton: `block w-fit bg-pink py-2 px-4 text-white font-medium rounded-full`,
}

export const headingsInputStyles = {
  wrapper: `flex flex-col gap-y-6 mb-4`,
  title: `text-[32px] placeholder:text-gray transition-all duration-300 focus:translate-x-2 rounded-md font-semibold bg-transparent outline-none`,
  subtitle: `text-[24px] placeholder:text-gray transition-all duration-300 focus:translate-x-2 rounded-md font-light -mt-8 bg-transparent outline-none`,
}

export const importSavePopUpStyles = {
  overlay: `bg-black/20 z-[500] fixed inset-0`,
  wrapper: `bg-white z-[2000] fixed py-8 px-14 text-black w-fit rounded-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`,
  alertInfoContainer: `flex flex-col items-center justify-center`,
  txtOrange: `text-orange`,
  areYouSure: `font-poppins text-2xl font-semibold mt-2 mb-1`,
  span: `max-w-[250px] w-full text-center text-sm text-gray pb-4 block`,
  buttonsContainer: `flex items-center justify-center gap-x-4 mt-4`,
  handleButton: (bgColor: string) => {
    return `${bgColor} hover:scale-105 text-white z-50 relative transition-all duration-300 rounded-full block w-[105px] p-2 active:scale-100 outline-none`
  },
}

export const savePopUpStyles = {
  overlay: `bg-black/20 z-[500] fixed inset-0`,
  wrapper: `bg-white z-[2000] fixed py-8 px-14 text-black w-fit rounded-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`,
  alertInfoContainer: `flex flex-col items-center justify-center`,
  txtPink: `text-pink`,
  areYouSure: `font-poppins text-2xl font-semibold mt-2 mb-1`,
  span: `max-w-[250px] w-full text-center text-sm text-gray pb-4 block`,
  buttonsContainer: `flex items-center justify-center gap-x-4 mt-4`,
  handleButton: (bgColor: string) => {
    return `${bgColor} hover:scale-105 text-white z-50 relative transition-all duration-300 rounded-full block w-[105px] p-2 active:scale-100 outline-none`
  },
}

export const langVersionStyles = {
  wrapper: `absolute right-0 -top-8`,
  flagContainer: `flex gap-x-2 cursor-default items-center`,
  span: `text-sm`,
  image: `w-8 h-8 cursor-pointer`,
}

export const publishOperationStyles = {
  buttonSubmit: `block ml-auto w-fit bg-pink py-2 px-4 text-white font-medium rounded-full`,
}

export const searchProjectStyles = {
  wrapper:`relative group max-w-[320px] h-8 rounded-full`,
  searchIcon: `absolute group-focus-within:text-orange top-1 left-2 text-black/80`,
  container: `h-full w-full flex items-center gap-x-2`,
  inputANDResultBoxContainer: `h-full`,
  input: `h-full w-full pl-8 pr-3 bg-transparent placeholder:text-gray border-[2px] border-black focus:border-orange outline-none rounded-full`,
  resultBox: `relative overflow-hidden z-50 bg-pink mt-1 w-full !max-w-[242px] rounded-lg`,
  listItemResult: `text-sm text-left max-w-[242px] w-full font-medium cursor-pointer hover:bg-orange text-white py-[2px] px-4`,
  button: `disabled:bg-pink disabled:cursor-not-allowed bg-orange block ml-auto w-fit py-1 px-2 text-white font-medium rounded-full`,
}

export const selectProjectTypeStyles = {
  wrapper: `relative w-fit`,
  container: `text-sm flex justify-center gap-x-2 px-2 cursor-pointer border-[2px] border-pink py-1 rounded-full`,
  handleCaretDirection: (showSelectDropdown: boolean) => {
    return `${showSelectDropdown && '-rotate-180'} transition-all duration-150`
  },
  dropdown: `absolute z-50 bg-pink mt-1 w-full rounded-lg overflow-hidden`,
  unorderedList: `text-center`,
  listItem: `text-sm font-medium cursor-pointer hover:bg-orange text-white py-[2px]`,
}

export const textareaInputStyles = {
  input: `rounded-xl min-h-full md:h-[300px] mb-2 w-full outline-none bg-pink resize-none p-4 text-black`,
}

export const uploaderStyles = {
  wrapper: `flex items-center gap-2`,
  newCoverButton: `bg-pink block w-fit whitespace-nowrap py-2 px-4 text-white font-medium rounded-full`,
  truncateTxt: `truncate w-[200px]`,
  handleUploadButton: (uploadedFile: File | null) => {
    return `${
      uploadedFile ? 'bg-orange' : 'bg-pink'
    } block w-fit whitespace-nowrap py-2 px-4 text-white font-medium rounded-full`
  },
}
