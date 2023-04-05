import React from 'react'

export default function Projects() {
  return (
    <section className="py-[100px] px-4 relative h-fit overflow-hidden">
      <div className="grid grid-cols-2 gap-8 w-fit mx-auto">
        <div className="card rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer w-[500px] h-[500px] group col-span-1 relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f0435164108103.63f117ed6c2b4.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <b className="inset-x-0 transition-all bg-gradient-to-t from-[#020202]/90 to-transparent bottom-0 h-[100px] hidden group-hover:block"></b>
          <div className="content">
            <div className="title px-4 text-center">
              <span className='font-semibold text-2xl uppercase'>Jordan</span>
              <br />
              <span className='font-medium tracking-widest uppercase text-lg'>Illustration and Composition</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
