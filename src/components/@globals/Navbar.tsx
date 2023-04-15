import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppContext } from '@/@context/ContextProvider'
import { navbarStyles as css } from './styles'
import { Menu, X } from './atoms'
import { Flags } from './integrate/Flags'
import CurriculumModal from '../home/integrate/CurriculumModal'

interface Props {
  notFixed?: boolean
}

export default function Navbar({ notFixed = false }: Props) {
  const [isGradientShadowOn, setIsGradientShadowOn] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const router = useRouter()
  const {
    localeContextHome,
    showCurriculum,
    setShowCurriculum,
    isClientAuthenticated,
  } = useAppContext()
  const isIndexRoute = router.pathname === '/'
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset === 0) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    <nav
      className={css.handleWrapper(isGradientShadowOn, notFixed, isTop)}
    >
      {showCurriculum && <CurriculumModal />}
      <div className={css.container}>
        <Link href="/" className={css.fevientLogo}>
          Fevient
        </Link>
        <ul className={css.desktopUnorderedList}>
          {isIndexRoute && (
            <>
              {isClientAuthenticated && (
                <Link href="/editor" className={css.desktopListItem}>
                  {localeContextHome?.nav.editor}
                </Link>
              )}
              <li
                onClick={() => handleOpenCurriculum()}
                className={css.desktopListItem}
              >
                {localeContextHome?.nav.resume}
              </li>
              <li className={css.desktopListItem}>
                <a href="#contact">{localeContextHome?.nav.contact}</a>
              </li>
            </>
          )}
          <Flags />
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
                    <Flags />
                  </ul>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="block md:hidden">
            <Flags />
          </div>
        )}
      </div>
    </nav>
  )
}
