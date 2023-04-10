import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useAppContext } from '@/@context/ContextProvider'
import Navbar from '@/components/@globals/Navbar'
import axios from 'axios'

export default function Dashboard() {
  const projectsTypes = [
    ' Visual identities',
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

  if (!localeContextHome) {
    return <>Loading...</>
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
      <main className="bg-gradient-to-b from-[#FE9BBA] to-transparent">
        <Navbar />
        <section className="grid text-[#2e2e2e] place-items-center my-auto">
          <div className="bg-[#F8F7E2] flex flex-col gap-2 border-[5px] border-[#fe5b30]/20 p-4 w-[800px] h-fit shadow-md shadow-[#2e2e2e]/10">
            <button className="block w-fit bg-[#FE9BBA] py-2 px-4 text-[#F8F7E2] font-medium rounded-full">
              Upload cover image
            </button>
            <div className="relative w-fit">
              <div
                onClick={() => setShowSelectDropdown(!showSelectDropdown)}
                className="text-sm w-[184px] flex items-center justify-center gap-x-2 font-medium cursor-pointer bg-[#FE9BBA] py-1 text-[#F8F7E2] rounded-full"
              >
                {selectedProjectType}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#F8F7E2"
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
            <div className="flex flex-col gap-y-6 my-2">
              <input
                placeholder="Title"
                className="text-[32px] transition-all duration-300 focus:scale-105 focus:translate-x-4 rounded-md font-semibold bg-transparent outline-none"
              />
              <input
                placeholder="Subtitle"
                className="text-[24px] transition-all duration-300 focus:scale-105 focus:translate-x-4 rounded-md font-light -mt-8 bg-transparent outline-none"
              />
            </div>
            <div className='h-full'>
              <div>controls</div>
              <textarea className="h-[400px] mb-2 w-full outline-none bg-[#fc81a8]/20 resize-none p-4 text-[#2e2e2e]" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
