import { Variants } from 'framer-motion'

export const starsVariants: (direction: string) => Variants = (
  direction: string
) => ({
  hidden: {
    x: direction === 'left' ? '-250' : '250',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 2,
      delay: 2,
    },
  },
})

export const textVariant: (delay: number) => Variants = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      delay,
    },
  },
})

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
}

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
}
