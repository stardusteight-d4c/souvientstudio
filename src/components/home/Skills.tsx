import { useAppContext } from '@/@context/AppContextProvider'
import { skillsData } from '@/utils/data'
import SkillImage from './integrate/SkillImage'
import { skillsStyles as css } from './styles'

export default function Skills() {
  const { localeContextHome } = useAppContext()

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <h2 className={css.title}>{localeContextHome?.skills}</h2>
        <div className={css.skillsWrapper}>
          {skillsData.map((skill, index) => (
            <SkillImage skill={skill} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
