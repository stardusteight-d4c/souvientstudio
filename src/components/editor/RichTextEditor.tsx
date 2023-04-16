import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '@/@context/AppContextProvider'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { Uploader } from './integrate/Uploader'
import { SearchProject } from './integrate/SearchProject'
import { SelectProjectType } from './integrate/SelectProjectType'
import { HeadingsInput } from './integrate/HeadingsInput'
import { LangVersion } from './integrate/LangVersion'
import { Controls } from './integrate/Controls'
import { validateEditorData } from '@/utils/validate-editor-data'
import { TextareaInput } from './integrate/TextareaInput'

interface Props {}

export default function RichTextEditor(props: Props) {
  const { editorData, setEditorData } = useEditorContext()
  const [isLoading, setIsLoading] = useState(false)
  const [resultsSearch, setResultsSearch] = useState<any>([])
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

  async function deleteProject() {
    setIsLoading(true)
    await axios.delete(
      `/api/database/projects/${editorData.selectedToEdit?._id}`
    )
    alert('The project article has been deleted.')
    setIsLoading(false)
  }

  useEffect(() => {
    if (editorData.search === '') {
      setResultsSearch([])
    }
  }, [editorData.search])

  return (
    <section className="grid py-10 text-black place-items-center">
      <div className="bg-white rounded-[40px] flex flex-col gap-2 p-4 w-screen md:w-full md:max-w-[800px] h-fit shadow-md shadow-black/10">
        <div className="flex flex-col-reverse gap-y-2 md:gap-y-0 md:flex-row justify-between md:items-center">
          <Uploader />
          <SearchProject
            handleInputChange={handleInputChange}
            resultsSearch={resultsSearch}
            setResultsSearch={setResultsSearch}
          />
        </div>
        <SelectProjectType />
        <HeadingsInput handleInputChange={handleInputChange} />
        <div className="h-full relative">
          <LangVersion />
          <div className="flex md:flex-col">
            <Controls textareaElement={textareaElement} />
            <TextareaInput
              textareaElement={textareaElement}
              handleInputChange={handleInputChange}
            />
          </div>

          {editorData.selectedToEdit ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <span className="font-medium uppercase tracking-tighter">
                  Editing...
                </span>
                {editorData.selectedToEdit.title}:{' '}
                {editorData.selectedToEdit.subtitle}
              </div>
              <div className="flex items-center ml-auto w-fit gap-x-2">
                <button
                  onClick={() => {
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
                  }}
                  className="block w-fit border-[2px] border-pink py-[7px] px-4 text-black font-medium rounded-full"
                >
                  Cancel Edit
                </button>
                <button
                  onClick={deleteProject}
                  className="block w-fit bg-orange py-2 px-4 text-white font-medium rounded-full"
                >
                  Delete
                </button>
                <button
                  onClick={updateProject}
                  className="block w-fit bg-pink py-2 px-4 text-white font-medium rounded-full"
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={submitProject}
              className="block ml-auto w-fit bg-pink py-2 px-4 text-white font-medium rounded-full"
            >
              {!isLoading ? 'Submit' : 'Sending...'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
