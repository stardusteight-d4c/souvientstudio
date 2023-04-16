import * as marked from 'marked'

interface Props {
  content: string
}

export default function Body({ content }: Props) {
  return (
    <div
      id="article-body"
      dangerouslySetInnerHTML={{
        __html: marked.marked(content!),
      }}
      className="mt-10"
    />
  )
}
