import { fernanda, blurRoseEffect, paperTexture } from '@/assets'

export default function Curriculum() {
  return (
    <main className="scrollbar-hide h-screen overflow-hidden relative text-[#2e2e2e] z-50  w-screen">
      <img
        src={paperTexture.src}
        className="absolute inset-0 z-0 w-full min-h-screen max-h-screen opacity-10"
      />
      <div className="max-w-[1280px]  scrollbar-hide mt-8 mx-auto relative">
        <img
          src={blurRoseEffect.src}
          alt=""
          className="absolute -z-5 opacity-50 pointer-events-none top-16 -right-[250px] w-[1000px]"
        />
        <div className="flex items-center justify-between">
          <img
            src={fernanda.src}
            className="w-[125px] h-[125px] rounded-full object-cover mr-5"
            alt=""
          />
          <span className="text-[#505050] font-normal block text-xs border border-[#2e2e2e]/50 py-6 px-9  rounded-full max-w-[700px]">
            Hi, my name is Fernanda Chagas de Sena but i go by{' '}
            <strong className="font-semibold">Fevient</strong>, I am an{' '}
            <strong className="font-semibold">Graphic Designer</strong> from
            Brazil. I am focused on Graphic Design, mainly branding, and I am
            always ready for new proposals. You can learn more about me and my
            work in this CV!
          </span>
          <div className="text-right w-full max-w-md font-poppins">
            <h2 className="text-3xl font-medium">Fevient</h2>
            <span className="block">Fernanda Chagas de Sena</span>
            <span className="block">Graphic Designer</span>
            <span className="block font-light">D.O.B.: 07/01/1997</span>
          </div>
        </div>
        <div className="mt-8 font-poppins">
          <h2 className="text-3xl font-light font-inter mb-4 tracking-tighter">
            Education
          </h2>
          <div className="flex flex-col gap-y-4">
            <div>
              <h3 className="font-medium text-base">
                Industrial Design And Product Development Engineering
              </h3>
              <span className="block -mt-[2px] text-[#505050] font-light text-sm">
                University of Merida (UEx) / Merida, Spain / 2015 - 2020
              </span>
            </div>
            <div>
              <h3 className="font-medium text-base">
                Industrial Design And Product Development Engineering
              </h3>
              <span className="block -mt-[2px] text-[#505050] font-light text-sm">
                University of Merida (UEx) / Merida, Spain / 2015 - 2020
              </span>
            </div>
            <div>
              <h3 className="font-medium text-base">
                Industrial Design And Product Development Engineering
              </h3>
              <span className="block -mt-[2px] text-[#505050] font-light text-sm">
                University of Merida (UEx) / Merida, Spain / 2015 - 2020
              </span>
            </div>
            <div>
              <h3 className="font-medium text-base">
                Industrial Design And Product Development Engineering
              </h3>
              <span className="block -mt-[2px] text-[#505050] font-light text-sm">
                University of Merida (UEx) / Merida, Spain / 2015 - 2020
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-light font-inter mb-4 mt-8 tracking-tighter">
          Achievements
        </h2>
        <div className="flex flex-col gap-y-4">
          <div>
            <h3 className="font-medium text-base">
              Industrial Design And Product Development Engineering
            </h3>
            <span className="block -mt-[2px] text-[#505050] font-light text-sm">
              University of Merida (UEx) / Merida, Spain / 2015 - 2020
            </span>
          </div>
          <div>
            <h3 className="font-medium text-base">
              Industrial Design And Product Development Engineering
            </h3>
            <span className="block -mt-[2px] text-[#505050] font-light text-sm">
              University of Merida (UEx) / Merida, Spain / 2015 - 2020
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
