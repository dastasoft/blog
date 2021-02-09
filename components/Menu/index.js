import Link from 'next/link'
import Image from 'next/image'

import { ICON_SIZES, URLs } from '@/lib/constants'

import { Container, IconHolder } from './styles'

const Menu = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
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
        <Image
          src="/assets/github-brands.svg"
          alt="Github logo"
          {...ICON_SIZES}
        />
        <Image src="/assets/dev-brands.svg" alt="Dev logo" {...ICON_SIZES} />
        <Image
          src="/assets/linkedin-brands.svg"
          alt="LinkedIn logo"
          {...ICON_SIZES}
        />
      </IconHolder>
    </Container>
  )
}

export default Menu
