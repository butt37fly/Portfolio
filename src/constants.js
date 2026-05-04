export const PROJECT_INFO = {
  dev: '@butt37fly',
}

export const MENU = [
  {
    url: '/',
    title: 'Inicio',
    icon: 'home',
    style: ['alt'],
    isView: true,
  },
  {
    url: '/proyectos',
    title: 'Proyectos',
    icon: 'article',
    style: ['alt'],
    isView: true,
  },
  {
    url: '/sobre-mi',
    title: 'Sobre mi',
    icon: 'user',
    style: ['alt'],
    isView: true,
  },
]

export const LINKS = {
  rrss: {
    linkedin: {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/butt37fly/',
    },
    github: {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/butt37fly',
    },
    email: {
      name: 'E-mail',
      icon: 'email',
      url: 'mailto:amospina423@gmail.com',
    },
  },
  project: {
    repo: {
      name: 'Repositorio',
      icon: 'github',
      url: 'https://github.com/butt37fly/portafolio',
    },
    figma: {
      name: 'Maqueta',
      icon: 'figma',
      url: 'https://www.figma.com/design/XEuEiPs8XcDOwZgDlIG4Qn/Portafolio?node-id=2-4&t=g9cnWSbAKORRRqob-1',
    },
  },
}

export const TEXTS = {
  templates: {
    header: {},
    footer: {},
  },
  views: {
    home: {
      title: 'Andrés Ospina',
      subtitle: 'Desarrollador Web',
      description: `
        <p>¡Hola! ¿Cómo estás? Bienvenido a mi portafolio web, encuentra aquí mis trabajos más recientes :)</p>
        `,
    },
    projects: {
      title: 'Proyectos',
    },
    about: {
      title: 'Sobre mi',
      description: `
        <p>Con más de 3 años de experiencia en el mundo del desarrollo, cuento con la capacidad técnica para abordar proyectos de diferentes complejidades</p>

        <p>Mi zona de confort profesional, WordPress: he desarrollado temas y plugins a la medida para la necesidad específica de cada proyecto, además de liderar la implementación, completamente adaptable, de diseños altamente exigentes.</p>

        <p>Sin embargo también voy más allá de los gestores de contenido. He participado en el desarrollo de proyectos desde cero, usando PHP para un backend robusto, e implementado diferentes tecnologías como React y Vuejs para un fontend moderno.</p>
        `,
    },
  },
}
