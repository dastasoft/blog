import Header from '@/components/Header'
import { Container, GridLayout } from './Layout.styles'

const Layout = ({ children, theme, themeToggler }) => {
  return (
    <Container>
      <GridLayout className="mobile-locked">
        <Header theme={theme} themeToggler={themeToggler} />
        <main className="mobile-locked">{children}</main>
      </GridLayout>
    </Container>
  )
}

export default Layout
