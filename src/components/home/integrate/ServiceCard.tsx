import React from 'react'
import { serviceCardStyles as css } from './styles'

interface Props {
  emoji: string
  title: string
  text: string
  index: number
}

export default function ServiceCard(props: Props) {
  return (
    <div className={css.handleWrapper(props.index)}>
      <img src={props.emoji} className={css.emojiImage} />
      <h2 className={css.title}>{props.title}</h2>
      <p className={css.text}>{props.text}</p>
    </div>
  )
}
