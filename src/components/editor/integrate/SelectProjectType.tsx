import { useEditorContext } from '@/@context/EditorContextProvider'
import { Caret } from '@/components/@globals/atoms'
import { detectClickOutsideElement } from '@/utils/detect-click-outside-element'
import React, { useEffect, useState } from 'react'

interface Props {}

export const SelectProjectType = (props: Props) => {
  const { editorData, setEditorData } = useEditorContext()
  const [showSelectDropdown, setShowSelectDropdown] = useState(false)
  const projectsTypes: any = [
    'Visual identity',
    'Open sequence',
    'Personal project',
  ]

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

  return (
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
          <Caret size={18} />
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
  )
}
