// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ILocaleContextHome } from '@/@interfaces/ILocaleContexts'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILocaleContextHome>
) {
  res.status(200).json({
    nav: {
      editor: 'Editor',
      resume: 'Resume',
      contact: 'Contact',
    },
    hero: {
      presentation: "Hi! I'm Fernanda :-)",
      title1: 'Building digital products,',
      title2: 'brands and experiences',
      subtitle:
        'I am a graphic designer from Brazil, focused on visual identities for brands and audiovisual media.',
      button: 'Get in Touch',
    },
    marquee: {
      selectedWork: 'Selected Work',
    },
    projects: {
      visualIdentities: 'Visual identities',
      openSequences: 'Open sequences',
      personalProjects: 'Personal projects',
    },
    dribbble: {
      span: 'And many more small scale works, experiments and full case studies on my Behance profile.',
      button: 'Follow on Behance',
    },
    skills: 'Skills',
    services: {
      heading: {
        span: 'Services',
        title: 'I can help you with',
      },
      cards: [
        {
          title: 'Product Strategy',
          text: 'Defining the problem, identifying the scope and finally organizing the design roadmap to bring 100% of each project.',
        },
        {
          title: 'Visual Design',
          text: 'Development of an identity that solves and visually represents the values and personality of the brand or project.',
        },
        {
          title: 'Perfect Experience',
          text: 'Through design, we create a personalized experience for your customer or product.',
        },
      ],
    },
    emailMe: {
      collab: 'Let’s collab!',
      haveAproject: "Have a project? Let's talk!",
      contact: 'Contact',
    },
    footer: 'built by',
  })
}
