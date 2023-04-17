import { useEffect, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useAppContext } from '@/@context/AppContextProvider'
import { useEditorContext } from '@/@context/EditorContextProvider'
import {
  Uploader,
  SearchProject,
  SelectProjectType,
  HeadingsInput,
  LangVersion,
  Controls,
  TextareaInput,
  EditingOperations,
  PublishOperation,
  BaseRichTextEditorWrapper,
} from './integrate'
import { richTextEditorStyles as css } from './styles'

interface Props {}

export default function RichTextEditor(props: Props) {
  const { editorData, setEditorData } = useEditorContext()
  const { lang } = useAppContext()
  const { setLocaleContextHome, isClientAuthenticated } = useAppContext()
  const textareaElement = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isClientAuthenticated !== undefined) {
      !isClientAuthenticated && router.push('/')
    }
  }, [isClientAuthenticated])

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
  }, [lang])

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setEditorData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <BaseRichTextEditorWrapper>
      <div className={css.headerWrapper}>
        <Uploader />
        <SearchProject handleInputChange={handleInputChange} />
      </div>
      <SelectProjectType />
      <HeadingsInput handleInputChange={handleInputChange} />
      <div className={css.bodyWrapper}>
        <LangVersion />
        <div className={css.bodyEditor}>
          <Controls textareaElement={textareaElement} />
          <TextareaInput
            textareaElement={textareaElement}
            handleInputChange={handleInputChange}
          />
        </div>

        {editorData.selectedToEdit ? (
          <EditingOperations />
        ) : (
          <PublishOperation />
        )}
      </div>
    </BaseRichTextEditorWrapper>
  )
}
