import React from 'react'
import Link from 'next/link'
import { Header } from '../@globals'
import { baseLayoutLoginStyles as css } from './styles'

interface Props {
  children: React.ReactNode
}

export default function BaseLayoutLogin({ children }: Props) {
  return (
    <>
      <Header title="Login" />
      <main className={css.wrapper}>
        <Link href="/">
          <span className={css.logo}>Fevient</span>
        </Link>
        <div className={css.formWrapper}>
          <div className={css.formContainer}>{children}</div>
        </div>
      </main>
    </>
  )
}
