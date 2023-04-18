import { useEffect } from 'react'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import { useAppContext } from '@/@context/AppContextProvider'

interface Props {
  children: React.ReactNode
}

export const AuthWrapper = ({ children }: Props) => {
  const { isClientAuthenticated, setIsClientAuthenticated } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const cookies = document.cookie.split(';')
      const sessionCookie = cookies.find((cookie) =>
        cookie.trim().startsWith('sessionCookie=')
      )
      if (sessionCookie) {
        const sessionCookieValue = sessionCookie.split('=')[1]
        try {
          const decodedToken = jwt.decode(String(sessionCookieValue))
          if (decodedToken) {
            setIsClientAuthenticated(true)
          } else {
            setIsClientAuthenticated(false)
          }
        } catch (err) {
          setIsClientAuthenticated(false)
          router.push('/')
        }
      } else {
        router.push('/')
      }
    })()
  }, [])

  if (isClientAuthenticated === true && isClientAuthenticated !== undefined) {
    return <>{children}</>
  } else {
    return null
  }
}

export default AuthWrapper
