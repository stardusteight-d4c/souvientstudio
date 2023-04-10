import { useAppContext } from '@/@context/ContextProvider'

export default function Dribbble() {
  const { homeLocaleContextText } = useAppContext()

  if (!homeLocaleContextText) {
    return <></>
  }

  return (
    <section className="pb-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <p className="!leading-[28.8px] w-full max-w-[340px] mx-auto text-center text-lg text-[#2e2e2e] font-normal">
          {homeLocaleContextText.dribbble.span}
        </p>
        <a
          href="https://www.behance.net/fersena"
          target="_blank"
          className="block mt-[40px] w-fit bg-[#FE9BBA] py-3 px-6 mx-auto text-[#F8F7E2] font-medium rounded-full"
        >
          {homeLocaleContextText.dribbble.button}
        </a>
      </div>
    </section>
  )
}
