import { useEditorContext } from '@/@context/EditorContextProvider'
import { brazilFlag, euaFlag } from '@/assets'
import React from 'react'

interface Props {}

export const LangVersion = (props: Props) => {
  const { editorData, setEditorData } = useEditorContext()

  return (
    <div className="absolute right-0 -top-8">
    {editorData.textareaLangVersion === 'en' ? (
      <div className="flex gap-x-2 cursor-default items-center">
        <span className="text-sm">Writing the english version</span>
        <img
          onClick={() => {
            setEditorData((prevState) => ({
              ...prevState,
              textareaLangVersion: 'pt-BR',
            }))
          }}
          src={euaFlag.src}
          className="w-8 h-8 cursor-pointer"
        />
      </div>
    ) : (
      <div className="flex gap-x-2 items-center">
        <span className="text-sm">Writing the portuguese version</span>
        <img
          onClick={() => {
            setEditorData((prevState) => ({
              ...prevState,
              textareaLangVersion: 'en',
            }))
          }}
          src={brazilFlag.src}
          className="w-8 h-8 cursor-pointer"
        />
      </div>
    )}
  </div>
  )
}