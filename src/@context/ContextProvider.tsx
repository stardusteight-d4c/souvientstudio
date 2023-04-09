import { ILocaleContextHome } from '@/@interfaces/LocaleContexts'
import React, { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface ContextAPI {
  showCurriculum: boolean
  setShowCurriculum: React.Dispatch<React.SetStateAction<boolean>>
  lang: string
  setLang: React.Dispatch<React.SetStateAction<string>>
  localeContextText: null | ILocaleContextHome
  setLocaleContextText: React.Dispatch<
    React.SetStateAction<null | ILocaleContextHome>
  >
}

export const MyContext = createContext<ContextAPI>({
  showCurriculum: false,
  setShowCurriculum: () => {},
  lang: 'en',
  setLang: () => {},
  localeContextText: null,
  setLocaleContextText: () => {},
})

export const ContextProvider = ({ children }: Props) => {
  const [showCurriculum, setShowCurriculum] = useState(false)
  const [lang, setLang] = useState('en')
  const [localeContextText, setLocaleContextText] =
    useState<null | ILocaleContextHome>(null)

  const contextValue: ContextAPI = {
    showCurriculum,
    setShowCurriculum,
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
