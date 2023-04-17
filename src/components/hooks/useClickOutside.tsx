import { useState, useEffect, RefObject } from 'react'

interface UseClickOutsideProps {
  ref: RefObject<HTMLElement>
  callback: () => void
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps) => {
  const [clickedOutside, setClickedOutside] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClickedOutside(true)
        callback()
      } else {
        setClickedOutside(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return clickedOutside
}
