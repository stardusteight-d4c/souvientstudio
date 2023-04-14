import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '@/components/@globals/Navbar'
import { useAppContext } from '@/@context/ContextProvider'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '@/components/@globals/Footer'
import * as marked from 'marked'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { IProject } from '@/@interfaces/IProject'
import { connectToDatabase } from '@/lib/mongodb'
import Header from '@/components/@globals/Header'

interface Props {
  project: IProject
}

export default function Project(props: Props) {
  const router = useRouter()
  const { id } = router.query
  const { lang } = useAppContext()
  const { localeContextHome, setLocaleContextHome } = useAppContext()
  const [project, setProject] = useState<IProject>(props.project)

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
  }, [lang])

  if (!localeContextHome || project === null) {
    return <>Loading...</>
  }

  return (
    <>
      <Header title={`${project.title}`} />
      <main>
        <Navbar />
        <section>
          <div className="relative">
            <div className="w-full absolute top-0 z-50 h-[300px] bg-gradient-to-b from-[#FE9BBA]/90 to-transparent" />
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

export async function getStaticPaths() {
  const { db } = await connectToDatabase()
  const projectsIds = (await db
    .collection('projects')
    .find({}, { projection: { _id: 1 } })
    .toArray()) as []

  const ids = projectsIds.map((project: { _id: string }) => ({
    params: {
      id: String(project._id),
    },
  }))

  return {
    paths: ids,
    fallback: false,
  }
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export async function getStaticProps(context: {
  params: IParams
  resolvedUrl: any
}) {
  const { id } = context.params as IParams
  const project = await axios.get(
    `${process.env.BASE_URL}/api/database/projects/${id}?url=${context.resolvedUrl}`
  )
  return {
    props: {
      project: project.data,
    },
    revalidate: 30 * 60, // 30min in seconds
  }
}
