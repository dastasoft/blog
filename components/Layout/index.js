import Header from '@/components/Header'
import { Container, GridLayout } from './Layout.styles'

const Layout = ({ children, theme, themeToggler }) => {
  return (
    <Container>
      <GridLayout>
        <Header theme={theme} themeToggler={themeToggler} />
        <main>{children}</main>
      </GridLayout>
    </Container>
  )
}

export default Layout
