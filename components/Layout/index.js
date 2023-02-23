import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import BuyMeACoffeeButton from '../BuyMeACoffeeButton'
import { Actions, Container, GridLayout } from './Layout.styles'

const Layout = ({ children, theme, themeToggler }) => {
  return (
    <Container id="top">
      <GridLayout>
        <Header theme={theme} themeToggler={themeToggler} />
        <main>{children}</main>
        <Actions>
          <BuyMeACoffeeButton />
          <Subscribe />
        </Actions>
      </GridLayout>
    </Container>
  )
}

export default Layout
