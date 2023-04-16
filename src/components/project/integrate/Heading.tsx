import { headingStyles as css } from '../styles'

interface Props {
  title: string
  subtitle: string
}

export default function Heading({ title, subtitle }: Props) {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <h2 className={css.subtitle}>{subtitle}</h2>
    </>
  )
}
