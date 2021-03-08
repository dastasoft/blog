import { URLs } from '@/lib/constants'
import ELink from '@/components/EnhancedLink'

import { Container } from './Items.styles'

const MenuItems = () => {
  return (
    <Container>
      <ELink href="/" activeClassName="active">
        <a>Blog</a>
      </ELink>
      <a href={URLs.PORTFOLIO} target="_blank" rel="noopener noreferrer">
        Portfolio
      </a>
      <a href={`mailto:${URLs.MAIL}`}>Contact</a>
      <ELink href="/about" activeClassName="active">
        <a>About</a>
      </ELink>
    </Container>
  )
}

export default MenuItems
