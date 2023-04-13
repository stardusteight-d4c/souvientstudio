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
import Navbar from '@/components/@globals/Navbar'
import Footer from '@/components/@globals/Footer'
import { IProject } from '@/@interfaces/IProject'

interface Props {
  visualIdentities: IProject[]
  openSequences: IProject[]
  personalProjects: IProject[]
}

export default function Home(props: Props) {
  const { lang } = useAppContext()
  const { localeContextHome, setLocaleContextHome } = useAppContext()

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
  }, [lang])

  const projectsProps = {
    visualIdentities: props.visualIdentities,
    openSequences: props.openSequences,
    personalProjects: props.personalProjects,
  }

  if (!localeContextHome) {
    return <>Loading...</>
  }

  return (
    <>
      <Head>
        <title>Fevient / Graphic Designer</title>
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
        <Projects {...projectsProps} />
        <Behance />
        <Skills />
        <Services />
        <EmailMe />
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps(context: { resolvedUrl: any }) {
  const { data } = await axios.get(
    `${process.env.BASE_URL}/api/database/projects?url=${context.resolvedUrl}`
  )
  const visualIdentities: IProject[] = data.filter(
    (project: IProject) => project.type === 'Visual identity'
  )
  const openSequences: IProject[] = data.filter(
    (project: IProject) => project.type === 'Open sequence'
  )
  const personalProjects: IProject[] = data.filter(
    (project: IProject) => project.type === 'Personal project'
  )
  return {
    props: {
      visualIdentities,
      openSequences,
      personalProjects,
    },
    revalidate: 30 * 60, // 30min in seconds
  }
}
