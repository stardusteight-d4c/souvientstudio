import { coverPlaceholder } from '@/assets'
import React from 'react'
import * as marked from 'marked'

interface Props {
  coverImage?: string
  title?: string
  subtitle?: string
  body?: string
  emitBack: () => void
}

export function ProjectShowdown(props: Props) {
  return (
    <section className="min-h-screen">
      <div className="relative">
        <div className="w-full absolute top-0 z-50 h-[300px] bg-gradient-to-b from-[#FE9BBA]/90 to-[#F8F7E2]/10" />
        <div>
          <img
            src={
              props.coverImage === '' ? coverPlaceholder.src : props.coverImage
            }
            className="object-cover z-40 relative w-full h-[300px]"
          />
          <button
            onClick={props.emitBack}
            className="block relative left-1/2 -translate-x-1/2 -mt-12 z-50 font-bold uppercase w-fit text-[#2e2e2e] py-2 px-4 bg-[#F8F7E2] rounded-full"
          >
            Back to editor
          </button>
        </div>
        <img
          src={props.coverImage === '' ? coverPlaceholder.src : props.coverImage}
          className="absolute object-cover rounded-3xl z-50 border-black/50 border-[2px] border-dashed -bottom-[185px] right-20 max-w-[180px] max-h-[125px] min-w-[180px] min-h-[125px]"
        />
      </div>
      <div className="max-w-[800px] mt-8 text-[#2e2e2e] w-full mx-auto">
        <h1 className="text-[72px] font-semibold">
          {props.title === '' ? 'Untitled' : props.title}
        </h1>
        <h2 className="text-[50px] font-light -mt-4">
          {props.subtitle === '' ? 'No subtitle' : props.subtitle}
        </h2>
        <div
          id="article-body"
          dangerouslySetInnerHTML={{
            __html:
              props?.body === ''
                ? 'Describe how fantastic this project is.'
                : marked.marked(props?.body ?? ''),
          }}
          className="mt-10"
        />
      </div>
    </section>
  )
}
