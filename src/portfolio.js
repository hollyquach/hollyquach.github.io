const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hollyquach.github.io',
  title: 'HQ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Holly Quach',
  role: 'software engineer',
  description:
    'I am an action-oriented software engineer looking for a new opportunity to work in a collaborative, development-focused team. I have extensive experience as a technical project manager in both product and process development with a strong interest in data-driven optimization and continuous improvement. With those functional skills as a foundation, I am excited to tackle new challenges, and further contribute within the tech space in a different capacity.',
  resume: 'Holly-Quach-resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/hollyquach/',
    github: 'https://github.com/hollyquach',
    gitlab: 'https://gitlab.com/hollyquach',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: <img src="BrewHop.svg" alt="BrewHop logo" className="project__img"/>,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Python', 'FastAPI', 'Javascript', 'React',],
    gitLab: 'https://gitlab.com/brewhoppers/brew-hop/',
    livePreview: 'https://brewhoppers.gitlab.io/brew-hop/',
  },
  {
    name: <img src="CarCar.png" alt="CarCar logo" className="project__img"/>,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Python', 'Django'],
    gitHub: 'https://github.com/hollyquach/car-car',
    // gitLab: 'https://gitlab.com/hollyquach/car-car',
    // livePreview: 'https://github.com',
  },
  {
    name: <img src="ConferenceGo.svg" alt="Conference Go logo" className="project__img"/>,
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Python', 'Django'],
    gitLab: 'https://gitlab.com/hollyquach/conference-go',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'FastAPI',
  'Django',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'PostgreSQL',
  'Git',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hollyquach@gmail.com',
}

export { header, about, projects, skills, contact }
