import { Disk } from '@/components/@globals/atoms'
import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  emitClosed: () => void
}

export function SavePopUp({ emitClosed }: Props) {
  function saveText() {
    const textareaElement: HTMLTextAreaElement = document.getElementById(
      'textarea'
    ) as HTMLTextAreaElement
    localStorage.setItem('saveText', textareaElement.value)
    emitClosed()
  }

  return ReactDOM.createPortal(
    <>
      <div className="bg-[#2e2e2e]/20 fixed inset-0" />
      <section className="bg-[#F8F7E2] fixed py-8 px-14 text-[#2e2e2e] w-fit rounded-2xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[#FE9BBA]">
            <Disk size={48} />
          </div>
          <h2 className="font-poppins text-2xl font-semibold mt-2 mb-1">
            Are you sure?
          </h2>
          <span className="max-w-[250px] w-full text-center text-sm text-[#505050] pb-4 block">
            This action will overwrite if there is already saved content and
            cannot be undone.
          </span>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-4">
          <button
            onClick={saveText}
            className="hover:scale-105 uppercase text-white z-50 relative bg-[#FE9BBA] transition-all duration-300 rounded-full block w-[105px] p-2 active:scale-100 outline-none"
          >
            Save
          </button>
          <button
            onClick={emitClosed}
            className="hover:scale-105 uppercase text-white z-50 relative bg-[#505050] transition-all duration-300 rounded-full block w-[105px] p-2 active:scale-100 outline-none"
          >
            Cancel
          </button>
        </div>
      </section>
    </>,
    document.body
  )
}
