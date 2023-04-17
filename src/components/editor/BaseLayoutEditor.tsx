import React, { ReactNode } from 'react'
import { Footer, Navbar } from '../@globals'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { PopUpsHandler } from './integrate/PopUpsHandler'
import { heroStyles as heroCss } from '../home/styles'

interface Props {
  children: ReactNode
}

export default function BaseLayoutEditor({ children }: Props) {
  const { editorData } = useEditorContext()
  return (
    <div className="flex relative z-50 overflow-hidden items-center 3xl:h-screen flex-col justify-between">
      <PopUpsHandler />
      <div id="container-dotted-grid" className={heroCss.dottedGridContainer}>
        <div id="dots" />
        <div id="glow">
          <div className={heroCss.circle} />
          <div className={heroCss.circle} />
        </div>
      </div>
      <main
        className={`${
          editorData.showPreview ? 'bg-white' : 'bg-gradient-to-b'
        }  from-pink/80 to-transparent relative z-50 overflow-hidden`}
      >
        <Navbar notFixed={editorData.showPreview ? false : true} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
