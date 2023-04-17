import React from 'react'
import ReactDOM from 'react-dom'
import { Disk } from '@/components/@globals/atoms'
import { savePopUpStyles as css } from './styles'

interface Props {
  emitClosed: () => void
  langContext: 'pt-BR' | 'en'
}

export default function SavePopUp({ emitClosed, langContext }: Props) {
  function saveText() {
    if (langContext === 'en') {
      const textareaElement: HTMLTextAreaElement = document.getElementById(
        'textareaEN'
      ) as HTMLTextAreaElement
      localStorage.setItem('saveTextareaEN', textareaElement.value)
      emitClosed()
    } else if (langContext === 'pt-BR') {
      const textareaElement: HTMLTextAreaElement = document.getElementById(
        'textareaPTBR'
      ) as HTMLTextAreaElement
      localStorage.setItem('saveTextareaPTBR', textareaElement.value)
      emitClosed()
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className={css.overlay} />
      <section className={css.wrapper}>
        <div className={css.alertInfoContainer}>
          <div className={css.txtPink}>
            <Disk size={48} />
          </div>
          <h2 className={css.areYouSure}>Are you sure?</h2>
          <span className={css.span}>
            This action will overwrite if there is already saved content and
            cannot be undone.
          </span>
        </div>
        <div className={css.buttonsContainer}>
          <button onClick={saveText} className={css.handleButton('bg-pink')}>
            Save
          </button>
          <button onClick={emitClosed} className={css.handleButton('bg-gray')}>
            Cancel
          </button>
        </div>
      </section>
    </>,
    document.body
  )
}
