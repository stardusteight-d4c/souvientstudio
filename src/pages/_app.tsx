import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '@/@context/AppContextProvider'
import { EditorContextProvider } from '@/@context/EditorContextProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <EditorContextProvider>
        <Component {...pageProps} />
      </EditorContextProvider>
    </AppContextProvider>
  )
}
