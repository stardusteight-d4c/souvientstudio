import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { brazilFlag, euaFlag } from '@/assets'
import { useAppContext } from '@/@context/ContextProvider'
import CurriculumModal from '../home/integrate/CurriculumModal'
import { navbarStyles as css } from './styles'

export default function Navbar() {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const { lang, setLang } = useAppContext()
  const { localeContextHome, showCurriculum, setShowCurriculum } =
    useAppContext()

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
    <nav className={css.handleWrapper(isGradientShadowOn)}>
      <div className={css.container}>
        <Link href="/" className={css.fevientLogo}>
          Fevient
        </Link>
        <ul className={css.desktopUnorderedList}>
          <li
            onClick={() => handleOpenCurriculum()}
            className={css.desktopListItem}
          >
            {localeContextHome?.nav.about}
          </li>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#F8F7E2"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setIsOpenMenu(true)}
              className={css.cursorPointer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#F8F7E2"
                viewBox="0 0 256 256"
              >
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
              </svg>
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
