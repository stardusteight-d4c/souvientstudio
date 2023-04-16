import { IEditorData } from '@/@interfaces/IEditorData'

export function validateEditorData(editorData: IEditorData) {
  if (editorData.coverImage === '') {
    alert('Select a cover image!')
    return false
  } else if (editorData.title === '') {
    alert('Enter a title!')
    return false
  } else if (editorData.subtitle === '') {
    alert('Enter a subtitle')
    return false
  } else if (editorData.textareaEN === '') {
    alert('Please write some article in english!')
    return false
  } else if (editorData.textareaPTBR === '') {
    alert('Please write some article in portuguese!')
    return false
  }
  return true
}
