import React from 'react'

interface Props {}

export const Image = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88ZM40,200V172l52-52,80,80Zm176,0H194.63l-36-36,20-20L216,181.38V200Z"></path>
    </svg>
  )
}
