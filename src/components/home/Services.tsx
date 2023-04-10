import { useAppContext } from '@/@context/ContextProvider'
import { cardServiceData } from '../../utils/data'
import ServiceCard from './integrate/ServiceCard'

export default function Services() {
  const { localeContextHome } = useAppContext()

  if (!localeContextHome) {
    return <></>
  }

  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="max-w-[1032px] px-4 lg:px-0 text-center mx-auto">
        <span className="text-[#fe5b30] font-medium text-xl font-poppins !tracking-[-0.3px]">
          {localeContextHome.services.heading.span}
        </span>
        <h2 className="text-[32px] text-[#2e2e2e] mb-12 block w-fit mx-auto !tracking-[-2px] font-medium !leading-[41.6px] font-poppins">
          {localeContextHome.services.heading.title}
        </h2>
        <div className="flex flex-col gap-y-6 mdd:flex-row justify-between items-center">
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
