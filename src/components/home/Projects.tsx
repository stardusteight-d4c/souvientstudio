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
    <div className={css.wrapper}>
      <section className={css.contentWrapper}>
        <div className={css.contentContainer}>
          <div className={css.overflowLeftHide} />
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
