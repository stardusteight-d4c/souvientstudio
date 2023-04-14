import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { brazilFlag, euaFlag } from '@/assets'
import { useAppContext } from '@/@context/ContextProvider'
import CurriculumModal from '../home/integrate/CurriculumModal'
import { navbarStyles as css } from './styles'
import { useRouter } from 'next/router'
import { Menu, X } from './atoms'

interface Props {
  notFixed?: boolean
}

export default function Navbar({ notFixed = false }: Props) {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const router = useRouter()
  const { lang, setLang } = useAppContext()
  const {
    localeContextHome,
    showCurriculum,
    setShowCurriculum,
    isClientAuthenticated,
  } = useAppContext()

  console.log('isClientAuthenticated', isClientAuthenticated)

  const isIndexRoute = router.pathname === '/'

  // Salvar preferência do idioma em local storage, cachear as traduções

  useEffect(() => {
    window.addEventListener('scroll', handleGradientShadowOnScroll)
    return () => {
      window.removeEventListener('scroll', handleGradientShadowOnScroll)
    }
  }, [])

  function handleGradientShadowOnScroll() {
    if (window.scrollY >= 100) {
      setIsGradientShadowOn(true)
    } else if (window.scrollY === 0) {
      setIsGradientShadowOn(false)
    } else {
      setIsGradientShadowOn(false)
    }
  }

  function handleOpenCurriculum() {
    window.scrollTo({ top: 0, behavior: 'auto' })
    setTimeout(() => {
      setShowCurriculum(true)
    }, 200)
  }

  return (
    <nav className={css.handleWrapper(isGradientShadowOn, notFixed)}>
      <div className={css.container}>
        <Link href="/" className={css.fevientLogo}>
          Fevient
        </Link>
        <ul className={css.desktopUnorderedList}>
          {isClientAuthenticated && (
            <Link href="/editor" className={css.desktopListItem}>
              Editor
            </Link>
          )}
          {isIndexRoute && (
            <li
              onClick={() => handleOpenCurriculum()}
              className={css.desktopListItem}
            >
              Resume
            </li>
          )}
          <li className={css.desktopListItem}>
            {localeContextHome?.nav.contact}
          </li>
          {showCurriculum && <CurriculumModal />}
          <li>
            {lang === 'en' ? (
              <Image
                src={euaFlag.src}
                onClick={() => setLang('pt-BR')}
                alt="united-states-flag/icon"
                width={25}
                height={25}
                className={css.cursorPointer}
              />
            ) : (
              <Image
                src={brazilFlag.src}
                onClick={() => setLang('en')}
                alt="brazil-flag/icon"
                width={25}
                height={25}
                className={css.cursorPointer}
              />
            )}
          </li>
        </ul>
        <div className={css.hideMobileMenu}>
          {isOpenMenu ? (
            <div
              onClick={() => setIsOpenMenu(false)}
              className={css.cursorPointer}
            >
              <X />
            </div>
          ) : (
            <div
              onClick={() => setIsOpenMenu(true)}
              className={css.cursorPointer}
            >
              <Menu />
            </div>
          )}
          {isOpenMenu && (
            <>
              <div className={css.wrapperMobileMenu} />
              <div className={css.containerMobileMenu}>
                <ul className={css.mobileUnorderedList}>
                  <li
                    onClick={() => {
                      handleOpenCurriculum()
                      setIsOpenMenu(false)
                    }}
                    className={css.mobileListItem}
                  >
                    {localeContextHome?.nav.about}
                  </li>
                  <li className={css.mobileListItem}>
                    {localeContextHome?.nav.contact}
                  </li>
                  <li>
                    {lang === 'en' ? (
                      <Image
                        src={euaFlag.src}
                        onClick={() => setLang('pt-BR')}
                        alt="united-states-flag/icon"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Image
                        src={brazilFlag.src}
                        onClick={() => setLang('en')}
                        alt="brazil-flag/icon"
                        width={40}
                        height={40}
                      />
                    )}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
