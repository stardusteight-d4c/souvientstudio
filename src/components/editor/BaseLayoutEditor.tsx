import React, { ReactNode } from 'react'
import { Footer, Navbar } from '../@globals'
import { useEditorContext } from '@/@context/EditorContextProvider'
import PopUpsHandler from './integrate/PopUpsHandler'
import { baseLayoutEditorStyles as css } from './styles'

interface Props {
  children: ReactNode
}

export default function BaseLayoutEditor({ children }: Props) {
  const { editorData } = useEditorContext()
  return (
    <div className={css.wrapper}>
      <PopUpsHandler />
      <main className={css.handleContainer(editorData.showPreview)}>
        <Navbar notFixed={editorData.showPreview ? false : true} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
