import Items from '@/components/Menu/Items'
import SocialNetworks from '@/components/Menu/SocialNetworks'

import { Container } from './Menu.styles'

const Menu = ({ isOpen, close }) => {
  return (
    <Container isOpen={isOpen} onClick={close}>
      <Items />
      <hr />
      <SocialNetworks />
    </Container>
  )
}

export default Menu
