import Image from 'next/legacy/image'
import { motion } from 'framer-motion'
import { useAppContext } from '@/@context/AppContextProvider'
import { fernanda, star } from '@/assets'
import { starsVariants, textVariant } from '@/lib/motion'
import { TypingText } from '../@globals'
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
              <motion.div
                variants={starsVariants('left')}
                initial="hidden"
                animate="show"
              >
                <Image src={star.src} width={84} height={84} />
              </motion.div>
            </div>
            <div className={css.spinnerRight}>
              <motion.div
                variants={starsVariants('right')}
                initial="hidden"
                animate="show"
              >
                <Image src={star.src} width={64} height={64} />
              </motion.div>
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
          <motion.span
            variants={textVariant(0.5)}
            initial="hidden"
            animate="show"
          >
            <TypingText
              title={localeContextHome?.hero.presentation!}
              textStyles={css.presentationTxt}
            />
          </motion.span>
        </div>
        <motion.h1
          variants={textVariant(0.5)}
          initial="hidden"
          animate="show"
          className={css.headingOne}
        >
          {localeContextHome?.hero.title1!}
          {lang === 'en' && <br className={css.breakLine} />}
          &nbsp; {localeContextHome?.hero.title2!}
        </motion.h1>
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
