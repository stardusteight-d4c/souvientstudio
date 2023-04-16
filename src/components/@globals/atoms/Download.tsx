import React from 'react'

interface Props {
  size?: number
  hidden?: boolean
}

export const Download = ({ size = 32, hidden = false }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size ?? '32'}`}
      height={`${size ?? '32'}`}
      fill="currentColor"
      viewBox="0 0 256 256"
      className={`${hidden && 'hidden'}`}
    >
      <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
    </svg>
  )
}
