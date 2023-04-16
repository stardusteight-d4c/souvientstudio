import { useEditorContext } from '@/@context/EditorContextProvider'
import React from 'react'

interface Props {
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export const HeadingsInput = ({ handleInputChange }: Props) => {
  const { editorData } = useEditorContext()

  return (
    <div className="flex flex-col gap-y-6 mb-4">
      <input
        placeholder="Title"
        name="title"
        value={editorData.title}
        onChange={handleInputChange}
        className="text-[32px] placeholder:text-gray transition-all duration-300 focus:translate-x-2 rounded-md font-semibold bg-transparent outline-none"
      />
      <input
        placeholder="Subtitle"
        name="subtitle"
        value={editorData.subtitle}
        onChange={handleInputChange}
        className="text-[24px] placeholder:text-gray transition-all duration-300 focus:translate-x-2 rounded-md font-light -mt-8 bg-transparent outline-none"
      />
    </div>
  )
}
