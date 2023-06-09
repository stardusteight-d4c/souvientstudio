import { useAppContext } from '@/@context/AppContextProvider'
import { Behance, Instagram, LinkedIn } from './atoms'
import { footerStyles as css } from './styles'

export default function Footer() {
  const { localeContextHome } = useAppContext()

  const socialLinks = [
    {
      link: 'https://www.instagram.com/fevient/',
      Icon: Instagram,
      size: 20,
      name: 'Instagram',
    },
    {
      link: 'https://www.behance.net/fersena/',
      Icon: Behance,
      size: 22,
      name: 'Behance',
    },
    {
      link: 'https://www.linkedin.com/in/fercsena/',
      Icon: LinkedIn,
      size: 20,
      name: 'LinkedIn',
    },
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
                <a
                  href={item.link}
                  target="_blank"
                  aria-label={`Follow me in ${item.name}`}
                >
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
