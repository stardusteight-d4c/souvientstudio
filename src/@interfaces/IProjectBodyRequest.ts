export interface IProjectBodyRequest {
  type: string
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
