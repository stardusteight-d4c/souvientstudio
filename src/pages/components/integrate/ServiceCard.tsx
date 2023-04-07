import React from 'react'

interface Props {
  emoji: string
  title: string
  text: string
}

export default function ServiceCard(props: Props) {
  return (
    <div className="bg-[#1c1924]/50 text-left w-full p-[20px] rounded-3xl">
      <img
        src={props.emoji}
        alt=""
        className="w-[64px] h-[64px] object-cover"
      />
      <h2 className="text-lg py-2 font-poppins !leading-[27px] tracking-[-0.3px] font-medium">
       {props.title}
      </h2>
      <p className="font-inter text-sm !leading-[21px] text-[#a1a3bb]">
       {props.text}
      </p>
    </div>
  )
}
