import ReactDOM from 'react-dom'
import { useAppContext } from '@/@context/AppContextProvider'
import { useEffect, useState } from 'react'

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
    <section className="absolute grid place-items-center bg-white/80 z-[1200] inset-0">
      <div
        id="curriculum-box"
        className="absolute border-[4px] border-orange overflow-hidden top-0 md:mx-2 w-full mt-12 shadow-lg shadow-black/20 lg:max-w-[1300px] bg-white text-black xll:w-full h-fit 2xl:mx-auto"
      >
        <embed
          src="fernanda-sena.pdf"
          type="application/pdf"
          className='w-full h-[900px] md:h-[600px]'
        />
      </div>
    </section>,
    document.body
  )
}
