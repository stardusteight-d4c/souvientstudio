import React, { ChangeEvent } from 'react'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { uploaderStyles as css } from './styles'

interface Props {}

export default function Uploader(props: Props) {
  const { editorData, setEditorData } = useEditorContext()

  function onClickUpload(): void {
    const inputFile = document.getElementById('file-input')!
    const clickEvent = new MouseEvent('click', { bubbles: true })
    inputFile.dispatchEvent(clickEvent)
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target as HTMLInputElement
    const files = input.files as FileList
    const maxFileSize = 3 * 1024 * 1024 // 3MB
    const file = files[0]
    if (file && file.size > maxFileSize) {
      alert('The selected file is larger than 3MB!')
      input.value = ''
    } else {
      const reader = new FileReader()
      setEditorData((prevState) => ({
        ...prevState,
        uploadedFile: file,
      }))
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result
        setEditorData((prevState) => ({
          ...prevState,
          coverImage: String(base64),
        }))
      }
    }
  }

  return (
    <>
      <div className={css.wrapper}>
        {editorData.selectedToEdit && !editorData.uploadedFile ? (
          <>
            <button onClick={onClickUpload} className={css.newCoverButton}>
              New cover image
            </button>
            <span className={css.truncateTxt}>
              {editorData.selectedToEdit.coverImage}
            </span>
          </>
        ) : (
          <>
            <button
              onClick={onClickUpload}
              className={css.handleUploadButton(editorData.uploadedFile)}
            >
              {editorData.uploadedFile
                ? 'Uploaded cover image'
                : 'Upload cover image'}
            </button>
            <span className={css.truncateTxt}>
              {editorData.uploadedFile && editorData.uploadedFile.name}
            </span>
          </>
        )}
      </div>
      <input
        type="file"
        id="file-input"
        onChange={(e) => onFileChange(e)}
        className="hidden"
        accept="image/png, image/jpeg"
      />
    </>
  )
}
