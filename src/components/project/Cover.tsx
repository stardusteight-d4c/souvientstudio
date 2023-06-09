import { coverStyles as css } from './styles'

interface Props {
  coverImage: string
}

export default function Cover({ coverImage }: Props) {
  return (
    <div className={css.wrapper}>
      <img src={coverImage} className={css.image} />
    </div>
  )
}
