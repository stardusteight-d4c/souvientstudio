import React from 'react'
import Image from 'next/legacy/image'
import { skillImageStyles as css } from './styles'

interface Props {
  skill: {
    image: string
    alt: string
  }
}

export default function SkillImage({ skill }: Props) {
  return (
    <Image
      src={skill.image}
      alt={skill.alt}
      width={160}
      height={160}
      quality={100}
      className={css.image}
    />
  )
}
