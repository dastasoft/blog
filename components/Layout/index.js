import Header from '@/components/Header'
import { GridLayout } from './styles'

const Layout = ({ children, theme, themeToggler }) => {
  return (
    <GridLayout>
      <Header theme={theme} themeToggler={themeToggler} />
      <main>{children}</main>
    </GridLayout>
  )
}

export default Layout
