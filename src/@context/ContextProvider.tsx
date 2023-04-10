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
  localeContextHome: null | ILocaleContextHome
  setLocaleContextHome: React.Dispatch<
    React.SetStateAction<null | ILocaleContextHome>
  >
}

export const MyContext = createContext<ContextAPI>({
  showCurriculum: false,
  setShowCurriculum: () => {},
  lang: 'en',
  setLang: () => {},
  localeContextHome: null,
  setLocaleContextHome: () => {},
})

export const ContextProvider = ({ children }: Props) => {
  const [showCurriculum, setShowCurriculum] = useState(false)
  const [lang, setLang] = useState('en')
  const [localeContextHome, setLocaleContextHome] =
    useState<null | ILocaleContextHome>(null)

  const contextValue: ContextAPI = {
    showCurriculum,
    setShowCurriculum,
    lang,
    setLang,
    localeContextHome,
    setLocaleContextHome,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useAppContext = () => useContext(MyContext)
