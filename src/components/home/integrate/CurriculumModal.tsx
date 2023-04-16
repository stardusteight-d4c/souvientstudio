import ReactDOM from 'react-dom'
import { fernanda } from '@/assets'
import { useAppContext } from '@/@context/AppContextProvider'
import { useEffect, useState } from 'react'

export default function CurriculumModal() {
  const { localeContextHome, showCurriculum, setShowCurriculum } =
    useAppContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleHideModalOnScroll)
    return () => {
      window.removeEventListener('scroll', handleHideModalOnScroll)
    }
  }, [mounted])

  function handleHideModalOnScroll() {
    const element = document.getElementById('curriculum-box')!
    const curriculumHeight = element?.offsetHeight
    if (mounted) {
      if (window.scrollY >= curriculumHeight) {
        setShowCurriculum(false)
      }
    }
  }

  return ReactDOM.createPortal(
    <section className="absolute grid place-items-center bg-white/80 z-[1200] inset-0">
      <div
        id="curriculum-box"
        className="bg-paper-texture bg-100% absolute top-0 mx-2 w-fit mt-12 shadow-lg shadow-black/20 xll:max-w-[1300px] bg-white text-black border-[4px] border-orange/80 md:px-8 md:py-6 xll:w-full h-fit 2xl:mx-auto"
      >
        <div className="relative">
          <div className="sticky md:relative p-4 mb-8 md:p-0 md:mb-0 shadow-md md:shadow-none shadow-black/10 bg-white md:bg-transparent top-0">
            <div className="flex items-center gap-x-4 ml-auto w-fit">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#2e2e2e"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
                </svg>
              </div>
              <div
                onClick={() => setShowCurriculum(false)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#2e2e2e"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col md:flex-row items-center gap-x-4">
                <img
                  src={fernanda.src}
                  className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] rounded-full object-cover mr-5"
                  alt=""
                />
                <span className="text-center md:text-left text-gray my-8 md:my-0 font-normal block text-sm md:w-full mdd:min-w-[450px] xl:max-w-[600px]">
                  Hi, my name is Fernanda Chagas de Sena but i go by{' '}
                  <strong className="font-semibold">Fevient</strong>, I am an{' '}
                  <strong className="font-semibold">Graphic Designer</strong>{' '}
                  from Brazil. I am focused on Graphic Design, mainly branding,
                  and I am always ready for new proposals. You can learn more
                  about me and my work in this CV!
                </span>
              </div>
              <div className="text-center md:text-right w-full md:max-w-md font-poppins">
                <h2 className="text-2xl font-medium">Fevient</h2>
                <span className="block">Fernanda Chagas de Sena</span>
                <span className="block">Graphic Designer</span>
                <span className="block font-light">D.O.B.: 07/01/1997</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 font-poppins mt-8">
              {/* Column 1 */}
              <div>
                <h2 className="text-2xl font-light font-inter mb-4 tracking-tighter">
                  Education
                </h2>
                <div className="flex flex-col gap-y-4 lgg:w-[480px]">
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl font-light font-inter mb-4 mt-8 tracking-tighter">
                  Achievements
                </h2>
                <div className="flex flex-col gap-y-4">
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                </div>
              </div>
              {/* Column 2 */}

              <div>
                <h2 className="text-2xl font-light font-inter mb-4 tracking-tighter">
                  Experience
                </h2>
                <div className="flex flex-col gap-y-4">
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base">
                      Industrial Design And Product Development Engineering
                    </h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      University of Merida (UEx) / Merida, Spain / 2015 - 2020
                    </span>
                    <ul className="mt-2">
                      <li className="list-disc ml-7 text-sm">
                        Posters, infographics, logos and flyers design:
                        Photoshop and Illustrator
                      </li>
                      <li className="list-disc ml-7 text-sm">
                        Social networks management: Twitter, Facebook and
                        Instagram
                      </li>
                      <li className="list-disc ml-7 text-sm">
                        News update on the official website
                      </li>
                      <li className="list-disc ml-7 text-sm">
                        Treatment/service to customers via phone
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-x-8 mdd:justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-light font-inter mb-4 mt-8 tracking-tighter">
                      Software
                    </h2>
                    <div className="flex flex-col gap-y-2">
                      <div>
                        <h3 className="font-medium text-base">Photoshop</h3>
                        <div className="flex items-center gap-x-1">
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Illustrator</h3>
                        <div className="flex items-center gap-x-1">
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-base">After Effects</h3>
                        <div className="flex items-center gap-x-1">
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-base">Procreate</h3>
                        <div className="flex items-center gap-x-1">
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="bg-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                          <div className="border border-black rounded-full w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="xl:hidden block mt-8">
                    <h2 className="text-2xl font-light font-inter mb-4 tracking-tighter">
                      Contact
                    </h2>
                    <div className="flex flex-col gap-y-6">
                      <div>
                        <h3 className="font-medium text-base mb-1">Email</h3>
                        <span className="block -mt-[2px] text-gray text-sm">
                          fernandasenactt@gmail.com
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-base mb-1">
                          Languages
                        </h3>
                        <span className="block -mt-[2px] text-gray text-sm mb-1">
                          Portuguese | Native
                        </span>
                        <span className="block -mt-[2px] text-gray text-sm">
                          English | Fluent
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-base mb-1">
                          Abilities
                        </h3>
                        <ul>
                          <li className="list-disc ml-[14px] text-sm">
                            Responsible
                          </li>
                          <li className="list-disc ml-[14px] text-sm">
                            Organized
                          </li>
                          <li className="list-disc ml-[14px] text-sm">
                            Creative
                          </li>
                          <li className="list-disc ml-[14px] text-sm">
                            Positive
                          </li>
                          <li className="list-disc ml-[14px] text-sm">
                            Teamwork
                          </li>
                          <li className="list-disc ml-[14px] text-sm">
                            Initiative and autonomy
                          </li>
                          <li className="list-disc ml-[14px] text-sm">
                            Verbal communication skills
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 3 */}

              <div className="hidden xl:block">
                <h2 className="text-2xl font-light font-inter mb-4 tracking-tighter">
                  Contact
                </h2>
                <div className="flex flex-row justify-between xl:flex-col gap-y-6">
                  <div>
                    <h3 className="font-medium text-base mb-1">Email</h3>
                    <span className="block -mt-[2px] text-gray text-sm">
                      fernandasenactt@gmail.com
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Languages</h3>
                    <span className="block -mt-[2px] text-gray text-sm mb-1">
                      Portuguese | Native
                    </span>
                    <span className="block -mt-[2px] text-gray text-sm">
                      English | Fluent
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-1">Abilities</h3>
                    <ul>
                      <li className="list-disc ml-[14px] text-sm">
                        Responsible
                      </li>
                      <li className="list-disc ml-[14px] text-sm">Organized</li>
                      <li className="list-disc ml-[14px] text-sm">Creative</li>
                      <li className="list-disc ml-[14px] text-sm">Positive</li>
                      <li className="list-disc ml-[14px] text-sm">Teamwork</li>
                      <li className="list-disc ml-[14px] text-sm">
                        Initiative and autonomy
                      </li>
                      <li className="list-disc ml-[14px] text-sm">
                        Verbal communication skills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="mt-10 flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center gap-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="58"
                  fill="#2e2e2e"
                  viewBox="0 0 256 256"
                >
                  <path d="M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm-24,78a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H90a38,38,0,0,1,25.65,66A42,42,0,0,1,136,158ZM40,116H90a22,22,0,0,0,0-44H40Zm80,42a26,26,0,0,0-26-26H40v52H94A26,26,0,0,0,120,158Zm128-6a8,8,0,0,1-8,8H169a32,32,0,0,0,56.59,11.2,8,8,0,0,1,12.8,9.61A48,48,0,1,1,248,152Zm-17-8a32,32,0,0,0-62,0Z"></path>
                </svg>
                <div className="flex items-start flex-col">
                  <span className="text-lg font-medium mx-auto md:mx-0">
                    Behance
                  </span>
                  <a
                    href="https://www.behance.net/fersena"
                    target="_blank"
                    className="underline underline-black"
                  >
                    https://www.behance.net/fersena
                  </a>
                </div>
              </div>
              <span>©{new Date().getFullYear()}</span>
            </footer>
          </div>
        </div>
      </div>
    </section>,
    document.body
  )
}
