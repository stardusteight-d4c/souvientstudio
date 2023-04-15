import { useAppContext } from '@/@context/ContextProvider'
import { skillsData } from '@/utils/data'

import SkillImage from './integrate/SkillImage'
import { skillsStyles as css } from './styles'

export default function Skills() {
  const { localeContextHome } = useAppContext()

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
