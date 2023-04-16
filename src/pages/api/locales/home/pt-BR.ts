import { ILocaleContextHome } from '@/@interfaces/ILocaleContexts'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILocaleContextHome>
) {
  res.status(200).json({
    nav: {
      editor: 'Editor',
      resume: 'Resumo',
      contact: 'Contato',
    },
    hero: {
      presentation: 'Oi! Eu sou Fernanda :-)',
      title1: 'Construindo produtos digitais,',
      title2: 'marcas e experiências',
      subtitle:
        'Eu sou uma designer gráfico do Brasil, focada em identidades visuais para marcas e mídias audiovisuais.',
      button: 'Entrar em contato',
    },
    marquee: {
      selectedWork: 'Curadoria de trabalhos',
    },
    projects: {
      visualIdentities: 'Identidades visuais',
      openSequences: 'Sequências abertas',
      personalProjects: 'Projetos pessoais',
    },
    dribbble: {
      span: 'E muitos outros trabalhos em pequena escala, experimentos e estudos de caso completos no meu perfil do Behance.',
      button: 'Siga-me no Behance',
    },
    skills: 'Habilidades',
    services: {
      heading: {
        span: 'Serviços',
        title: 'Como posso te ajudar',
      },
      cards: [
        {
          title: 'Estratégia de Produto',
          text: 'Definido o problema, identificando o escopo e, finalmente, organizando o roteiro de design para trazer 100% de cada projeto.',
        },
        {
          title: 'Design Visual',
          text: 'Desenvolvimento de uma identidade que solucione e represente visualmente os valores e a personalidade da marca ou do projeto.',
        },
        {
          title: 'A Experiência perfeita',
          text: 'Através do design, criamos uma experiência personalizada para seu cliente ou produto.',
        },
      ],
    },
    emailMe: {
      collab: 'Evolua conosco!',
      haveAproject: 'Tem um projeto? Vamos conversar!',
      contact: 'Entre em contato',
    },
    footer: 'construido por',
  })
}
