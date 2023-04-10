import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useAppContext } from '@/@context/ContextProvider'
import Navbar from '@/components/@globals/Navbar'
import axios from 'axios'
import { handleMarkdown } from '@/utils/handle-markdown'
import {
  Bold,
  Italic,
  Underline,
  Link,
  Image,
  HeadingTwo,
  Quotes,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Eye,
  Disk,
  Download,
} from '@/components/@globals/atoms'

export default function Dashboard() {
  const projectsTypes = [
    'Visual identities',
    'Open sequences',
    'Personal projects',
  ]
  const [showSelectDropdown, setShowSelectDropdown] = useState(false)
  const { lang } = useAppContext()
  const { localeContextHome, setLocaleContextHome } = useAppContext()
  const [selectedProjectType, setSelectedProjectType] = useState(
    projectsTypes[0]
  )

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
  }, [lang])

  function handleSelected(type: string): void {
    const textareaElement = document.getElementById(
      'textarea'
    ) as HTMLTextAreaElement
    if (!textareaElement) {
      return
    }
    handleMarkdown(textareaElement, type)
  }

  return (
    <>
      <Head>
        <title>Fevient / Dashboard</title>
        <meta
          name="souvientstudio |  Graphic Designer"
          content="Graphic Designer, Visual Design, Product Strategy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#FE9BBA] to-transparent overflow-hidden">
        <Navbar />
        <section className="grid py-20 text-[#2e2e2e] place-items-center">
          <div className="bg-[#F8F7E2] rounded-xl flex flex-col gap-2 p-4 w-[800px] h-fit shadow-xl shadow-[#2e2e2e]/10">
            <button className="block w-fit bg-[#FE9BBA] py-2 px-4 text-[#F8F7E2] font-medium rounded-full">
              Upload cover image
            </button>
            <div className="relative w-fit">
              <div
                onClick={() => setShowSelectDropdown(!showSelectDropdown)}
                className="text-sm flex  justify-center gap-x-2 px-2 cursor-pointer border-[2px] border-[#FE9BBA] py-1 rounded-full"
              >
                {selectedProjectType}
                <div
                  className={`${
                    showSelectDropdown && '-rotate-180'
                  } transition-all duration-150`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#2e2e2e"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </div>
              {showSelectDropdown && (
                <div className="absolute bg-[#FE9BBA] mt-1 w-full rounded-lg overflow-hidden">
                  <ul className="text-center">
                    {projectsTypes.map((type) => {
                      if (type !== selectedProjectType) {
                        return (
                          <li
                            onClick={() => {
                              setSelectedProjectType(type)
                              setShowSelectDropdown(false)
                            }}
                            className="text-sm font-medium cursor-pointer hover:bg-[#fc81a8] text-[#F8F7E2] py-[2px]"
                          >
                            {type}
                          </li>
                        )
                      }
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-y-6 mb-4">
              <input
                placeholder="Title"
                className="text-[32px] placeholder:text-[#505050] transition-all duration-300 focus:translate-x-2 rounded-md font-semibold bg-transparent outline-none"
              />
              <input
                placeholder="Subtitle"
                className="text-[24px] placeholder:text-[#505050] transition-all duration-300 focus:translate-x-2 rounded-md font-light -mt-8 bg-transparent outline-none"
              />
            </div>
            <div className="h-full">
              <div className="flex items-center justify-between w-full rounded-t-xl border-[2px] border-b-0 border-[#fc81a8]">
                <ul className="p-2 gap-x-1 flex items-center">
                  <li
                    onClick={() => handleSelected('bold')}
                    className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit"
                  >
                    <Bold />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Italic />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Underline />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Link />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Image />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <HeadingTwo />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Quotes />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <AlignLeft />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <AlignCenter />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <AlignRight />
                  </li>
                </ul>
                <ul className="p-2 gap-x-1 flex items-center">
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Eye />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Disk />
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <Download />
                  </li>
                </ul>
              </div>
              <textarea
                id="textarea"
                className="inner-shadoww rounded-b-xl h-[300px] mb-2 w-full outline-none  border-[2px] border-[#fc81a8] border-t-0 bg-[#fc81a8]/50 resize-none p-4 text-[#2e2e2e]"
              />
              <button className="block ml-auto w-fit bg-[#FE9BBA] py-2 px-4 text-[#F8F7E2] font-medium rounded-full">
                Submit
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
