import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

export default function BaseLayout({ children }: Props) {
  return (
    <main>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </main>
  )
}
