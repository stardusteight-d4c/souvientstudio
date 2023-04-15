export interface IProject {
  _id?: string
  type: 'Visual identity' | 'Open sequence' | 'Personal project'
  title: string
  subtitle: string
  coverImage: string
  bodyEN: string
  bodyPTBR: string
}
