import React from 'react'

interface Props {
  size?: number
}

export const Disk = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size ?? '32'}`}
      height={`${props.size ?? '32'}`}
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM208,208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>
    </svg>
  )
}
