import { useAppContext } from '@/@context/ContextProvider'
import {
  photoshop,
  illustrator,
  afterEffects,
  figma,
  procreate,
} from '@/assets'
import SkillImage from './integrate/SkillImage'
import { skillsStyles as css } from './styles'

export default function Skills() {
  const { localeContextHome } = useAppContext()

  const skillsData = [
    {
      image: photoshop.src,
      alt: 'photoshop',
    },
    {
      image: illustrator.src,
      alt: 'illustrator',
    },
    {
      image: afterEffects.src,
      alt: 'afterEffects',
    },
    {
      image: figma.src,
      alt: 'figma',
    },
    {
      image: procreate.src,
      alt: 'procreate',
    },
  ]

  if (!localeContextHome) {
    return <></>
  }

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>{localeContextHome.skills}</h2>
        <div className={css.skillsWrapper}>
          {skillsData.map((skill) => (
            <SkillImage skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
