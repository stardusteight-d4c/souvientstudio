import React, { useEffect, useRef, useState, Key } from 'react'
import { motion, PanInfo } from 'framer-motion'
import { Link } from './Link'
import { projectSliderContainerStyles as css } from './styles'
import Image from 'next/legacy/image'
import { IProject } from '@/@interfaces/IProject'
import { SliderCard } from './SliderCard'

interface Props {
  projects: IProject[]
  sliderTitle: string
}

export default function ProjectsSliderContainer({
  projects,
  sliderTitle,
}: Props) {
  const [cardSliderWidth, setCardSliderWidth] = useState(0)
  const [onDrag, setOnDrag] = useState(0)
  const cardSlider = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    cardSlider.current &&
      setCardSliderWidth(
        cardSlider.current.scrollWidth - cardSlider.current.offsetWidth
      )
  }, [onDrag])

  const dragAnimate = {
    drag: 'x' as 'x',
    dragElastic: 0.8,
    ref: cardSlider,
    onDrag: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) =>
      setOnDrag(info.offset.x),
    dragConstraints: { right: 0, left: -cardSliderWidth },
    dragTransition: { bounceStiffness: 50, bounceDamping: 8 },
    className: 'flex gap-x-2',
  }

  return (
    <div>
      <h2 className={css.title}>
        <span className={css.titleSpan}>|</span> {sliderTitle}
      </h2>
      <div className={css.wrapper}>
        <div className={css.overlayLeft} />
        <div className={css.overlayRight} />
        <motion.div {...dragAnimate}>
          {projects.length === 0 ? (
            <div className={css.noProjectsFound}>No projects found</div>
          ) : (
            projects
              .map((project: IProject, index: Key | null | undefined) => (
                <SliderCard project={project} key={index} />
              ))
              .reverse()
          )}
        </motion.div>
      </div>
    </div>
  )
}
