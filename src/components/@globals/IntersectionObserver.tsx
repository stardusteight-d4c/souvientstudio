import React, { useRef, useEffect, ReactNode } from 'react'

type IntersectionObserverProps = {
  children: ReactNode
  rootMargin?: string
  threshold?: number | number[]
  onEnter?: () => void
  onExit?: () => void
  overflowXHidden?: boolean
  overflowYHidden?: boolean
}

export default function IntersectionObserver({
  children,
  rootMargin,
  threshold,
  onEnter,
  onExit,
  overflowXHidden = true,
  overflowYHidden = true,
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && onEnter) {
          onEnter()
        } else if (!entry.isIntersecting && onExit) {
          onExit()
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [rootMargin, threshold, onEnter, onExit])

  return (
    <div
      ref={ref}
      className={`max-w-[100vw] ${overflowXHidden && 'overflow-x-hidden'} ${
        overflowYHidden && 'overflow-y-hidden'
      }`}
    >
      {children}
    </div>
  )
}
