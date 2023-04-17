import React, { useState } from 'react'
import { IntersectionObserver } from '@/components/@globals'
import { serviceCardStyles as css } from './styles'
import Image from 'next/legacy/image'

interface Props {
  emoji: string
  title?: string
  text?: string
  index: number
}

export default function ServiceCard(props: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  return (
    <IntersectionObserver
      onEnter={handleEnterViewport}
      overflowYHidden={false}
      overflowXHidden={false}
    >
      <div
        id={`wrapper-${props.index}`}
        className={css.handleWrapper(props.index, isVisible)}
      >
        <Image
          src={props.emoji}
          alt={`${props.title}/icon`}
          width={50}
          height={50}
          quality={80}
          className={css.emojiImage}
        />
        <h2 className={css.title}>{props.title}</h2>
        <p className={css.text}>{props.text}</p>
      </div>
    </IntersectionObserver>
  )
}
