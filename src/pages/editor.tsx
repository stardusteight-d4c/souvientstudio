import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAppContext } from '@/@context/AppContextProvider'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { AuthWrapper, Header } from '@/components/@globals'
import {
  RichTextEditor,
  BaseLayoutEditor,
  ProjectShowdown,
} from '@/components/editor'

export default function Editor() {
  const { editorData, setEditorData } = useEditorContext()
  const { lang } = useAppContext()
  const { setLocaleContextHome, isClientAuthenticated } = useAppContext()
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

  function backToEditor() {
    setEditorData((prevState) => ({
      ...prevState,
      showPreview: false,
    }))
  }

  const projectShowdownProps = {
    coverImage: editorData.coverImage,
    title: editorData.title,
    subtitle: editorData.subtitle,
    body:
      editorData.textareaLangVersion === 'en'
        ? editorData.textareaEN
        : editorData.textareaPTBR,
    emitBack: backToEditor,
  }

  return (
    <AuthWrapper>
      <Header title="Editor" />
      <BaseLayoutEditor>
        {editorData.showPreview ? (
          <ProjectShowdown {...projectShowdownProps} />
        ) : (
          <RichTextEditor />
        )}
      </BaseLayoutEditor>
    </AuthWrapper>
  )
}
