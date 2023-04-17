import React from 'react'
import ReactDOM from 'react-dom'
import { Download } from '@/components/@globals/atoms'
import { importSavePopUpStyles as css } from './styles'

interface Props {
  emitClosed: (value?: string) => void
  langContext: 'pt-BR' | 'en'
}

export default function ImportSavePopUp({ emitClosed, langContext }: Props) {
  function getSave(): void {
    if (langContext === 'en') {
      const savedText = localStorage.getItem('saveTextareaEN')
      if (!savedText) {
        alert('No save found.')
        emitClosed()
        return
      }
      const textareaElement: HTMLTextAreaElement = document.getElementById(
        'textareaEN'
      ) as HTMLTextAreaElement
      textareaElement.value = savedText
      emitClosed(savedText)
    } else if (langContext === 'pt-BR') {
      const savedText = localStorage.getItem('saveTextareaPTBR')
      if (!savedText) {
        alert('No save found.')
        emitClosed()
        return
      }
      const textareaElement: HTMLTextAreaElement = document.getElementById(
        'textareaPTBR'
      ) as HTMLTextAreaElement
      textareaElement.value = savedText
      emitClosed(savedText)
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className={css.overlay} />
      <section className={css.wrapper}>
        <div className={css.alertInfoContainer}>
          <div className={css.txtOrange}>
            <Download size={48} />
          </div>
          <h2 className={css.areYouSure}>Are you sure?</h2>
          <span className={css.span}>
            This action will import the saved text, your current progress will
            be lost. Do you wish to continue?
          </span>
        </div>
        <div className={css.buttonsContainer}>
          <button onClick={getSave} className={css.handleButton('bg-orange')}>
            Import
          </button>
          <button
            onClick={() => emitClosed()}
            className={css.handleButton('bg-gray')}
          >
            Cancel
          </button>
        </div>
      </section>
    </>,
    document.body
  )
}
