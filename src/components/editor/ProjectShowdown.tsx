import React from 'react'
import * as marked from 'marked'
import { coverPlaceholder } from '@/assets'
import { Article, Cover } from '../project'
import { projectShowdownStyles as css } from './styles'

interface Props {
  coverImage?: string
  title?: string
  subtitle?: string
  body?: string
  emitBack: () => void
}

export default function ProjectShowdown(props: Props) {
  const headingsProps = {
    title: props.title === '' ? 'Untitled' : props.title!,
    subtitle: props.subtitle === '' ? 'No subtitle' : props.subtitle!,
  }
  const bodyProps =
    props?.body === ''
      ? 'Describe how fantastic this project is.'
      : marked.marked(props?.body ?? '')
  const coverProps =
    props.coverImage === '' ? coverPlaceholder.src! : props.coverImage!
  const thumbnailSrc =
    props.coverImage === '' ? coverPlaceholder.src : props.coverImage

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <div>
          <Cover coverImage={coverProps} />
          <button onClick={props.emitBack} className={css.backToEditorButton}>
            Back to editor
          </button>
        </div>
        <img src={thumbnailSrc} className={css.thumbnail} />
      </div>
      <div className={css.articleWrapper}>
        <Article headings={headingsProps} body={bodyProps} />
      </div>
    </section>
  )
}
