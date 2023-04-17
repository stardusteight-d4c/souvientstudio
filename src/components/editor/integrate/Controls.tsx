import React from 'react'
import * as Icon from '@/components/@globals/atoms'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { handleMarkdown } from '@/utils/handle-markdown'
import { controlsStyles as css } from './styles'

interface Props {
  textareaElement: React.RefObject<HTMLTextAreaElement>
}

export default function Controls({ textareaElement }: Props) {
  const { setEditorData } = useEditorContext()

  function handleSelected(type: string): void {
    handleMarkdown(textareaElement.current!, type)
  }

  function showPreview() {
    setEditorData((prevState) => ({
      ...prevState,
      showPreview: true,
    }))
  }

  function openSavePopUp() {
    setEditorData((prevState) => ({
      ...prevState,
      popUps: {
        ...prevState.popUps,
        isOpenSavePopUp: true,
      },
    }))
  }

  function openImportSavePopUp() {
    setEditorData((prevState) => ({
      ...prevState,
      popUps: {
        ...prevState.popUps,
        isOpenImportSavePopUp: true,
      },
    }))
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
    {
      Icon: Icon.Eye,
      execute: () => showPreview(),
    },
    {
      Icon: Icon.Disk,
      execute: () => openSavePopUp(),
    },
    {
      Icon: Icon.Download,
      execute: () => openImportSavePopUp(),
    },
  ]

  return (
    <div className={css.wrapper}>
      <ul className={css.firstSectionIconsContainer}>
        {iconsFirstSection.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelected(item.name)}
            className={css.listItem}
          >
            <item.Icon />
          </li>
        ))}
      </ul>
      <ul className={css.secondSectionIconsContainer}>
        {iconsSecondSection.map((item, index) => (
          <li
            key={index}
            onClick={() => item.execute()}
            className={css.listItem}
          >
            <item.Icon />
          </li>
        ))}
      </ul>
    </div>
  )
}
