import React from 'react'
import { ChangeEvent, Key, useEffect, useRef, useState } from 'react'
import { useAppContext } from '@/@context/AppContextProvider'
import axios from 'axios'
import { handleMarkdown } from '@/utils/handle-markdown'
import * as Icon from '@/components/@globals/atoms'
import { detectClickOutsideElement } from '@/utils/detect-click-outside-element'
import { useRouter } from 'next/router'
import { euaFlag, brazilFlag } from '@/assets'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { SavePopUp } from './integrate/SavePopUp'
import { ImportSavePopUp } from './integrate/ImportSavePopUp'
import { Uploader } from './integrate/Uploader'
import { SearchProject } from './integrate/SearchProject'

interface Props {}

export default function RichTextEditor(props: Props) {
  const { editorData, setEditorData } = useEditorContext()
  const [isLoading, setIsLoading] = useState(false)
  const [resultsSearch, setResultsSearch] = useState<any>([])
  const projectsTypes: any = [
    'Visual identity',
    'Open sequence',
    'Personal project',
  ]

  const [showSelectDropdown, setShowSelectDropdown] = useState(false)
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

  useEffect(() => {
    function handleClickOutsideOfNetworksListDropDown(event: MouseEvent) {
      const { clickedOutside } = detectClickOutsideElement(
        event,
        'selectProjectTypeElement'
      )
      if (clickedOutside && showSelectDropdown === true) {
        setShowSelectDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutsideOfNetworksListDropDown)
    return () => {
      document.removeEventListener(
        'click',
        handleClickOutsideOfNetworksListDropDown
      )
    }
  }, [showSelectDropdown])

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setEditorData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleSelected(type: string): void {
    handleMarkdown(textareaElement.current!, type)
  }

  async function submitProject() {
    setIsLoading(true)
    if (editorData.coverImage === '') {
      alert('Select a cover image!')
      return
    } else if (editorData.title === '') {
      alert('Enter a title!')
      return
    } else if (editorData.subtitle === '') {
      alert('Enter a subtitle')
      return
    } else if (editorData.textareaEN === '') {
      alert('Please write some article in english!')
      return
    } else if (editorData.textareaPTBR === '') {
      alert('Please write some article in portuguese!')
      return
    }
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
    setIsLoading(false)
  }

  async function updateProject() {
    setIsLoading(true)
    if (editorData.coverImage === '') {
      alert('Select a cover image!')
      return
    } else if (editorData.title === '') {
      alert('Enter a title!')
      return
    } else if (editorData.subtitle === '') {
      alert('Enter a subtitle')
      return
    } else if (editorData.textareaEN === '') {
      alert('Please write some article in english!')
      return
    } else if (editorData.textareaPTBR === '') {
      alert('Please write some article in portuguese!')
      return
    }
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

  const iconsFirstSection = [
    { Icon: Icon.Bold, name: 'bold' },
    { Icon: Icon.Italic, name: 'italic' },
    { Icon: Icon.Underline, name: 'underline' },
    { Icon: Icon.BreakLine, name: 'break-line' },
    { Icon: Icon.Link, name: 'link' },
    { Icon: Icon.Image, name: 'image' },
    { Icon: Icon.HeadingTwo, name: 'heading-two' },
    { Icon: Icon.Quotes, name: 'quotes' },
    { Icon: Icon.AlignLeft, name: 'align-left' },
    { Icon: Icon.AlignCenter, name: 'align-center' },
    { Icon: Icon.AlignRight, name: 'align-right' },
  ]
  const iconsSecondSection = [
    {
      Icon: Icon.Eye,
      execute: () =>
        setEditorData((prevState) => ({
          ...prevState,
          showPreview: true,
        })),
    },
    {
      Icon: Icon.Disk,
      execute: () =>
        setEditorData((prevState) => ({
          ...prevState,
          popUps: {
            ...prevState.popUps,
            isOpenSavePopUp: true,
          },
        })),
    },
    {
      Icon: Icon.Download,
      execute: () =>
        setEditorData((prevState) => ({
          ...prevState,
          popUps: {
            ...prevState.popUps,
            isOpenImportSavePopUp: true,
          },
        })),
    },
  ]

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
        <div id="selectProjectTypeElement" className="relative w-fit">
          <div
            onClick={() => setShowSelectDropdown(!showSelectDropdown)}
            className="text-sm flex justify-center gap-x-2 px-2 cursor-pointer border-[2px] border-pink py-1 rounded-full"
          >
            {editorData.type}
            <div
              className={`${
                showSelectDropdown && '-rotate-180'
              } transition-all duration-150`}
            >
              <Icon.Caret size={18} />
            </div>
          </div>
          {showSelectDropdown && (
            <div className="absolute z-50 bg-pink mt-1 w-full rounded-lg overflow-hidden">
              <ul className="text-center">
                {projectsTypes.map((type: any) => {
                  if (type !== editorData.type) {
                    return (
                      <li
                        key={type}
                        onClick={() => {
                          setEditorData((prevState) => ({
                            ...prevState,
                            type: type,
                          }))
                          setShowSelectDropdown(false)
                        }}
                        className="text-sm font-medium cursor-pointer hover:bg-orange text-white py-[2px]"
                      >
                        {type}
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-6 mb-4">
          <input
            placeholder="Title"
            name="title"
            value={editorData.title}
            onChange={handleInputChange}
            className="text-[32px] placeholder:text-gray transition-all duration-300 focus:translate-x-2 rounded-md font-semibold bg-transparent outline-none"
          />
          <input
            placeholder="Subtitle"
            name="subtitle"
            value={editorData.subtitle}
            onChange={handleInputChange}
            className="text-[24px] placeholder:text-gray transition-all duration-300 focus:translate-x-2 rounded-md font-light -mt-8 bg-transparent outline-none"
          />
        </div>
        <div className="h-full relative">
          <div className="absolute right-0 -top-8">
            {editorData.textareaLangVersion === 'en' ? (
              <div className="flex gap-x-2 cursor-default items-center">
                <span className="text-sm">Writing the english version</span>
                <img
                  onClick={() => {
                    setEditorData((prevState) => ({
                      ...prevState,
                      textareaLangVersion: 'pt-BR',
                    }))
                  }}
                  src={euaFlag.src}
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
            ) : (
              <div className="flex gap-x-2 items-center">
                <span className="text-sm">Writing the portuguese version</span>
                <img
                  onClick={() => {
                    setEditorData((prevState) => ({
                      ...prevState,
                      textareaLangVersion: 'en',
                    }))
                  }}
                  src={brazilFlag.src}
                  className="w-8 h-8 cursor-pointer"
                />
              </div>
            )}
          </div>
          <div className="flex md:flex-col">
            <div className="flex w-10 -ml-2 md:-ml-0 mr-2 md:mr-0 flex-col md:flex-row  items-center my-2 justify-between md:w-full rounded-[40px] md:border-[2px]  border-pink">
              <ul className="flex flex-col md:flex-row p-2 gap-x-1 items-center">
                {iconsFirstSection.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelected(item.name)}
                    className="cursor-pointer rounded-full p-1 hover:bg-pink hover:text-white w-fit"
                  >
                    <item.Icon />
                  </li>
                ))}
              </ul>
              <ul className="p-2 gap-x-1 flex flex-col md:flex-row items-center">
                {iconsSecondSection.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => item.execute()}
                    className="cursor-pointer rounded-full p-1 hover:bg-pink hover:text-white w-fit"
                  >
                    <item.Icon />
                  </li>
                ))}
              </ul>
            </div>
            {editorData.textareaLangVersion === 'en' ? (
              <textarea
                spellCheck="false"
                ref={textareaElement}
                name="textareaEN"
                onChange={handleInputChange}
                id="textareaEN"
                value={editorData.textareaEN}
                className="rounded-xl min-h-full md:h-[300px] mb-2 w-full outline-none bg-pink resize-none p-4 text-black"
              />
            ) : (
              <textarea
                spellCheck="false"
                ref={textareaElement}
                name="textareaPTBR"
                onChange={handleInputChange}
                id="textareaPTBR"
                value={editorData.textareaPTBR}
                className="rounded-xl min-h-full md:h-[300px] mb-2 w-full outline-none bg-pink resize-none p-4 text-black"
              />
            )}
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
                      type: projectsTypes[0],
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
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
