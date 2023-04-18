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
  try {
    const { ctx } = context
    if (ctx.req.cookies.sessionCookie) {
      const sessionCookieToken = ctx.req.cookies.sessionCookie
      jwt.verify(sessionCookieToken, process.env.JWT_SECRET_KEY!)
      return {
        isClientAuthenticated: true,
      }
    } else {
      return {
        isClientAuthenticated: false,
      }
    }
  } catch (err) {
    return {
      isClientAuthenticated: false,
    }
  }
}
