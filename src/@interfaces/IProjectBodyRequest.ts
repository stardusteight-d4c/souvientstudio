import { IProjectType } from "./IProjectType"

export interface IProjectBodyRequest {
  type: IProjectType
  title: string
  subtitle: string
  coverImageFile: {
    type: string
    name: string
    base64: string
  }
  bodyEN: string
  bodyPTBR: string
}
