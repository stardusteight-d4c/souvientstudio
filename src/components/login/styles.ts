export const baseLayoutLoginStyles = {
  wrapper: `min-h-screen bg-gradient-to-b from-pink text-black to-transparent overflow-hidden`,
  logo: `absolute left-1/2 -translate-x-1/2 mt-8 font-bold mx-auto w-fit text-3xl cursor-pointer tracking-[-1px] uppercase text-white`,
  formWrapper: `flex flex-col items-center justify-center h-[100vh]`,
  formContainer: `flex shadow-sm shadow-black/10 bg-white rounded-[50px] px-8 pt-14 pb-10 items-center flex-col gap-4`,
}

export const formStyles = {
  input: `py-1 px-4 bg-white placeholder:text-gray border-[2px] border-black focus:border-orange outline-none rounded-full`,
  requestAccessLinkBtn: `block mt-2 mx-auto w-fit bg-pink py-2 px-4 text-white font-medium rounded-full`,
}
