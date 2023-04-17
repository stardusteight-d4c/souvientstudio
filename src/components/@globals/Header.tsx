import Head from 'next/head'

interface Props {
  title: string
}

export default function Header({ title }: Props) {
  return (
    <Head>
      <title>{`Fevient / ${String(title)}`}</title>
      <meta
        name="description"
        content="Graphic Designer, Visual Design, Product Strategy"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
