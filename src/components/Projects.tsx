import React, { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import {
  jordan,
  arca,
  sushiRestaurant,
  twentyOnePilots,
  staart,
  finbook,
  mba,
  finalgirl,
  hellfire,
} from '../assets'

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    if (mounted) {
      handleObserver()
    }
  }, [mounted])

  const projectsSection = useRef<HTMLDivElement>(null)
  const boxes = [projectsSection]

  function handleObserver() {
    boxes.forEach((box) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'projects') {
              anime({
                targets: `#${entry.target.id}`,
                translateY: [100, 0],
                duration: 5000,
              })
            }
          }
        })
      })
      observer.observe(box.current!)
      return () => observer.disconnect()
    })
  }

  return (
    <section
      ref={projectsSection}
      id="projects"
      className="py-[100px] px-14 relative h-fit "
    >
      {/* Colunm 1 */}
      <div className=" flex  gap-3 w-fit mx-auto">
        <div className="flex flex-col gap-3">
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[400px] h-[300px] group relative">
            <img
              src={jordan.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Jordan</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Illustration and Composition
                </span>
              </div>
            </div>
          </div>

          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[400px] h-[600px] group relative">
            <img src={arca.src} alt="" className="w-full h-full object-cover" />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Jordan</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Illustration and Composition
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Colunm 2 */}

        <div className="flex items-center flex-col gap-3">
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[308px] h-[400px] group relative">
            <img
              src={sushiRestaurant.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Jordan</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Illustration and Composition
                </span>
              </div>
            </div>
          </div>
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[308px] h-[500px] group relative">
            <img
              src={twentyOnePilots.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Jordan</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Illustration and Composition
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Colunm 3 */}
        <div className="flex flex-col gap-3">
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[300px] h-[500px] group relative">
            <img
              src={hellfire.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Staart</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Visual Identity
                </span>
              </div>
            </div>
          </div>
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[300px] h-[500px] group relative">
            <img src={mba.src} alt="" className="w-full h-full object-cover" />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Staart</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Visual Identity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[1032px] h-[250px] group col-span-2 relative">
          <img src={staart.src} alt="" className="w-full h-full object-cover" />
          <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
          <div className="content">
            <div className="title px-4 text-center">
              <span className="font-semibold text-2xl uppercase">Staart</span>
              <br />
              <span className="font-medium tracking-widest uppercase text-lg">
                Visual Identity
              </span>
            </div>
          </div>
        </div> */}

        {/* COLUNM 4 */}
        <div className='flex flex-col gap-3'>
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[400px] h-[500px] group relative">
            <img
              src={finbook.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Staart</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Visual Identity
                </span>
              </div>
            </div>
          </div>
          <div className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[400px] h-[600px] group relative">
            <img
              src={finalgirl.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-semibold text-2xl uppercase">Staart</span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  Visual Identity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
