import { FaGithub, FaLinkedin, FaDev, FaTwitter } from 'react-icons/fa'

import { URLs } from '@/lib/constants'

import { IconHolder } from './SocialNetworks.styles'

const SocialNetworks = () => {
  return (
    <IconHolder>
      <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
        <FaGithub fontSize="32px" />
      </a>
      <a href={URLs.DEV} target="_blank" rel="noopener noreferrer">
        <FaDev fontSize="32" />
      </a>
      <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
        <FaLinkedin fontSize="32" />
      </a>
      <a href={URLs.TWITTER} target="_blank" rel="noopener noreferrer">
        <FaTwitter fontSize="32px" />
      </a>
    </IconHolder>
  )
}

export default SocialNetworks
