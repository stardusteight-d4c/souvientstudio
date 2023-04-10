import { useAppContext } from '@/@context/ContextProvider'
import { fernanda, star } from '@/assets'
import Image from 'next/legacy/image'
import { heroStyles as css } from './styles'

export default function Hero() {
  const { localeContextHome } = useAppContext()
  const { lang } = useAppContext()

  return (
    <section className={css.wrapper}>
      <div id="container-dotted-grid" className={css.dottedGridContainer}>
        <div id="dots" />
        <div id="glow">
          <div className={css.circle} />
          <div className={css.circle} />
        </div>
      </div>

      <div className={css.container}>
        <div className={css.presentationWrapper}>
          <div className={css.avatarContainer}>
            <div className={css.spinnerLeft}>
              <Image src={star.src} width={84} height={84} />
            </div>
            <div className={css.spinnerRight}>
              <Image src={star.src} width={64} height={64} />
            </div>
            <div className={css.spinnerBlurEffect}>
              <div className={css.spinnerBlurEffectComplement} />
            </div>
            <div className={css.avatar}>
              <Image
                src={fernanda.src}
                width={100}
                height={100}
                quality={100}
                className={css.avatar}
              />
            </div>
          </div>
          <span className={css.presentationTxt}>
            {localeContextHome?.hero.presentation}
          </span>
        </div>
        <h1 className={css.headingOne}>
          {localeContextHome?.hero.title1}
          {lang === 'en' && <br className={css.breakLine} />}
          &nbsp;{localeContextHome?.hero.title2}
        </h1>
        <p className={css.subtitle}>{localeContextHome?.hero.subtitle}</p>
        <a
          href="https://www.linkedin.com/in/fercsena/"
          target="_blank"
          className={css.linkButton}
        >
          <strong>{localeContextHome?.hero.button}</strong>
        </a>
      </div>
    </section>
  )
}
