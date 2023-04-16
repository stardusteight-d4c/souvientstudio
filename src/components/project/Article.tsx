import Body from './integrate/Body'
import Heading from './integrate/Heading'
import { articleStyles as css } from './styles'

interface Props {
  headings: {
    title: string
    subtitle: string
  }
  body: string
}

export default function Article({ headings, body }: Props) {
  return (
    <div className={css.wrapper}>
      <Heading title={headings.title} subtitle={headings.subtitle} />
      <Body content={body!} />
    </div>
  )
}
