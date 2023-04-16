import { IProject } from "./IProject"

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