import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import { Container, GridLayout } from './Layout.styles'

const Layout = ({ children, theme, themeToggler }) => {
  return (
    <Container id="top">
      <GridLayout>
        <Header theme={theme} themeToggler={themeToggler} />
        <main>{children}</main>
        <Subscribe />
      </GridLayout>
    </Container>
  )
}

export default Layout
