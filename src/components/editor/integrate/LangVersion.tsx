import React from 'react'
import { brazilFlag, euaFlag } from '@/assets'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { langVersionStyles as css } from './styles'

interface Props {}

export default function LangVersion(props: Props) {
  const { editorData, setEditorData } = useEditorContext()

  function setLangVersionToPortuguese() {
    setEditorData((prevState) => ({
      ...prevState,
      textareaLangVersion: 'pt-BR',
    }))
  }

  function setLangVersionToEnglish() {
    setEditorData((prevState) => ({
      ...prevState,
      textareaLangVersion: 'en',
    }))
  }

  return (
    <div className={css.wrapper}>
      {editorData.textareaLangVersion === 'en' ? (
        <div className={css.flagContainer}>
          <span className={css.span}>Writing the english version</span>
          <img
            onClick={setLangVersionToPortuguese}
            src={euaFlag.src}
            className={css.image}
          />
        </div>
      ) : (
        <div className={css.flagContainer}>
          <span className={css.span}>Writing the portuguese version</span>
          <img
            onClick={setLangVersionToEnglish}
            src={brazilFlag.src}
            className={css.image}
          />
        </div>
      )}
    </div>
  )
}
