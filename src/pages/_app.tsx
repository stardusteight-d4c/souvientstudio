import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider, useAppContext } from '../@context/ContextProvider'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'

interface MyAppProps extends AppProps {
  isClientAuthenticated: boolean
}

interface HandleIsClientAuthenticatedContextProps {
  isClientAuthenticated: boolean
}

function HandleIsClientAuthenticatedContext(props: HandleIsClientAuthenticatedContextProps) {
  const { isClientAuthenticated,setIsClientAuthenticated } = useAppContext()
  useEffect(() => {
    setIsClientAuthenticated(props.isClientAuthenticated)
  }, [isClientAuthenticated])
  return <div className="hidden"></div>
}

export default function App({
  Component,
  pageProps,
  isClientAuthenticated,
}: MyAppProps) {
  return (
    <ContextProvider>
      <HandleIsClientAuthenticatedContext
        isClientAuthenticated={isClientAuthenticated}
      />
      <Component {...pageProps} />
    </ContextProvider>
  )
}

App.getInitialProps = async (context: {
  ctx: { req: { cookies: { sessionCookie: string } } }
}): Promise<any> => {
  const { ctx } = context
  let isClientAuthenticated = false

  try {
    if (ctx.req.cookies.sessionCookie) {
      const sessionCookieToken = ctx.req.cookies.sessionCookie
      jwt.verify(sessionCookieToken, process.env.JWT_SECRET_KEY!)
      isClientAuthenticated = true
    } else {
      isClientAuthenticated = false
    }
    return {
      isClientAuthenticated: isClientAuthenticated,
    }
  } catch (err) {
    return {
      isClientAuthenticated: false,
    }
  }
}
