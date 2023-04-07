import React from 'react'

interface Props {
  emoji: string
  title: string
  text: string
  index: number
}

export default function ServiceCard(props: Props) {
  return (
    <div className={`${props.index % 2 === 0 && 'mdd:mt-20'}  shadow-lg max-w-[300px] h-[250px] text-left w-full flex items-start justify-center flex-col px-[20px] rounded-3xl`}>
      <img
        src={props.emoji}
        alt=""
        className="w-[50px] h-[50px] ml object-cover"
      />
      <h2 className="text-2xl text-[#2e2e2e] pb-3 pt-2 !leading-[27px] tracking-[-0.3px] font-semibold">
        {props.title}
      </h2>
      <p className="font-inter text-sm !leading-[21px] text-[#505050]">
        {props.text}
      </p>
    </div>
  )
}
