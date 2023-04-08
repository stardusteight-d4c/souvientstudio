import React, { useEffect, useRef, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'
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

  const [cardSliderWidth, setCardSliderWidth] = useState(0)
  const [onDrag, setOnDrag] = useState(0)
  const cardSlider = useRef() as React.MutableRefObject<HTMLInputElement>
  const items = [
    jordan,
    arca,
    sushiRestaurant,
    twentyOnePilots,
    staart,
    finbook,
    mba,
    finalgirl,
    hellfire,
  ]

  useEffect(() => {
    cardSlider.current &&
      setCardSliderWidth(
        cardSlider.current.scrollWidth - cardSlider.current.offsetWidth
      )
  }, [onDrag])

  const dragAnimate = {
    drag: 'x' as 'x',
    ref: cardSlider,
    onDrag: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) =>
      setOnDrag(info.offset.x),
    dragConstraints: { right: 0, left: -cardSliderWidth },
    className: 'flex gap-8',
  }

  return (
    <section
      ref={projectsSection}
      id="projects"
      className="py-[100px] md:px-4 lg:px-14 relative h-fit max-w-[1445px] mx-auto"
    >
      <div className="mx-auto space-y-20">
        <div>
          <h2 className="text-[32px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-4">
            <span className='text-[#fe5b30]'>|</span> Visual Identities
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <motion.div {...dragAnimate}>
              {items.map((item, index) => (
                <div className="card-animate card rounded-[50px] overflow-hidden transition-all duration-500 cursor-pointer w-full min-w-[300px] lg:min-w-[400px] h-[300px] group relative">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
                  <div className="content">
                    <div className="title px-4 text-center">
                      <span className="font-semibold text-2xl uppercase">
                        Jordan
                      </span>
                      <br />
                      <span className="font-medium tracking-widest uppercase text-lg">
                        Illustration and Composition
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div>
          <h2 className="text-[32px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-4">
          <span className='text-[#fe5b30]'>|</span> Open sequences
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <motion.div {...dragAnimate}>
              {items.map((item, index) => (
                <div className="card-animate card rounded-[50px] overflow-hidden transition-all duration-500 cursor-pointer w-full min-w-[300px] lg:min-w-[400px] h-[300px] group relative">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
                  <div className="content">
                    <div className="title px-4 text-center">
                      <span className="font-semibold text-2xl uppercase">
                        Jordan
                      </span>
                      <br />
                      <span className="font-medium tracking-widest uppercase text-lg">
                        Illustration and Composition
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div>
          <h2 className="text-[32px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-4">
          <span className='text-[#fe5b30]'>|</span> Personal projects
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <motion.div {...dragAnimate}>
              {items.map((item, index) => (
                <div className="card-animate card rounded-[50px] overflow-hidden transition-all duration-500 cursor-pointer w-full min-w-[300px] lg:min-w-[400px] h-[300px] group relative">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <b className="inset-x-0 transition-all bg-gradient-to-t from-[#FE9BBA]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
                  <div className="content">
                    <div className="title px-4 text-center">
                      <span className="font-semibold text-2xl uppercase">
                        Jordan
                      </span>
                      <br />
                      <span className="font-medium tracking-widest uppercase text-lg">
                        Illustration and Composition
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
