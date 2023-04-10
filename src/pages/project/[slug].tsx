import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@/components/@globals/Navbar'
import { club, mba } from '@/assets'
import { useAppContext } from '@/@context/ContextProvider'
import { useEffect } from 'react'
import axios from 'axios'
import Footer from '@/components/@globals/Footer'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query
  const { lang } = useAppContext()
  const { localeContextHome, setLocaleContextHome } = useAppContext()

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
  }, [lang])

  if (!localeContextHome) {
    return <>Loading...</>
  }

  return (
    <>
      <Head>
        <title>Fevient / Project / {slug}</title>
        <meta
          name="souvientstudio |  Graphic Designer"
          content="Graphic Designer, Visual Design, Product Strategy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <section>
          <div className="relative">
            <div className="w-full absolute top-0 z-10 h-[300px] bg-gradient-to-b from-[#FE9BBA]/90 to-[#F8F7E2]/10" />
            <img
              src={mba.src}
              className="object-cover relative w-full h-[300px]"
            />
          </div>
          <div className="max-w-[800px] text-[#2e2e2e] w-full mx-auto">
            <h1 className="text-[72px] font-semibold">Jordan</h1>
            <h2 className="text-[50px] font-light -mt-4">
              Illustration and Composition
            </h2>
          <div className='mt-10'>
            A short overview of the project and your role in it, the field of
            the project. A career in website design can involve the design,
            creation, and coding of a range of website types. Other tasks will
            typically include liaising with clients and discussing website
            specifications, incorporating feedback, working on graphic design
            and image editing, and enabling multimedia features such as audio
            and video. Requiring a range of creative and technical skills, web
            designers may be involved in work across a range of industries,
            including software companies, IT consultancies, web design
            companies, corporate organizations, and more. The solution The U.S.
            Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends
            to group web developers and digital designers into one category.
            However, they define them separately, stating that web developers
            create and maintain websites and are responsible for the technical
            aspects including performance and capacity. Web or digital
            designers, on the other hand, are responsible for the look and
            functionality of websites and interfaces. They develop, create, and
            test the layout, functions, and navigation for usability. More from
            the project A gallery view of selected frames from the project that
            represent the general idea and solution.
          </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
