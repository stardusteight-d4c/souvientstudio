import { useEditorContext } from '@/@context/EditorContextProvider'
import { IProject } from '@/@interfaces/IProject'
import { Search } from '@/components/@globals/atoms'
import { detectClickOutsideElement } from '@/utils/detect-click-outside-element'
import axios from 'axios'
import React, { Key, useEffect } from 'react'

interface Props {
  resultsSearch: IProject[]
  setResultsSearch: React.Dispatch<IProject[]>
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export const SearchProject = ({
  handleInputChange,
  resultsSearch,
  setResultsSearch,
}: Props) => {
  const { editorData, setEditorData } = useEditorContext()

  useEffect(() => {
    function handleClickOutsideOfNetworksListDropDown(event: MouseEvent) {
      const { clickedOutside } = detectClickOutsideElement(event, 'searchBox')
      if (clickedOutside && resultsSearch.length > 0) {
        setResultsSearch([])
        setEditorData((prevState) => ({
          ...prevState,
          search: '',
        }))
      }
    }
    document.addEventListener('click', handleClickOutsideOfNetworksListDropDown)
    return () => {
      document.removeEventListener(
        'click',
        handleClickOutsideOfNetworksListDropDown
      )
    }
  }, [resultsSearch])

  async function searchByProject(searchTerm: string) {
    await axios
      .get(`/api/database/projects?title=${searchTerm}`)
      .then((res) => setResultsSearch(res.data))
  }

  return (
    <div className="relative group w-80 h-8 rounded-full">
      <div className="absolute group-focus-within:text-orange top-1 left-2 text-black/80">
        <Search size={24} />
      </div>
      <div id="searchBox" className="h-full w-full flex items-center gap-x-2">
        <div className="h-full ">
          <input
            placeholder="Search for a project"
            type="text"
            name="search"
            value={editorData.search}
            onChange={(e) => {
              handleInputChange(e)
            }}
            className="h-full w-full pl-8 pr-3 bg-transparent placeholder:text-gray border-[2px] border-black focus:border-orange outline-none rounded-full"
          />
          {resultsSearch && editorData.search !== '' && (
            <ul className="relative overflow-hidden z-50 bg-pink mt-1 w-full !max-w-[242px] rounded-lg">
              {resultsSearch.map((result: any, index: Key) => (
                <li
                  key={index}
                  onClick={() => {
                    setEditorData((prevState) => ({
                      ...prevState,
                      type: result.type,
                      coverImage: result.coverImage,
                      title: result.title,
                      subtitle: result.subtitle,
                      textareaEN: result.bodyEN,
                      textareaPTBR: result.bodyPTBR,
                      uploadedFile: null,
                      selectedToEdit: result,
                      search: '',
                    }))
                  }}
                  className="text-sm text-left max-w-[242px] w-full font-medium cursor-pointer hover:bg-orange text-white py-[2px] px-4"
                >
                  {result.title}: {result.subtitle}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => searchByProject(editorData.search)}
          disabled={editorData.search.length < 3}
          className="disabled:bg-pink disabled:cursor-not-allowed bg-orange block ml-auto w-fit py-1 px-2 text-white font-medium rounded-full"
        >
          Search
        </button>
      </div>
    </div>
  )
}
