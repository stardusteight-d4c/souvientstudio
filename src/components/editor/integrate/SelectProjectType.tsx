import React, { useRef, useState } from 'react'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { IProjectType } from '@/@interfaces/IProjectType'
import { Caret } from '@/components/@globals/atoms'
import { useClickOutside } from '@/components/hooks/useClickOutside'
import { selectProjectTypeStyles as css } from './styles'

interface Props {}

export default function SelectProjectType(props: Props) {
  const { editorData, setEditorData } = useEditorContext()
  const [showSelectDropdown, setShowSelectDropdown] = useState(false)
  const typeBoxRef = useRef(null)
  const handleClickOutsideTypeBoxRef = () => setShowSelectDropdown(false)
  useClickOutside({ ref: typeBoxRef, callback: handleClickOutsideTypeBoxRef })
  const projectsTypes: IProjectType[] = [
    'Visual identity',
    'Open sequence',
    'Personal project',
  ]

  function selectProjectType(type: IProjectType) {
    setEditorData((prevState) => ({
      ...prevState,
      type: type,
    }))
    setShowSelectDropdown(false)
  }

  return (
    <div ref={typeBoxRef} className={css.wrapper}>
      <div
        onClick={() => setShowSelectDropdown(!showSelectDropdown)}
        className={css.container}
      >
        {editorData.type}
        <div className={css.handleCaretDirection(showSelectDropdown)}>
          <Caret size={18} />
        </div>
      </div>
      {showSelectDropdown && (
        <div className={css.dropdown}>
          <ul className={css.unorderedList}>
            {projectsTypes.map((type: IProjectType) => {
              if (type !== editorData.type) {
                return (
                  <li
                    key={type}
                    onClick={() => selectProjectType(type)}
                    className={css.listItem}
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
