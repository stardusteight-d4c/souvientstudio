import React from 'react'
import * as Icon from '@/components/@globals/atoms'
import { useEditorContext } from '@/@context/EditorContextProvider'
import { handleMarkdown } from '@/utils/handle-markdown'

interface Props {
  textareaElement: React.RefObject<HTMLTextAreaElement>
}

export const Controls = ({ textareaElement }: Props) => {
  const { setEditorData } = useEditorContext()

  function handleSelected(type: string): void {
    handleMarkdown(textareaElement.current!, type)
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
  )
}
