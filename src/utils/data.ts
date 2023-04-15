import {
  targetEmoji,
  paintEmoji,
  starEmoji,
  photoshop,
  illustrator,
  afterEffects,
  figma,
  procreate,
} from '../assets'

interface ICardService {
  emoji: string
  title: string
  text: string
}

interface ISkillData {
  image: string
  alt: string
}

export const cardServiceData: ICardService[] = [
  {
    emoji: targetEmoji.src,
    title: 'Product Strategy',
    text: `Defining the problem, identifying the scope and finally organizing the design roadmap to bring 100% of each project.`,
  },
  {
    emoji: paintEmoji.src,
    title: 'Visual Design',
    text: `Development of an identity that solves and visually represents the values and personality of the brand or project.`,
  },
  {
    emoji: starEmoji.src,
    title: 'Perfect Experience',
    text: `Through design, we create a personalized experience for your customer or product.`,
  },
]

export const skillsData: ISkillData[] = [
  {
    image: photoshop.src,
    alt: 'photoshop',
  },
  {
    image: illustrator.src,
    alt: 'illustrator',
  },
  {
    image: afterEffects.src,
    alt: 'afterEffects',
  },
  {
    image: figma.src,
    alt: 'figma',
  },
  {
    image: procreate.src,
    alt: 'procreate',
  },
]
