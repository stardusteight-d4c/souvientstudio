import React from 'react'

export default function Projects() {
  return (
    <section className="py-[100px] px-4 relative h-fit overflow-hidden">
      <div className="grid grid-cols-2 gap-8 w-fit mx-auto">
        <div className="card w-[500px] h-[500px] group col-span-1 relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7f0435164108103.63f117ed6c2b4.png"
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
          <b className='inset-x-0 bg-gradient-to-t from-black/80 to-transparent bottom-0 h-[100px] hidden group-hover:block'></b>
          <div className="content text-2xl">
            <p className="title">
              Some Fomous
              <br />
              <span>Creative Designer</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
