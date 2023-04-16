import { ILocaleContextHome } from '@/@interfaces/ILocaleContexts'
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
  isClientAuthenticated: boolean | undefined
  setIsClientAuthenticated: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >
}

export const MyContext = createContext<ContextAPI>({
  showCurriculum: false,
  setShowCurriculum: () => {},
  lang: 'en',
  setLang: () => {},
  localeContextHome: null,
  setLocaleContextHome: () => {},
  isClientAuthenticated: undefined,
  setIsClientAuthenticated: () => {},
})

export const AppContextProvider = ({ children }: Props) => {
  const [showCurriculum, setShowCurriculum] = useState(false)
  const [lang, setLang] = useState('en')
  const [localeContextHome, setLocaleContextHome] =
    useState<null | ILocaleContextHome>(null)
  const [isClientAuthenticated, setIsClientAuthenticated] = useState<
    boolean | undefined
  >(undefined)

  const contextValue: ContextAPI = {
    showCurriculum,
    setShowCurriculum,
    lang,
    setLang,
    localeContextHome,
    setLocaleContextHome,
    isClientAuthenticated,
    setIsClientAuthenticated,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useAppContext = () => useContext(MyContext)
