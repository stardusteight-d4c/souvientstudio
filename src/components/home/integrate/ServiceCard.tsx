import React, { useState } from 'react'
import { IntersectionObserver } from '@/components/@globals'
import { serviceCardStyles as css } from './styles'

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
      <div
        id={`wrapper-${props.index}`}
        className={css.handleWrapper(props.index, isVisible)}
      >
        <img src={props.emoji} className={css.emojiImage} />
        <h2 className={css.title}>{props.title}</h2>
        <p className={css.text}>{props.text}</p>
      </div>
    </IntersectionObserver>
  )
}
