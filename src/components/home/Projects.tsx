import React, { useEffect, useRef, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'

import { useAppContext } from '@/@context/ContextProvider'
import { Link } from './integrate/Link'
import axios from 'axios'
import ProjectsSliderContainer from './integrate/ProjectsSliderContainer'

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [cardSliderWidth, setCardSliderWidth] = useState(0)
  const [visualIdentities, setVisualIdentities] = useState([])
  const [openSequences, setOpenSequences] = useState([])
  const [personalProjects, setPersonalProjects] = useState([])
  const [onDrag, setOnDrag] = useState(0)
  const cardSlider = useRef() as React.MutableRefObject<HTMLInputElement>
  const { localeContextHome } = useAppContext()

  useEffect(() => {
    cardSlider.current &&
      setCardSliderWidth(
        cardSlider.current.scrollWidth - cardSlider.current.offsetWidth
      )
  }, [onDrag])

  useEffect(() => {
    ;(async () => {
      await axios.get('/api/database/projects').then((res) => {
        setVisualIdentities(
          res.data.filter((project: any) => project.type === 'Visual identity')
        )
        setOpenSequences(
          res.data.filter((project: any) => project.type === 'Open sequence')
        )
        setPersonalProjects(
          res.data.filter((project: any) => project.type === 'Personal project')
        )
      })
    })()
  }, [])

  const dragAnimate = {
    drag: 'x' as 'x',
    dragElastic: 0.8,
    ref: cardSlider,
    onDrag: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) =>
      setOnDrag(info.offset.x),
    dragConstraints: { right: 0, left: -cardSliderWidth },
    dragTransition: { bounceStiffness: 300, bounceDamping: 10 },
    className: 'flex gap-x-8',
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
          <h2 className="text-[42px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.visualIdentities}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <ProjectsSliderContainer projects={visualIdentities} />
          </div>
        </div>
        <div>
          <h2 className="text-[42px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.openSequences}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <ProjectsSliderContainer projects={openSequences} />
          </div>
        </div>
        <div>
          <h2 className="text-[42px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.personalProjects}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <ProjectsSliderContainer projects={personalProjects} />
          </div>
        </div>
      </div>
    </section>
  )
}
