import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  AppContextProvider,
  useAppContext,
} from '@/@context/AppContextProvider'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'
import { EditorContextProvider } from '@/@context/EditorContextProvider'

interface MyAppProps extends AppProps {
  isClientAuthenticated: boolean
}

interface HandleIsClientAuthenticatedContextProps {
  isClientAuthenticated: boolean
}

function HandleIsClientAuthenticatedContext(
  props: HandleIsClientAuthenticatedContextProps
) {
  const { isClientAuthenticated, setIsClientAuthenticated } = useAppContext()
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
    <AppContextProvider>
      <EditorContextProvider>
        <HandleIsClientAuthenticatedContext
          isClientAuthenticated={isClientAuthenticated}
        />
        <Component {...pageProps} />
      </EditorContextProvider>
    </AppContextProvider>
  )
}

App.getInitialProps = async (context: {
  ctx: { req: { cookies: { sessionCookie: string } } }
}): Promise<{ isClientAuthenticated: boolean }> => {
  let isClientAuthenticated = false
  try {
    const { ctx } = context
    const isServer = !!ctx.req
    if (isServer && ctx.req.cookies.sessionCookie) {
      const sessionCookieToken = ctx.req.cookies.sessionCookie
      try {
        const decodedToken = jwt.verify(
          sessionCookieToken,
          process.env.JWT_SECRET_KEY!
        )
        if (decodedToken) {
          isClientAuthenticated = true
        } else {
          isClientAuthenticated = false
        }
      } catch (err) {
        console.log(err)
      }
    }
  } catch (error) {
    console.log(error)
  }
  return { isClientAuthenticated }
}
