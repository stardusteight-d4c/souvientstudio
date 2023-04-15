import React from 'react'
import Image from 'next/legacy/image'
import { IProject } from '@/@interfaces/IProject'
import { Link } from './Link'
import { sliderCardStyles as css } from './styles'

interface Props {
  project: IProject
}

export const SliderCard = ({ project }: Props) => {
  return (
    <Link to={`/project/${project._id}`}>
      <Image
        src={project.coverImage}
        alt={`${project.title}/cover`}
        layout="fill"
        quality={100}
        className={css.coverImage}
      />
      <b className={css.overlay} />
      <div className={css.content}>
        <div className={css.titleContainer}>
          <h3 className={css.title}>{project.title}</h3>
          <br />
          <span className={css.subtitle}>{project.subtitle}</span>
        </div>
      </div>
    </Link>
  )
}
