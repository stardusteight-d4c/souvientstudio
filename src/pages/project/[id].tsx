import { useEffect, useState } from 'react'
import axios from 'axios'
import { ParsedUrlQuery } from 'querystring'
import { useAppContext } from '@/@context/AppContextProvider'
import { BaseLayout, Header, Loader } from '@/components/@globals'
import { IProject } from '@/@interfaces/IProject'
import { connectToDatabase } from '@/lib/mongodb'
import { Article, Cover } from '@/components/project'

type Props = {
  project: IProject
}

export default function Project(props: Props) {
  const { lang, localeContextHome, setLocaleContextHome } = useAppContext()
  const [project] = useState<IProject>(props.project)
  const [body, setBody] = useState<string>()
  const [contentWasNotLoaded, setContentWasNotLoaded] = useState(true)

  useEffect(() => {
    ;(async () => {
      await axios
        .get(`/api/locales/home/${lang}`)
        .then((res) => setLocaleContextHome(() => res.data))
    })()
    setBody(lang === 'en' ? project.bodyEN : project.bodyPTBR)
  }, [lang])

  if (contentWasNotLoaded) {
    setTimeout(() => {
      setContentWasNotLoaded(
        !localeContextHome ||
          project === null ||
          !project.bodyEN ||
          !project.bodyPTBR ||
          !body
      )
    }, 1000)
    return (
      <>
        <Header title={`${project.title}`} />
        <Loader />
      </>
    )
  }

  return (
    <>
      <Header title={`${project.title}`} />
      <BaseLayout>
        <section>
          <Cover coverImage={project.coverImage} />
          <Article
            headings={{ title: project.title, subtitle: project.subtitle }}
            body={body!}
          />
        </section>
      </BaseLayout>
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
    revalidate: 30 * 60, // 30 min in sec
  }
}
