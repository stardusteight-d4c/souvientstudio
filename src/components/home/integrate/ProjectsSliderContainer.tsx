import { Key } from 'react'
import { Link } from './Link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'

interface Props {
  projects: any[]
}

export default function ProjectsSliderContainer({ projects }: Props) {
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
    <motion.div {...dragAnimate}>
      {projects.length === 0 ? (
        <div className="text-[#2e2e2e] text-xl font-medium py-5 text-center w-full">
          No projects found
        </div>
      ) : (
        projects.map((project: any, index: Key | null | undefined) => (
          <Link to={`/project/${project._id}`} key={index}>
            <img
              src={project.coverImage}
              alt=""
              className="w-full h-full object-cover pointer-events-none"
            />
            <b className="inset-x-0 transition-all duration-75 bg-gradient-to-t from-[#fe9bba] via-[#fe9bba]/50 to-transparent bottom-0 h-[200px] hidden group-hover:block" />
            <div className="content">
              <div className="title px-4 text-center">
                <span className="font-bold text-2xl uppercase">
                  {project.title}
                </span>
                <br />
                <span className="font-medium tracking-widest uppercase text-lg">
                  {project.subtitle}
                </span>
              </div>
            </div>
          </Link>
        ))
      )}
    </motion.div>
  )
}
