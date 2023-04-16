import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppContext } from '@/@context/AppContextProvider'
import { navbarStyles as css } from './styles'
import { Menu, X } from './atoms'
import { Flags } from './integrate/Flags'
import CurriculumModal from '../home/integrate/CurriculumModal'
import AuthWrapper from './AuthWrapper'

interface Props {
  notFixed?: boolean
}

export default function Navbar({ notFixed = false }: Props) {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const router = useRouter()
  const { localeContextHome, showCurriculum, setShowCurriculum } =
    useAppContext()
  const isIndexRoute = router.pathname === '/'

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
    }, 500)
  }

  return (
    <nav className={css.handleWrapper(isGradientShadowOn, notFixed)}>
      {showCurriculum && <CurriculumModal />}
      <div className={css.container}>
        <Link href="/" className={css.fevientLogo}>
          Fevient
        </Link>
        <ul className={css.desktopUnorderedList}>
          {isIndexRoute && (
            <>
              <AuthWrapper>
                <Link href="/editor" className={css.desktopListItem}>
                  {localeContextHome?.nav.editor}
                </Link>
              </AuthWrapper>
              <li
                onClick={() => handleOpenCurriculum()}
                className={css.desktopListItem}
              >
                {localeContextHome?.nav.resume}
              </li>
              <li className={css.desktopListItem}>
                <a href="#contact">{localeContextHome?.nav.contact}</a>
              </li>
              <Flags />
            </>
          )}
        </ul>
        {isIndexRoute ? (
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
                    <AuthWrapper>
                      <Link href="/editor" className={css.mobileListItem}>
                        {localeContextHome?.nav.editor}
                      </Link>
                    </AuthWrapper>
                    <li
                      onClick={() => {
                        handleOpenCurriculum()
                        setIsOpenMenu(false)
                      }}
                      className={css.mobileListItem}
                    >
                      {localeContextHome?.nav.resume}
                    </li>
                    <li
                      onClick={() => setIsOpenMenu(false)}
                      className={css.mobileListItem}
                    >
                      <a href="#contact">{localeContextHome?.nav.contact}</a>
                    </li>
                    <Flags size={38} />
                  </ul>
                </div>
              </>
            )}
          </div>
        ) : (
          <div>
            <Flags />
          </div>
        )}
      </div>
    </nav>
  )
}
