import React from 'react'
import Link from 'next/link'
import { pageNotFoundStyles as css } from './styles'

interface Props {}

export default function PageNotFound(props: Props) {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div>
          <div className={css.content}>
            <span className={css[404]}>404</span>
            <span className={css.pageNotFound}>Page not found</span>
          </div>
          <Link href="/" className={css.backLink}>
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}
