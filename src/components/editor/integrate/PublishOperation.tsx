import React, { useState } from 'react'
import axios from 'axios'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { validateEditorData } from '@/utils/validate-editor-data'
import { publishOperationStyles as css } from './styles'

interface Props {}

export default function PublishOperation(props: Props) {
  const { editorData } = useEditorContext()
  const [isLoading, setIsLoading] = useState(false)

  async function submitProject() {
    setIsLoading(true)
    if (validateEditorData(editorData)) {
      await axios.post('/api/database/projects', {
        type: editorData.type,
        coverImageFile: {
          type: editorData.uploadedFile?.type,
          name: editorData.uploadedFile?.name,
          base64: editorData.coverImage,
        },
        title: editorData.title,
        subtitle: editorData.subtitle,
        bodyEN: editorData.textareaEN,
        bodyPTBR: editorData.textareaPTBR,
      })
      alert('The Project has been published!')
    }
    setIsLoading(false)
  }

  return (
    <button onClick={submitProject} className={css.buttonSubmit}>
      {!isLoading ? 'Submit' : 'Sending...'}
    </button>
  )
}
