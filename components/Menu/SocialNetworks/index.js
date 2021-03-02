import Image from 'next/image'

import { ICON_SIZES, URLs } from '@/lib/constants'

import { IconHolder } from './SocialNetworks.styles'

const SocialNetworks = () => {
  return (
    <IconHolder>
      <a href={URLs.GITHUB} target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/github-brands.svg"
          alt="Github logo"
          {...ICON_SIZES}
        />
      </a>
      <a href={URLs.DEV} target="_blank" rel="noopener noreferrer">
        <Image src="/assets/dev-brands.svg" alt="Dev logo" {...ICON_SIZES} />
      </a>
      <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/linkedin-brands.svg"
          alt="LinkedIn logo"
          {...ICON_SIZES}
        />
      </a>
    </IconHolder>
  )
}

export default SocialNetworks
