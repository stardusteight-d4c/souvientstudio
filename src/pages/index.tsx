import { useEffect } from 'react'
import Head from 'next/head'
import { useAppContext } from '@/@context/ContextProvider'
import axios from 'axios'
import {
  Hero,
  Marquee,
  Projects,
  Behance,
  Skills,
  Services,
  EmailMe,
} from '../components/home'
import Navbar from '../components/@globals/Navbar'
import Footer from '../components/@globals/Footer'

export default function Home() {
  const { lang } = useAppContext()
  const { homeLocaleContextText, setHomeLocaleContextText } = useAppContext()

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setHomeLocaleContextText(() => res.data))
    })()
  }, [lang])

  if (!homeLocaleContextText) {
    return <>Loading...</>
  }

  return (
    <>
      <Head>
        <title>Fevient | Graphic Designer</title>
        <meta
          name="souvientstudio |  Graphic Designer"
          content="Graphic Designer, Visual Design, Product Strategy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <Projects />
        <Behance />
        <Skills />
        <Services />
        <EmailMe />
        <Footer />
      </main>
    </>
  )
}
