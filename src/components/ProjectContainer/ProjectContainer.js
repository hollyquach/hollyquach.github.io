import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import {GitLabIcon} from '../Icons/Icons'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <p className='project__description'>{project.description}</p>

    {project.gitHub && (
      <a
        href={project.gitHub}
        aria-label='gitHub'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.gitLab && (
      <a
        href={project.gitLab}
        aria-label='gitLab'
        className='link link--icon'
      >
        <GitLabIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
