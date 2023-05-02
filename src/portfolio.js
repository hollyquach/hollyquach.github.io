const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hollyquach.github.io',
  title: 'HQ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Holly Quach',
  role: 'Software Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: '%PUBLIC_URL%/Holly-Quach-resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/hollyquach/',
    github: 'https://github.com/hollyquach/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'PostGreSQL',
  'Git',
  'Docker',
  'CI/CD',
  'Agile',
  'REST API',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hollyquach@gmail.com',
}

export { header, about, projects, skills, contact }
