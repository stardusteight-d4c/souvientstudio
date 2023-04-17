import React from 'react'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { textareaInputStyles as css } from './styles'

interface Props {
  textareaElement: React.RefObject<HTMLTextAreaElement>
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export default function TextareaInput({
  textareaElement,
  handleInputChange,
}: Props) {
  const { editorData } = useEditorContext()

  return (
    <>
      {editorData.textareaLangVersion === 'en' ? (
        <textarea
          spellCheck="false"
          ref={textareaElement}
          name="textareaEN"
          onChange={handleInputChange}
          id="textareaEN"
          value={editorData.textareaEN}
          className={css.input}
        />
      ) : (
        <textarea
          spellCheck="false"
          ref={textareaElement}
          name="textareaPTBR"
          onChange={handleInputChange}
          id="textareaPTBR"
          value={editorData.textareaPTBR}
          className={css.input}
        />
      )}
    </>
  )
}
