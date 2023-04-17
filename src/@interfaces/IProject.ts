import { IProjectType } from "./IProjectType"

export interface IProject {
  _id?: string
  type: IProjectType
  title: string
  subtitle: string
  coverImage: string
  bodyEN: string
  bodyPTBR: string
}
