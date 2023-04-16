import { useAppContext } from '@/@context/AppContextProvider'
import { useState } from 'react'
import { IntersectionObserver } from '../@globals'
import { behanceStyles as css } from './styles'

export default function Behance() {
  const { localeContextHome } = useAppContext()
  const [isVisible, setIsVisible] = useState(false)

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  const handleExitViewport = () => {
    setIsVisible(false)
  }

  return (
    <IntersectionObserver
      onEnter={handleEnterViewport}
      onExit={handleExitViewport}
    >
      <section className={css.wrapper}>
        <div className={css.container}>
          <p className={css.handleParagraph(isVisible)}>
            {localeContextHome?.dribbble.span}
          </p>
          <a
            href="https://www.behance.net/fersena"
            target="_blank"
            className={css.handleLinkButton(isVisible)}
          >
            {localeContextHome?.dribbble.button}
          </a>
        </div>
      </section>
    </IntersectionObserver>
  )
}
