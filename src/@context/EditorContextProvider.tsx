import { IEditorData } from '@/@interfaces/IEditorData'
import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface ContextAPI {
  editorData: IEditorData
  setEditorData: React.Dispatch<React.SetStateAction<IEditorData>>
}

export const MyContext = createContext<ContextAPI>({
  editorData: {
    type: 'Visual identity',
    coverImage: '',
    title: '',
    subtitle: '',
    textareaEN: '',
    textareaPTBR: '',
    search: '',
    showPreview: false,
    selectedToEdit: null,
    uploadedFile: null,
    textareaLangVersion: 'en',
    popUps: {
      isOpenSavePopUp: false,
      isOpenImportSavePopUp: false,
    },
  },
  setEditorData: () => {},
})

export const EditorContextProvider = ({ children }: Props) => {
  const [editorData, setEditorData] = useState<IEditorData>({
    type: 'Visual identity',
    coverImage: '',
    title: '',
    subtitle: '',
    textareaEN: '',
    textareaPTBR: '',
    search: '',
    showPreview: false,
    selectedToEdit: null,
    uploadedFile: null,
    textareaLangVersion: 'en',
    popUps: {
      isOpenSavePopUp: false,
      isOpenImportSavePopUp: false,
    },
  })

  const contextValue: ContextAPI = { editorData, setEditorData }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useEditorContext = () => useContext(MyContext)
