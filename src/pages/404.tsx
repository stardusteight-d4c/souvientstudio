import Header from '@/components/@globals/Header'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Header title="Not Found" />
      <div className="w-screen h-screen">
        <div className="grid place-items-center items-center h-full">
          <div>
            <div className="flex items-center flex-col justify-center gap-x-2">
              <span className="text-[100px] font-semibold font-poppins text-[#2e2e2e]">
                404
              </span>
              <span className="text-[32px] text-transparent bg-gradient-to-l from-[#FE9BBA] to-[#fdadc8] bg-clip-text font-inter font-extralight uppercase">
                Page not found
              </span>
            </div>
            <Link
              href="/"
              className="block active:scale-95 mt-[40px] w-fit bg-[#FE9BBA] py-2 px-8 mx-auto text-[#F8F7E2] font-medium rounded-full"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
