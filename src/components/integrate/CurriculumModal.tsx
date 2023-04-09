import ReactDOM from 'react-dom'
import { fernanda } from '@/assets'

export default function CurriculumModal() {
  return ReactDOM.createPortal(
    <main className="fixed h-screen grid place-items-center bg-[#F8F7E2]/50 w-screen z-[1500] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <div className="bg-paper-texture bg-100% ises shadow-lg shadow-black/20 max-w-[1300px] md:max-h-[600px] 2xl:max-h-fit overflow-y-scroll bg-[#F8F7E2] text-[#2e2e2e] border-[4px] border-[#fe5b30]/80 p-4 w-full h-fit overflow-hidden !scrollbar-hide mx-auto relative">
        <div>
          <div className="flex items-center justify-between">
            <img
              src={fernanda.src}
              className="w-[125px] h-[125px] rounded-full object-cover mr-5"
              alt=""
            />
            <span className="text-[#505050] font-normal block text-sm border border-[#2e2e2e]/50 py-6 px-11  rounded-full max-w-[700px]">
              Hi, my name is Fernanda Chagas de Sena but i go by{' '}
              <strong className="font-semibold">Fevient</strong>, I am an{' '}
              <strong className="font-semibold">Graphic Designer</strong> from
              Brazil. I am focused on Graphic Design, mainly branding, and I am
              always ready for new proposals. You can learn more about me and my
              work in this CV!
            </span>
            <div className="text-right w-full max-w-md font-poppins">
              <h2 className="text-2xl font-medium">Fevient</h2>
              <span className="block">Fernanda Chagas de Sena</span>
              <span className="block">Graphic Designer</span>
              <span className="block font-light">D.O.B.: 07/01/1997</span>
            </div>
          </div>
          <div className="flex gap-8 font-poppins mt-8">
            <div>
              <h2 className="text-2xl font-light font-inter mb-4 tracking-tighter">
                Education
              </h2>
              <div className="flex flex-col gap-y-4">
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-light font-inter mb-4 mt-8 tracking-tighter">
                Achievements
              </h2>
              <div className="flex flex-col gap-y-4">
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-light font-inter mb-4 tracking-tighter">
                Experience
              </h2>
              <div className="flex flex-col gap-y-4">
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-base">
                    Industrial Design And Product Development Engineering
                  </h3>
                  <span className="block -mt-[2px] text-[#505050] text-sm">
                    University of Merida (UEx) / Merida, Spain / 2015 - 2020
                  </span>
                  <ul className="mt-2">
                    <li className="list-disc ml-7 text-sm">
                      Posters, infographics, logos and flyers design: Photoshop
                      and Illustrator
                    </li>
                    <li className="list-disc ml-7 text-sm">
                      Social networks management: Twitter, Facebook and
                      Instagram
                    </li>
                    <li className="list-disc ml-7 text-sm">
                      News update on the official website
                    </li>
                    <li className="list-disc ml-7 text-sm">
                      Treatment/service to customers via phone
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="text-2xl font-light font-inter mb-4 mt-8 tracking-tighter">
                Software
              </h2>
              <div>
                <div>
                  <h3 className="font-medium text-base">Photoshop</h3>
                  <div className="flex items-center gap-x-1">
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="bg-[#2e2e2e] rounded-full w-4 h-4" />
                    <div className="border border-[#2e2e2e] rounded-full w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>,
    document.body
  )
}
