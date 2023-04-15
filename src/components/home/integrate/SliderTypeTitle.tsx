import IntersectionObserver from '@/components/@globals/IntersectionObserver'
import React, { useState } from 'react'
import { projectSliderContainerStyles as css } from './styles'

interface Props {
  sliderTitle: string
}

export const SliderTypeTitle = ({ sliderTitle }: Props) => {
  return (
    <h2 className={css.title}>
      <span className={css.titleSpan}>|</span> {sliderTitle}
    </h2>
  )
}
