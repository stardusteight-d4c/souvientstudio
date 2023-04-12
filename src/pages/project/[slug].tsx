import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@/components/@globals/Navbar'
import { club, mba } from '@/assets'
import { useAppContext } from '@/@context/ContextProvider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '@/components/@globals/Footer'
import * as marked from 'marked'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query
  const { lang } = useAppContext()
  const { localeContextHome, setLocaleContextHome } = useAppContext()
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
  }, [lang])

console.log(project);


  useEffect(() => {
    ;(async () => {
      if (slug) {
        await axios
          .get(`/api/database/projects/${slug}`)
          .then((res) => setProject(() => res.data))
      }
    })()
  }, [slug])

  if (!localeContextHome || project === null) {
    return <>Loading...</>
  }

  return (
    <>
      <Head>
        <title>Fevient / Project</title>
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
              src={project.coverImage}
              className="object-cover relative w-full h-[300px]"
            />
          </div>
          <div className="max-w-[800px] mt-8 text-[#2e2e2e] w-full mx-auto">
            <h1 className="text-[72px] font-semibold">{project.title}</h1>
            <h2 className="text-[50px] font-light -mt-4">{project.subtitle}</h2>
            <div
              id="article-body"
              dangerouslySetInnerHTML={{
                __html: project.body && marked.marked(project.body),
              }}
              className="mt-10"
            ></div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
