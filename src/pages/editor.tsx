import { useEffect } from 'react'
import { useAppContext } from '@/@context/AppContextProvider'
import Navbar from '@/components/@globals/Navbar'
import axios from 'axios'
import Footer from '@/components/@globals/Footer'
import { SavePopUp } from '@/components/editor/integrate/SavePopUp'
import { ImportSavePopUp } from '@/components/editor/integrate/ImportSavePopUp'
import ProjectShowdown from '@/components/editor/ProjectShowdown'
import Header from '@/components/@globals/Header'
import { useRouter } from 'next/router'
import { useEditorContext } from '@/@context/EditorContextProvider'
import AuthWrapper from '@/components/@globals/AuthWrapper'
import RichTextEditor from '@/components/editor/RichTextEditor'

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
  function backToEditor() {
    setEditorData((prevState) => ({
      ...prevState,
      showPreview: false,
    }))
  }

  return (
    <AuthWrapper>
      <Header title="Editor" />
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
      <main
        className={`${
          editorData.showPreview ? 'bg-white' : 'bg-gradient-to-b'
        }  from-pink to-transparent overflow-hidden`}
      >
        <Navbar notFixed={editorData.showPreview ? false : true} />
        {editorData.showPreview ? (
          <ProjectShowdown
            coverImage={editorData.coverImage}
            title={editorData.title}
            subtitle={editorData.subtitle}
            body={
              editorData.textareaLangVersion === 'en'
                ? editorData.textareaEN
                : editorData.textareaPTBR
            }
            emitBack={backToEditor}
          />
        ) : (
          <section className="grid py-10 text-black place-items-center">
            <RichTextEditor />
          </section>
        )}
      </main>
      <Footer />
    </AuthWrapper>
  )
}
