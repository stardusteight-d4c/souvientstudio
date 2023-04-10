import { useAppContext } from "@/@context/ContextProvider"

export default function Marquee() {
  const { localeContextHome } = useAppContext()

  if (!localeContextHome) {
    return <></>
  }

  return (
    <section className="max-w-[100vw] pb-[20px] overflow-x-hidden relative">
      <div className="relative ease-linear transition-all duration-300">
      <div className="z-[100] bg-gradient-to-r from-[#F8F7E2] via-[#F8F7E2]/80 to-transparent inset-y-0 w-[200px] absolute left-0" />
      <div className="z-[100] bg-gradient-to-l from-[#F8F7E2] via-[#F8F7E2]/80 to-transparent inset-y-0 w-[200px] absolute right-0" />
        <div className="w-fit text-[#2e2e2e] cursor-default justify-center relative flex items-center">
          <div className="animate-marquee text-4xl md:text-[50px] mdd:text-[62px] font-semibold gap-x-3 flex w-fit whitespace-nowrap">
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
            <div className="min-w-fit max-w-fit">
              <span className="flex items-center !leading-[140%]">
                {localeContextHome.marquee.selectedWork}{' '}
                <span className="text-transparent bg-gradient-to-t from-[#F8F7E2] to-[#FE9BBA] bg-clip-text block ml-3">
                  /
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
