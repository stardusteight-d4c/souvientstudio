import React, { useState } from 'react'
import { useRouter } from 'next/router'

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
      draggable={false}
      className="card-animate card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-full max-w-[300px] lg:max-w-[400px] h-[300px] group relative select-none"
    >
      {children}
    </div>
  )
}
