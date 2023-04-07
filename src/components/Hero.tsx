import fernanda from '../assets/fernanda.png'
import star from '../assets/star.svg'

export default function Hero() {
  return (
    <section className="pb-[100px] pt-[200px] bg-gradient-to-b from-[#FE9BBA] to-[#F8F7E2] px-4 relative h-fit overflow-hidden">
      <div id="container-stars" className="inset-0 pointer-events-none">
        <div id="stars"></div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>

      <div className="max-w-[1200px] z-50 h-fit w-full mx-auto">
        <div className="mx-auto w-fit gap-y-[19px] flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <img
              src={star.src}
              className="spinner absolute -top-[20px] -left-[100px] md:-left-[300px] w-[42px] h-[42px]"
            />
            <img
              src={star.src}
              className="spinner absolute -bottom-[20px] -right-[100px] md:-right-[300px] w-[34px] h-[34px]"
            />
            {/* <div className="blur-shadow1 absolute -top-[20px] -left-[100px] md:-left-[300px] w-[32px] h-[32px] rounded-md" /> */}
            {/* <div className="blur-shadow2 absolute -bottom-[20px] -right-[100px] md:-right-[300px] w-[24px] h-[24px] rounded-md" /> */}
            <div className="spinner w-[110px] h-[110px]">
              <div className="spinner1" />
            </div>
            <img
              src={fernanda.src}
              className="absolute top-1 w-[100px] h-[100px] rounded-full object-fill"
            />
          </div>
          <span className="text-transparent bg-white bg-clip-text font-medium text-xl font-poppins !tracking-[-0.3px]">
            Hi I'm Fernanda Sena
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-[50px] mdd:text-[72px] text-center mt-[20px] leading-[40.4px] md:!leading-[58.4px]  mdd:!leading-[86.4px] mx-auto w-full max-w-[350px] sm:max-w-[928px] font-semibold font-poppins !tracking-[-1px]">
          Building digital products, <br className="hidden sm:block" />
          &nbsp;brands, and experience.
        </h1>
        <p className="text-lg mt-[20px] w-full max-w-[350px] sm:max-w-[580px] mx-auto !leading-[28.8px] text-[#a1a3bb] text-center">
          I'm a Graphic designer based in Brazil, I specialize in UI/UX Design,
          Responsive Web Design, and Visual Development.
        </p>
        <button
          type="button"
          className="hover:scale-105 text-white z-50 relative bg-gradient-to-t from-[#FE9BBA] to-[#F8F7E2]  transition-all duration-300 rounded-full w-fit block py-3 px-8 active:scale-100 outline-none mx-auto mt-[40px]"
        >
          <strong>GET IN TOUCH</strong>
        </button>
      </div>
    </section>
  )
}
