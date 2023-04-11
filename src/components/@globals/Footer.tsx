import { useAppContext } from '@/@context/ContextProvider'
import { Behance, Instagram, LinkedIn } from './atoms'
import { footerStyles as css } from './styles'

export default function Footer() {
  const { localeContextHome } = useAppContext()

  const socialLinks = [
    { link: 'https://www.instagram.com/fevient/', Icon: Instagram, size: 20 },
    { link: 'https://www.behance.net/fersena/', Icon: Behance, size: 22 },
    { link: 'https://www.linkedin.com/in/fercsena/', Icon: LinkedIn, size: 20 },
  ]

  return (
    <footer className={css.wrapper}>
      <div className={css.container}>
        <div className={css.contentContainer}>
          <span className={css.span}>
            ©2023 - {new Date().getFullYear()} Fevient,{' '}
            {localeContextHome?.footer} Stardusteight.
          </span>
          <ul className={css.unorderedList}>
            {socialLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank">
                  <item.Icon size={item.size} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
