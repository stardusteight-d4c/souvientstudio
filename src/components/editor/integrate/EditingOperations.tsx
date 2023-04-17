import React, { useState } from 'react'
import axios from 'axios'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { validateEditorData } from '@/utils/validate-editor-data'
import { editingOperationsStyles as css } from './styles'

interface Props {}

export default function EditingOperations(props: Props) {
  const { editorData, setEditorData } = useEditorContext()
  const [isLoading, setIsLoading] = useState(false)

  async function cancelDelete() {
    setEditorData((prevState) => ({
      ...prevState,
      type: 'Visual identity',
      coverImage: '',
      title: '',
      subtitle: '',
      textareaEN: '',
      textareaPTBR: '',
      uploadedFile: null,
      selectedToEdit: null,
      search: '',
    }))
  }

  async function deleteProject() {
    await axios.delete(
      `/api/database/projects/${editorData.selectedToEdit?._id}`
    )
    alert('The project article has been deleted.')
  }

  async function updateProject() {
    setIsLoading(true)
    if (validateEditorData(editorData)) {
      await axios.put(
        `/api/database/projects/${editorData.selectedToEdit?._id}`,
        {
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
        }
      )
      alert('The project article has been updated.')
    }
    setIsLoading(false)
  }

  return (
    <div className={css.wrapper}>
      <div className={css.editingInfoContainer}>
        <span className={css.editingSpan}>Editing...</span>
        {editorData.selectedToEdit?.title}:{' '}
        {editorData.selectedToEdit?.subtitle}
      </div>
      <div className={css.operationsContainer}>
        <button onClick={cancelDelete} className={css.cancelEditButton}>
          Cancel Edit
        </button>
        <button onClick={deleteProject} className={css.deleteEditButton}>
          Delete
        </button>
        <button onClick={updateProject} className={css.updateEditButton}>
          {!isLoading ? 'Update' : 'Updating...'}
        </button>
      </div>
    </div>
  )
}
