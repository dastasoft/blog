import Link from 'next/link'

import { URLs } from '@/lib/constants'

import { Container } from './Items.styles'

const MenuItems = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default MenuItems
