import { cardServiceData } from '../../utils/data'
import ServiceCard from './integrate/ServiceCard'

export default function Services() {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="max-w-[1032px] text-center mx-auto">
        <span className="text-transparent bg-gradient-to-l from-[#f7ff00] to-[#ff00cc] bg-clip-text font-medium text-xl font-poppins !tracking-[-0.3px]">
          Services
        </span>
        <h2 className="text-[32px] mb-12 block w-fit mx-auto !tracking-[-2px] font-medium !leading-[41.6px] font-poppins">
          I can help you with
        </h2>
        <div className='flex justify-between items-center gap-x-16'>
          {cardServiceData.map((card) => (
            <ServiceCard
              emoji={card.emoji}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
