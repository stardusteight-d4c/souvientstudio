import { useEffect } from 'react'
import axios from 'axios'
import { useAppContext } from '@/@context/ContextProvider'
import Navbar from '@/components/@globals/Navbar'
import Footer from '@/components/@globals/Footer'
import Header from '@/components/@globals/Header'
import { IProject } from '@/@interfaces/IProject'
import {
  Hero,
  Marquee,
  Projects,
  Behance,
  Skills,
  Services,
  Contact,
} from '../components/home'

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
      <Header title="Graphic Designer" />
      <main>
        <Navbar />
        <Hero />
        <Marquee />
        <Projects {...projectsProps} />
        <Behance />
        <Skills />
        <Services />
        <Contact />
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
