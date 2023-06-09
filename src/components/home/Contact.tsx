import { useAppContext } from '@/@context/AppContextProvider'
import { contactStyles as css } from './styles'

export default function Contact() {
  const { localeContextHome } = useAppContext()

  return (
    <section id="contact" className={css.wrapper}>
      <div className={css.container}>
        <span className={css.collab}>{localeContextHome?.emailMe.collab}</span>
        <span className={css.haveAproject}>
          {localeContextHome?.emailMe.haveAproject}
        </span>
        <a
          href="mailto:fernandasenactt@gmail.com"
          className={css.contactLinkContainer}
        >
          <span className={css.contact}>
            {localeContextHome?.emailMe.contact}
          </span>{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={css.arrow}
          >
            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}
