import { useAppContext } from '@/@context/ContextProvider'
import { cardServiceData } from '@/utils/data'
import ServiceCard from './integrate/ServiceCard'
import { servicesStyles as css } from './styles'

export default function Services() {
  const { localeContextHome } = useAppContext()

  if (!localeContextHome) {
    return <></>
  }

  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <span className={css.span}>
          {localeContextHome.services.heading.span}
        </span>
        <h2 className={css.title}>
          {localeContextHome.services.heading.title}
        </h2>
        <div className={css.cardWrapper}>
          {cardServiceData.map((card, index) => (
            <ServiceCard
              key={index}
              emoji={card.emoji}
              title={localeContextHome.services.cards[index].title}
              text={localeContextHome.services.cards[index].text}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
