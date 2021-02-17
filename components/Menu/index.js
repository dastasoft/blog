import Link from 'next/link'
import Image from 'next/image'

import { ICON_SIZES, URLs } from '@/lib/constants'

import { Container, IconHolder } from './Menu.styles'

const Menu = ({ isOpen, close }) => {
  return (
    <Container isOpen={isOpen} onClick={close}>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <a href={URLs.PORTFOLIO} target="_blank" rel="noopener noreferrer">
        Portfolio
      </a>
      <a href={`mailto:${URLs.MAIL}`}>Contact</a>
      <Link href="/about">
        <a>About</a>
      </Link>
      <hr />
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
    </Container>
  )
}

export default Menu
