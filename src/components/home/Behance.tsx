import { useAppContext } from '@/@context/ContextProvider'
import { behanceStyles as css } from './styles'

export default function Behance() {
  const { localeContextHome } = useAppContext()

  if (!localeContextHome) {
    return <></>
  }

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <p className={css.paragraph}>{localeContextHome.dribbble.span}</p>
        <a
          href="https://www.behance.net/fersena"
          target="_blank"
          className={css.linkButton}
        >
          {localeContextHome.dribbble.button}
        </a>
      </div>
    </section>
  )
}
