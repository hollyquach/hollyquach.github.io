import PlaceIcon from '@material-ui/icons/Place';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}
      <br />
      <img src="undraw_Web_dev.png" alt="Web Development Illustration" className="banner"/>

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__location center'><PlaceIcon />&nbsp;Seattle, WA</div>
      <div className='about__contact center'> 
        {social && (
          <>
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            )}
          </>
        )}
      </div>
        
      {resume && (
        <a href={resume}>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>
      )}
    </div>
  )
}

export default About
