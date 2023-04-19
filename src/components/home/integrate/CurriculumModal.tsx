import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useAppContext } from '@/@context/AppContextProvider'
import { X } from '@/components/@globals/atoms'
import { curriculumModalStyles as css } from './styles'

export default function CurriculumModal() {
  const { setShowCurriculum } = useAppContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleHideModalOnScroll)
    return () => {
      window.removeEventListener('scroll', handleHideModalOnScroll)
    }
  }, [mounted])

  function handleHideModalOnScroll() {
    const element = document.getElementById('curriculum-box')!
    const curriculumHeight = element?.offsetHeight
    if (mounted) {
      if (window.scrollY >= curriculumHeight) {
        setShowCurriculum(false)
      }
    }
  }

  return ReactDOM.createPortal(
    <section className={css.wrapper}>
      <div className={css.overlay} />
      <div id="curriculum-box" className={css.box}>
        <div onClick={() => setShowCurriculum(false)} className={css.close}>
          <X />
        </div>
        <embed
          src="fernanda-sena.pdf"
          type="application/pdf"
          className={css.embed}
        />
      </div>
    </section>,
    document.body
  )
}
