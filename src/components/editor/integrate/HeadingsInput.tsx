import React from 'react'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { headingsInputStyles as css } from './styles'

interface Props {
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export default function HeadingsInput({ handleInputChange }: Props) {
  const { editorData } = useEditorContext()

  return (
    <div className={css.wrapper}>
      <input
        placeholder="Title"
        name="title"
        value={editorData.title}
        onChange={handleInputChange}
        className={css.title}
      />
      <input
        placeholder="Subtitle"
        name="subtitle"
        value={editorData.subtitle}
        onChange={handleInputChange}
        className={css.subtitle}
      />
    </div>
  )
}
