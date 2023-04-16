import { useAppContext } from '@/@context/ContextProvider'
import { useState } from 'react'
import { IntersectionObserver } from '../@globals'
import { marqueeStyles as css } from './styles'

export default function Marquee() {
  const [isVisible, setIsVisible] = useState(false)
  const { localeContextHome } = useAppContext()
  const repeatMarqueeItem = ['']

  let i
  for (i = 0; i <= 30; i++) {
    repeatMarqueeItem.push('')
  }

  const handleEnterViewport = () => {
    setIsVisible(true)
  }

  return (
    <IntersectionObserver onEnter={handleEnterViewport}>
      <section className={css.wrapper(isVisible)}>
        <div className={css.leftOverlay} />
        <div className={css.rightOverlay} />
        <div className={css.marqueeWrapper}>
          <div className={css.marqueeAnimateContainer}>
            {repeatMarqueeItem.map((_, index) => (
              <div key={index} className={css.itemWrapper}>
                <span className={css.spanContainer}>
                  {localeContextHome?.marquee.selectedWork}{' '}
                  <span className={css.slashDivider}>/</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </IntersectionObserver>
  )
}
