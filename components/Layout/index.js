import styled from 'styled-components'

import Header from '@/components/Header'

const Layout = ({ children, themeToggler }) => {
  return (
    <GridLayout>
      <Header themeToggler={themeToggler} />
      <main>{children}</main>
    </GridLayout>
  )
}

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
`

export default Layout
