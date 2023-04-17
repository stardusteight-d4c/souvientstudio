import { IProject } from "./IProject"
import { IProjectType } from "./IProjectType"

export interface IEditorData {
  type: IProjectType
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