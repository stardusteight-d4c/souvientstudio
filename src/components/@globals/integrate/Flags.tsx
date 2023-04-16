import React from 'react'
import { brazilFlag, euaFlag } from '@/assets'
import Image from 'next/legacy/image'
import { useAppContext } from '@/@context/AppContextProvider'

interface Props {
  size?: number
}

export function Flags({ size = 24 }: Props) {
  const { lang, setLang } = useAppContext()

  return (
    <li className="list-none cursor-pointer pt-1">
      {lang === 'en' ? (
        <Image
          src={euaFlag.src}
          onClick={() => setLang('pt-BR')}
          alt="united-states-flag/icon"
          quality={100}
          width={size}
          height={size}
        />
      ) : (
        <Image
          src={brazilFlag.src}
          onClick={() => setLang('en')}
          alt="brazil-flag/icon"
          quality={100}
          width={size}
          height={size}
        />
      )}
    </li>
  )
}
