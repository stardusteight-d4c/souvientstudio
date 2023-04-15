export interface ILocaleContextHome {
  nav: {
    resume: string
    editor: string
    contact: string
  }
  hero: {
    presentation: string
    title1: string
    title2: string
    subtitle: string
    button: string
  }
  marquee: {
    selectedWork: string
  }
  projects: {
    visualIdentities: string
    openSequences: string
    personalProjects: string
  }
  dribbble: {
    span: string
    button: string
  }
  skills: string
  services: {
    heading: {
      span: string
      title: string
    }
    cards: [
      {
        title: string
        text: string
      },
      {
        title: string
        text: string
      },
      {
        title: string
        text: string
      }
    ]
  }
  emailMe: {
    collab: string
    haveAproject: string
    contact: string
  }
  footer: string
}
