import React, { useState } from 'react'
import Image from 'next/legacy/image'
import { skillImageStyles as css } from './styles'
import { isEven } from '@/utils/is-even'
import IntersectionObserver from '@/components/@globals/IntersectionObserver'

interface Props {
  skill: {
    image: string
    alt: string
  }
  index: number
}

export default function SkillImage({ skill, index }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }
  const handleExitViewport = () => {
    setIsVisible(false)
  }

  return (
    <IntersectionObserver
      onEnter={handleEnterViewport}
      onExit={handleExitViewport}
      overflowYHidden={false}
      overflowXHidden={false}
    >
      <div className={css.handleContainer(isVisible, !isEven(index))}>
        <Image
          title={skill.alt}
          src={skill.image}
          alt={`${skill.alt}/img`}
          width={160}
          height={160}
          quality={100}
          className={css.image}
        />
      </div>
    </IntersectionObserver>
  )
}
