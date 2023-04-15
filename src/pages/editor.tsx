import { ChangeEvent, Key, useEffect, useRef, useState } from 'react'
import { useAppContext } from '@/@context/ContextProvider'
import Navbar from '@/components/@globals/Navbar'
import axios from 'axios'
import { handleMarkdown } from '@/utils/handle-markdown'
import * as Icon from '@/components/@globals/atoms'
import Footer from '@/components/@globals/Footer'
import { detectClickOutsideElement } from '@/utils/detect-click-outside-element'
import { SavePopUp } from '@/components/editor/integrate/SavePopUp'
import { ImportSavePopUp } from '@/components/editor/integrate/ImportSavePopUp'
import { ProjectShowdown } from '@/components/@globals/ProjectShowdown'
import Header from '@/components/@globals/Header'
import { useRouter } from 'next/router'
import { euaFlag, brazilFlag } from '@/assets'

export default function Editor() {
  const [editorInputsValue, setEditorInputsValue] = useState({
    title: '',
    subtitle: '',
    textareaEN: '',
    textareaPTBR: '',
    search: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenSavePopUp, setIsOpenSavePopUp] = useState(false)
  const [isOpenImportSavePopUp, setIsOpenImportSavePopUp] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [resultsSearch, setResultsSearch] = useState<any>()
  const [textareaLangVersion, setTextareaLangVersion] = useState<
    'en' | 'pt-BR'
  >('en')
  const [selectedToEdit, setSelectedToEdit] = useState<any>()
  const [coverImage, setCoverImage] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [showSelectDropdown, setShowSelectDropdown] = useState(false)
  const projectsTypes = ['Visual identity', 'Open sequence', 'Personal project']
  const { lang } = useAppContext()
  const { setLocaleContextHome, isClientAuthenticated } = useAppContext()
  const [selectedProjectType, setSelectedProjectType] = useState(
    projectsTypes[0]
  )
  const textareaElement = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

  useEffect(() => {
    console.log('isClientAuthenticated aa', isClientAuthenticated)
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
  }, [showSelectDropdown, editorInputsValue.search])

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setEditorInputsValue({ ...editorInputsValue, [name]: value })
  }

  function handleSelected(type: string): void {
    handleMarkdown(textareaElement.current!, type)
  }

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
      setUploadedFile(file)
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result
        setCoverImage(String(base64))
      }
    }
  }

  async function submitProject() {
    setIsLoading(true)
    if (coverImage === '') {
      alert('Select a cover image!')
      return
    } else if (editorInputsValue.title === '') {
      alert('Enter a title!')
      return
    } else if (editorInputsValue.subtitle === '') {
      alert('Enter a subtitle')
      return
    } else if (editorInputsValue.textareaEN === '') {
      alert('Please write some article in english!')
      return
    } else if (editorInputsValue.textareaPTBR === '') {
      alert('Please write some article in portuguese!')
      return
    }
    await axios.post('/api/database/projects', {
      type: selectedProjectType,
      coverImageFile: {
        type: uploadedFile?.type,
        name: uploadedFile?.name,
        base64: coverImage,
      },
      title: editorInputsValue.title,
      subtitle: editorInputsValue.subtitle,
      bodyEN: editorInputsValue.textareaEN,
      bodyPTBR: editorInputsValue.textareaPTBR,
    })
    alert('The Project has been published!')
    setIsLoading(false)
  }

  async function updateProject() {
    setIsLoading(true)
    if (coverImage === '') {
      alert('Select a cover image!')
      return
    } else if (editorInputsValue.title === '') {
      alert('Enter a title!')
      return
    } else if (editorInputsValue.subtitle === '') {
      alert('Enter a subtitle')
      return
    } else if (editorInputsValue.textareaEN === '') {
      alert('Please write some article in english!')
      return
    } else if (editorInputsValue.textareaPTBR === '') {
      alert('Please write some article in portuguese!')
      return
    }
    await axios.put(`/api/database/projects/${selectedToEdit._id}`, {
      type: selectedProjectType,
      coverImageFile: {
        type: uploadedFile?.type,
        name: uploadedFile?.name,
        base64: coverImage,
      },
      title: editorInputsValue.title,
      subtitle: editorInputsValue.subtitle,
      bodyEN: editorInputsValue.textareaEN,
      bodyPTBR: editorInputsValue.textareaPTBR,
    })
    alert('The project article has been updated.')
    setIsLoading(false)
  }

  async function deleteProject() {
    setIsLoading(true)
    await axios.delete(`/api/database/projects/${selectedToEdit._id}`)
    alert('The project article has been deleted.')
    setIsLoading(false)
  }

  async function searchByProject(searchTerm: string) {
    await axios
      .get(`/api/database/projects?title=${searchTerm}`)
      .then((res) => setResultsSearch(res.data))
  }

  function closeSavePopUp() {
    setIsOpenSavePopUp(false)
  }
  function closeImportSavePopUp(value?: string) {
    if (value) {
      if (textareaLangVersion === 'en') {
        setEditorInputsValue({ ...editorInputsValue, textareaEN: value })
      } else if (textareaLangVersion === 'pt-BR') {
        setEditorInputsValue({ ...editorInputsValue, textareaPTBR: value })
      }
    }
    setIsOpenImportSavePopUp(false)
  }
  function backToEditor() {
    setShowPreview(false)
  }

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
    { Icon: Icon.Eye, execute: () => setShowPreview(true) },
    { Icon: Icon.Disk, execute: () => setIsOpenSavePopUp(true) },
    { Icon: Icon.Download, execute: () => setIsOpenImportSavePopUp(true) },
  ]

  return (
    <>
      {isClientAuthenticated && (
        <>
          <Header title="Editor" />
          {isOpenSavePopUp && (
            <SavePopUp
              langContext={textareaLangVersion}
              emitClosed={closeSavePopUp}
            />
          )}
          {isOpenImportSavePopUp && (
            <ImportSavePopUp
              langContext={textareaLangVersion}
              emitClosed={closeImportSavePopUp}
            />
          )}
          <main
            className={`${
              showPreview ? 'bg-[#F8F7E2]' : 'bg-gradient-to-b'
            }  from-[#FE9BBA] to-transparent overflow-hidden`}
          >
            <Navbar notFixed={showPreview ? false : true} />
            {showPreview ? (
              <ProjectShowdown
                coverImage={coverImage}
                title={editorInputsValue.title}
                subtitle={editorInputsValue.subtitle}
                body={
                  textareaLangVersion === 'en'
                    ? editorInputsValue.textareaEN
                    : editorInputsValue.textareaPTBR
                }
                emitBack={backToEditor}
              />
            ) : (
              <section className="grid py-10 text-[#2e2e2e] place-items-center">
                <div className="bg-[#F8F7E2] rounded-[35px] flex flex-col gap-2 p-4 w-[800px] h-fit shadow-md shadow-[#2e2e2e]/10">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                      {selectedToEdit && !uploadedFile ? (
                        <>
                          <button
                            onClick={onClickUpload}
                            className="bg-[#FE9BBA] block w-fit whitespace-nowrap py-2 px-4 text-[#F8F7E2] font-medium rounded-full"
                          >
                            New cover image
                          </button>
                          <span className="truncate w-[200px]">
                            {selectedToEdit.coverImage}
                          </span>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={onClickUpload}
                            className={`${
                              uploadedFile ? 'bg-[#fe5b30]' : 'bg-[#FE9BBA]'
                            } block w-fit whitespace-nowrap py-2 px-4 text-[#F8F7E2] font-medium rounded-full`}
                          >
                            {uploadedFile
                              ? 'Uploaded cover image'
                              : 'Upload cover image'}
                          </button>
                          <span className="truncate w-[200px]">
                            {uploadedFile && uploadedFile.name}
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
                    <div className="relative group w-80 h-8 rounded-full">
                      <div className="absolute group-focus-within:text-[#fe5b30] top-1 left-2 text-[#2e2e2e]/80">
                        <Icon.Search size={24} />
                      </div>
                      <div className="h-full w-full flex items-center gap-x-2">
                        <div id="searchBox" className="h-full ">
                          <input
                            placeholder="Search for a project"
                            type="text"
                            name="search"
                            onChange={(e) => {
                              handleInputChange(e)
                            }}
                            className="h-full w-full pl-8 pr-3 bg-transparent placeholder:text-[#505050] border-[2px] border-[#2e2e2e] focus:border-[#fe5b30] outline-none rounded-full"
                          />
                          {resultsSearch && editorInputsValue.search !== '' && (
                            <ul className="absolute overflow-hidden z-50 bg-[#FE9BBA] mt-1 w-full !max-w-[242px] rounded-lg">
                              {resultsSearch.map((result: any, index: Key) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setEditorInputsValue({
                                      title: result.title,
                                      subtitle: result.subtitle,
                                      textareaEN: result.bodyEN,
                                      textareaPTBR: result.bodyPTBR,
                                      search: '',
                                    })
                                    setUploadedFile(null)
                                    setSelectedToEdit(result)
                                    setSelectedProjectType(result.type)
                                    setCoverImage(result.coverImage)
                                  }}
                                  className="text-sm text-left max-w-[242px] w-full font-medium cursor-pointer hover:bg-[#fc81a8] text-[#F8F7E2] py-[2px] px-4"
                                >
                                  {result.title}: {result.subtitle}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <button
                          onClick={() =>
                            searchByProject(editorInputsValue.search)
                          }
                          className="block ml-auto w-fit bg-[#FE9BBA] py-1 px-2 text-[#F8F7E2] font-medium rounded-full"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="selectProjectTypeElement" className="relative w-fit">
                    <div
                      onClick={() => setShowSelectDropdown(!showSelectDropdown)}
                      className="text-sm flex justify-center gap-x-2 px-2 cursor-pointer border-[2px] border-[#FE9BBA] py-1 rounded-full"
                    >
                      {selectedProjectType}
                      <div
                        className={`${
                          showSelectDropdown && '-rotate-180'
                        } transition-all duration-150`}
                      >
                        <Icon.Caret size={18} />
                      </div>
                    </div>
                    {showSelectDropdown && (
                      <div className="absolute z-50 bg-[#FE9BBA] mt-1 w-full rounded-lg overflow-hidden">
                        <ul className="text-center">
                          {projectsTypes.map((type) => {
                            if (type !== selectedProjectType) {
                              return (
                                <li
                                  key={type}
                                  onClick={() => {
                                    setSelectedProjectType(type)
                                    setShowSelectDropdown(false)
                                  }}
                                  className="text-sm font-medium cursor-pointer hover:bg-[#fc81a8] text-[#F8F7E2] py-[2px]"
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
                      value={editorInputsValue.title}
                      onChange={handleInputChange}
                      className="text-[32px] placeholder:text-[#505050] transition-all duration-300 focus:translate-x-2 rounded-md font-semibold bg-transparent outline-none"
                    />
                    <input
                      placeholder="Subtitle"
                      name="subtitle"
                      value={editorInputsValue.subtitle}
                      onChange={handleInputChange}
                      className="text-[24px] placeholder:text-[#505050] transition-all duration-300 focus:translate-x-2 rounded-md font-light -mt-8 bg-transparent outline-none"
                    />
                  </div>
                  <div className="h-full relative">
                    <div className="absolute right-0 -top-8">
                      {textareaLangVersion === 'en' ? (
                        <div className="flex gap-x-2 items-center">
                          <span className="text-sm">
                            Writing the english version
                          </span>
                          <img
                            onClick={() => setTextareaLangVersion('pt-BR')}
                            src={euaFlag.src}
                            className="w-8 h-8 cursor-pointer"
                          />
                        </div>
                      ) : (
                        <div className="flex gap-x-2 items-center">
                          <span className="text-sm">
                            Writing the portuguese version
                          </span>
                          <img
                            onClick={() => setTextareaLangVersion('en')}
                            src={brazilFlag.src}
                            className="w-8 h-8 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between w-full rounded-t-xl border-[2px] border-b-0 border-[#fc81a8]">
                      <ul className="p-2 gap-x-1 flex items-center">
                        {iconsFirstSection.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelected(item.name)}
                            className="cursor-pointer rounded-md p-1 hover:bg-[#FE9BBA] hover:text-[#F8F7E2] w-fit"
                          >
                            <item.Icon />
                          </li>
                        ))}
                      </ul>
                      <ul className="p-2 gap-x-1 flex items-center">
                        {iconsSecondSection.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => item.execute()}
                            className="cursor-pointer rounded-md p-1 hover:bg-[#FE9BBA] hover:text-[#F8F7E2] w-fit"
                          >
                            <item.Icon />
                          </li>
                        ))}
                      </ul>
                    </div>
                    {textareaLangVersion === 'en' ? (
                      <textarea
                        spellCheck="false"
                        ref={textareaElement}
                        name="textareaEN"
                        onChange={handleInputChange}
                        id="textareaEN"
                        value={editorInputsValue.textareaEN}
                        className="rounded-b-xl h-[300px] mb-2 w-full outline-none  border-[2px] border-[#fc81a8] border-t-0 bg-[#fc81a8]/50 resize-none p-4 text-[#2e2e2e]"
                      />
                    ) : (
                      <textarea
                        spellCheck="false"
                        ref={textareaElement}
                        name="textareaPTBR"
                        onChange={handleInputChange}
                        id="textareaPTBR"
                        value={editorInputsValue.textareaPTBR}
                        className="rounded-b-xl h-[300px] mb-2 w-full outline-none  border-[2px] border-[#fc81a8] border-t-0 bg-[#fc81a8]/50 resize-none p-4 text-[#2e2e2e]"
                      />
                    )}
                    {selectedToEdit ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          <span className="font-medium uppercase tracking-tighter">
                            Editing...
                          </span>
                          {selectedToEdit.title}: {selectedToEdit.subtitle}
                        </div>
                        <div className="flex items-center ml-auto w-fit gap-x-2">
                          <button
                            onClick={() => {
                              setEditorInputsValue({
                                title: '',
                                subtitle: '',
                                textareaEN: '',
                                textareaPTBR: '',
                                search: '',
                              })
                              setUploadedFile(null)
                              setSelectedToEdit(null)
                              setSelectedProjectType(projectsTypes[0])
                              setCoverImage('')
                            }}
                            className="block w-fit border-[2px] border-[#FE9BBA] py-[7px] px-4 text-[#2e2e2e] font-medium rounded-full"
                          >
                            Cancel Edit
                          </button>
                          <button
                            onClick={deleteProject}
                            className="block w-fit bg-[#fe5b30] py-2 px-4 text-[#F8F7E2] font-medium rounded-full"
                          >
                            Delete
                          </button>
                          <button
                            onClick={updateProject}
                            className="block w-fit bg-[#FE9BBA] py-2 px-4 text-[#F8F7E2] font-medium rounded-full"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={submitProject}
                        className="block ml-auto w-fit bg-[#FE9BBA] py-2 px-4 text-[#F8F7E2] font-medium rounded-full"
                      >
                        {isLoading ? 'Sending...' : 'Submit'}
                      </button>
                    )}
                  </div>
                </div>
              </section>
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
