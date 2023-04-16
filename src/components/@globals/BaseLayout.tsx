import Footer from './Footer'
import Navbar from './Navbar'
import { ReactNode } from 'react'

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
