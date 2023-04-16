import React, { ReactNode } from 'react'
import { Footer, Navbar } from '../@globals'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { PopUpsHandler } from './integrate/PopUpsHandler'

interface Props {
  children: ReactNode
}

export default function BaseLayoutEditor({ children }: Props) {
  const { editorData } = useEditorContext()
  return (
    <>
      <PopUpsHandler />
      <main
        className={`${
          editorData.showPreview ? 'bg-white' : 'bg-gradient-to-b'
        }  from-pink to-transparent overflow-hidden`}
      >
        <Navbar notFixed={editorData.showPreview ? false : true} />
        {children}
      </main>
      <Footer />
    </>
  )
}
