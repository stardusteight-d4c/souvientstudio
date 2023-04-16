import { IProject } from '@/@interfaces/IProject'
import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface IEditorData {
  type: 'Visual identity' | 'Open sequence' | 'Personal project'
  coverImage: string
  title: string
  subtitle: string
  textareaEN: string
  textareaPTBR: string
  search: string
  showPreview: boolean
  selectedToEdit: IProject | null
  uploadedFile: File | null
  textareaLangVersion: 'en' | 'pt-BR'
  popUps: {
    isOpenSavePopUp: boolean
    isOpenImportSavePopUp: boolean
  }
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
