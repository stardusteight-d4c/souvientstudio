import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useAppContext } from '@/@context/ContextProvider'
import Navbar from '@/components/@globals/Navbar'
import axios from 'axios'
import { handleMarkdown } from '@/utils/handle-markdown'

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
                  <li onClick={() => handleSelected('bold')} className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M170.48,115.7A44,44,0,0,0,140,40H72a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8h80a48,48,0,0,0,18.48-92.3ZM80,56h60a28,28,0,0,1,0,56H80Zm72,136H80V128h72a32,32,0,0,1,0,64Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M200,56a8,8,0,0,1-8,8H157.77L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.23L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M200,224a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,224Zm-72-24a64.07,64.07,0,0,0,64-64V56a8,8,0,0,0-16,0v80a48,48,0,0,1-96,0V56a8,8,0,0,0-16,0v80A64.07,64.07,0,0,0,128,200Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88ZM40,200V172l52-52,80,80Zm176,0H194.63l-36-36,20-20L216,181.38V200Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm88,144H208l33.55-44.74a32,32,0,1,0-55.73-29.93,8,8,0,1,0,15.08,5.34,16.28,16.28,0,0,1,2.32-4.3,16,16,0,1,1,25.54,19.27L185.6,203.2A8,8,0,0,0,192,216h48a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                    </svg>
                  </li>

                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </li>
                </ul>
                <ul className="p-2 gap-x-1 flex items-center">
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM208,208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>
                    </svg>
                  </li>
                  <li className="cursor-pointer rounded-sm p-1 hover:bg-[#fe5b30]/80 hover:text-[#F8F7E2] w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
                    </svg>
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
