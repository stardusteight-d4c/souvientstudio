import React, { useEffect, useRef, useState } from 'react'
import { useAppContext } from '@/@context/ContextProvider'
import axios from 'axios'
import ProjectsSliderContainer from './integrate/ProjectsSliderContainer'
import { IProject } from '@/@interfaces/IProject'

interface Props {
  visualIdentities: IProject[]
  openSequences: IProject[]
  personalProjects: IProject[]
}

export default function Projects(props: Props) {
  const { localeContextHome } = useAppContext()

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
          <h2 className="text-[38px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.visualIdentities}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <ProjectsSliderContainer projects={props.visualIdentities} />
          </div>
        </div>
        <div>
          <h2 className="text-[38px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.openSequences}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <ProjectsSliderContainer projects={props.openSequences} />
          </div>
        </div>
        <div>
          <h2 className="text-[38px] px-4 md:px-0 text-[#2e2e2e] block w-fit !tracking-[-2px] font-medium !leading-[41.6px] font-poppins pb-8">
            <span className="text-[#fe5b30]">|</span>{' '}
            {localeContextHome.projects.personalProjects}
          </h2>
          <div className="overflow-x-hidden h-fit relative">
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 left-0 bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <div className="absolute inset-y-0 w-[20px] md:w-[30px] z-50 right-0 bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/50 to-transparent" />
            <ProjectsSliderContainer projects={props.personalProjects} />
          </div>
        </div>
      </div>
    </section>
  )
}
