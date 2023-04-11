import React, { useEffect, useRef, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'
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
} from '../../assets'
import { useAppContext } from '@/@context/ContextProvider'
import Link from 'next/link'

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [cardSliderWidth, setCardSliderWidth] = useState(0)
  const [onDrag, setOnDrag] = useState(0)
  const cardSlider = useRef() as React.MutableRefObject<HTMLInputElement>
  const { localeContextHome } = useAppContext()

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

  if (!localeContextHome) {
    return <></>
  }

  return (
    <section
      id="projects"
      className="py-[100px] md:px-4 lg:px-14 relative h-fit max-w-[1445px] mx-auto"
    >
      <div className="mx-auto space-y-20">
        <div>
          <h2 className="text-[32px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-5">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.visualIdentities}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <motion.div {...dragAnimate}>
              {items.map((item, index) => (
                <Link
                  href={`/project/slugggg`}
                  key={index}
                  className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full min-w-[300px] lg:min-w-[400px] h-[300px] group relative select-none"
                >
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
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
        <div>
          <h2 className="text-[32px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-5">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.openSequences}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <motion.div {...dragAnimate}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full min-w-[300px] lg:min-w-[400px] h-[300px] group relative select-none"
                >
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
          <h2 className="text-[32px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-5">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.personalProjects}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[50px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <motion.div {...dragAnimate}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full min-w-[300px] lg:min-w-[400px] h-[300px] group relative select-none"
                >
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
