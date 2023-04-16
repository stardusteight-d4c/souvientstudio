import { useEditorContext } from '@/@context/EditorContextProvider'
import React from 'react'

interface Props {
  textareaElement: React.RefObject<HTMLTextAreaElement>
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export const TextareaInput = ({
  textareaElement,
  handleInputChange,
}: Props) => {
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
          className="rounded-xl min-h-full md:h-[300px] mb-2 w-full outline-none bg-pink resize-none p-4 text-black"
        />
      ) : (
        <textarea
          spellCheck="false"
          ref={textareaElement}
          name="textareaPTBR"
          onChange={handleInputChange}
          id="textareaPTBR"
          value={editorData.textareaPTBR}
          className="rounded-xl min-h-full md:h-[300px] mb-2 w-full outline-none bg-pink resize-none p-4 text-black"
        />
      )}
    </>
  )
}
