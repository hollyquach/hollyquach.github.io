import EmailIcon from '@material-ui/icons/Email';
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p>Let&apos;s connect!</p>
      <a
        href={`mailto:${contact.email}`}
        aria-label='email'
        className='link link--icon'
      >
        <p className="contact__email center"><EmailIcon />&nbsp;hollyquach@gmail.com</p>
      </a>
    </section>
  )
}

export default Contact
