import React, { ReactNode } from 'react'
import { baseRichTextEditorWrapperStyles as css } from './styles'

interface Props {
  children: ReactNode
}

export default function BaseRichTextEditorWrapper({ children }: Props) {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>{children}</div>
    </section>
  )
}
