import React, { Key, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { IProject } from '@/@interfaces/IProject'
import { Search } from '@/components/@globals/atoms'
import { searchProjectStyles as css } from './styles'
import { useClickOutside } from '@/components/hooks/useClickOutside'

interface Props {
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export default function SearchProject({ handleInputChange }: Props) {
  const { editorData, setEditorData } = useEditorContext()
  const [isLoading, setIsLoading] = useState(false)
  const [resultsSearch, setResultsSearch] = useState<IProject[]>([])
  const searchBoxRef = useRef(null)
  const handleClickOutsideSearchBoxRef = () => {
    setResultsSearch([])
    setEditorData((prevState) => ({
      ...prevState,
      search: '',
    }))
  }
  useClickOutside({ ref: searchBoxRef, callback: handleClickOutsideSearchBoxRef })

  useEffect(() => {
    if (editorData.search === '') {
      setResultsSearch([])
    }
  }, [editorData.search])

  async function searchByProject(searchTerm: string) {
    setIsLoading(true)
    await axios
      .get(`/api/database/projects?title=${searchTerm}`)
      .then((res) => setResultsSearch(res.data))
    setIsLoading(false)
  }

  function selectProject(resultProject: IProject) {
    setEditorData((prevState) => ({
      ...prevState,
      type: resultProject.type,
      coverImage: resultProject.coverImage,
      title: resultProject.title,
      subtitle: resultProject.subtitle,
      textareaEN: resultProject.bodyEN,
      textareaPTBR: resultProject.bodyPTBR,
      uploadedFile: null,
      selectedToEdit: resultProject,
      search: '',
    }))
  }

  return (
    <div className={css.wrapper}>
      <div className={css.searchIcon}>
        <Search size={24} />
      </div>
      <div ref={searchBoxRef} className={css.container}>
        <div className={css.inputANDResultBoxContainer}>
          <input
            placeholder="Search for a project"
            type="text"
            name="search"
            value={editorData.search}
            onChange={(e) => handleInputChange(e)}
            className={css.input}
          />
          {resultsSearch && editorData.search !== '' && (
            <ul className={css.resultBox}>
              {resultsSearch.map((result: any, index: Key) => (
                <li
                  key={index}
                  onClick={() => selectProject(result)}
                  className={css.listItemResult}
                >
                  {result.title}: {result.subtitle}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => searchByProject(editorData.search)}
          disabled={editorData.search.length < 3 || isLoading}
          className={css.button}
        >
          {!isLoading ? 'Search' : 'Searching...'}
        </button>
      </div>
    </div>
  )
}
