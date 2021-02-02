import { useContext } from 'react'
import Image from 'next/image'
import styled, { ThemeContext } from 'styled-components'
import { HamburgerSpin } from 'react-animated-burgers'

import { AUTHOR } from '@/lib/constants'

const Header = ({ themeToggler }) => {
  const themeContext = useContext(ThemeContext)

  return (
    <StyledHeader>
      <Image
        src="/assets/authors/dastasoft.jpeg"
        alt={AUTHOR}
        width={50}
        height={50}
      />
      <span>{AUTHOR}</span>
      <button onClick={themeToggler}>Theme Toggler</button>
      <HamburgerSpin barColor={themeContext.UIText} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.UIText};
  transition: all 0.50s linear;
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr auto;
  grid-gap: 1rem;
  padding: 0 1rem;
  font-size: 18px;
  font-weight: 500;

  img {
    border-radius: 50%;
  }
`

export default Header
