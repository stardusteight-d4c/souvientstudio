import React from 'react'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { ImportSavePopUp, SavePopUp } from '.'

interface Props {}

export default function PopUpsHandler(props: Props) {
  const { editorData, setEditorData } = useEditorContext()

  function closeSavePopUp() {
    setEditorData((prevState) => ({
      ...prevState,
      popUps: {
        ...prevState.popUps,
        isOpenSavePopUp: false,
      },
    }))
  }

  function closeImportSavePopUp(value?: string) {
    if (value) {
      if (editorData.textareaLangVersion === 'en') {
        setEditorData((prevState) => ({
          ...prevState,
          textareaEN: value,
        }))
      } else if (editorData.textareaLangVersion === 'pt-BR') {
        setEditorData((prevState) => ({
          ...prevState,
          textareaPTBR: value,
        }))
      }
    }
    setEditorData((prevState) => ({
      ...prevState,
      popUps: {
        ...prevState.popUps,
        isOpenImportSavePopUp: false,
      },
    }))
  }

  return (
    <>
      {editorData.popUps.isOpenSavePopUp && (
        <SavePopUp
          langContext={editorData.textareaLangVersion}
          emitClosed={closeSavePopUp}
        />
      )}
      {editorData.popUps.isOpenImportSavePopUp && (
        <ImportSavePopUp
          langContext={editorData.textareaLangVersion}
          emitClosed={closeImportSavePopUp}
        />
      )}
    </>
  )
}
