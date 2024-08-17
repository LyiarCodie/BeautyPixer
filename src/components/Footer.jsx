import './Footer.css';

export const Footer = () => {
    return (
      <footer className='footer'>
        <PhotographerCredits 
          name="Steven Arenas"
          href="https://www.pexels.com/photo/time-lapse-photo-of-light-painting-of-cards-on-the-streets-379419/"
        />
      </footer>
    )
}

/**
 * @param {{ name: string, href: string }} props 
 */
const PhotographerCredits = ({ name, href }) => {
  return (
    <p className='photographerCredits'>Photo by <a rel='noreferrer nofollow' target="_blank" href={href}>{name}</a> on Pexels</p>
  )
}