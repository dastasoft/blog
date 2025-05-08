import { FaGithub, FaLinkedin, FaRssSquare } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'

import { URLs } from '@/lib/constants'

import { IconHolder } from './SocialNetworks.styles'

const ICON_FONT_SIZE = 32

const SocialNetworks = () => {
  return (
    <IconHolder>
      <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
        <FaGithub fontSize={ICON_FONT_SIZE} />
      </a>
      <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
        <FaLinkedin fontSize={ICON_FONT_SIZE} />
      </a>
      <a href={URLs.RSS} target="_blank" rel="noopener noreferrer">
        <FaRssSquare fontSize={ICON_FONT_SIZE} />
      </a>
      <a href={URLs.BUY_ME_A_COFFEE} target="_blank" rel="noopener noreferrer">
        <SiBuymeacoffee fontSize={ICON_FONT_SIZE} />
      </a>
    </IconHolder>
  )
}

export default SocialNetworks
