import { ILocaleContextHome } from '@/@interfaces/LocaleContexts'
import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface ContextAPI {
  lang: string
  setLang: React.Dispatch<React.SetStateAction<string>>
  localeContextText: null | ILocaleContextHome
  setLocaleContextText: React.Dispatch<
    React.SetStateAction<null | ILocaleContextHome>
  >
}

export const MyContext = createContext<ContextAPI>({
  lang: '',
  setLang: () => {},
  localeContextText: null,
  setLocaleContextText: () => {},
})

export const ContextProvider = ({ children }: Props) => {
  const [lang, setLang] = useState('en')
  const [localeContextText, setLocaleContextText] =
    useState<null | ILocaleContextHome>(null)

  const contextValue: ContextAPI = {
    lang,
    setLang,
    localeContextText,
    setLocaleContextText,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useAppContext = () => useContext(MyContext)
