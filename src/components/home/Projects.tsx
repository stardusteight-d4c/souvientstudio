import React from 'react'
import { useAppContext } from '@/@context/AppContextProvider'
import { IProject } from '@/@interfaces/IProject'
import ProjectsSliderContainer from './integrate/ProjectsSliderContainer'
import { projectsStyles as css } from './styles'

interface Props {
  visualIdentities: IProject[]
  openSequences: IProject[]
  personalProjects: IProject[]
}

export default function Projects(props: Props) {
  const { localeContextHome } = useAppContext()

  return (
    <div className='max-w-screen overflow-x-hidden'>
      <section className={css.wrapper}>
        <div className={css.container}>
          <div className="bg-white absolute z-50 top-0 bottom-0 left-[36px] -right-[500px] -translate-x-full" />
          <ProjectsSliderContainer
            projects={props.visualIdentities}
            sliderTitle={localeContextHome?.projects.visualIdentities}
          />
          <ProjectsSliderContainer
            projects={props.openSequences}
            sliderTitle={localeContextHome?.projects.openSequences}
          />
          <ProjectsSliderContainer
            projects={props.personalProjects}
            sliderTitle={localeContextHome?.projects.personalProjects}
          />
        </div>
      </section>
    </div>
  )
}
