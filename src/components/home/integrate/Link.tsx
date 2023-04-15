import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { serviceCardStyles as css } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  to: string
}

export const Link = ({ children, to, ...props }: Props) => {
  const [click, setClick] = useState<boolean>(false)
  const router = useRouter()
  window.ondragstart = () => {
    return false
  }

  const delta = 6
  let startX: number
  let startY: number
  window.addEventListener('mousedown', function (event) {
    startX = event.pageX
    startY = event.pageY
  })
  window.addEventListener('mouseup', function (event) {
    const diffX = Math.abs(event.pageX - startX)
    const diffY = Math.abs(event.pageY - startY)
    if (diffX < delta && diffY < delta) {
      setClick(true)
    }
  })

  return (
    <div
      onClick={() => {
        click && router.push(to)
        return
      }}
      className={css.sliderLink}
    >
      {children}
    </div>
  )
}
