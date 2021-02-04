import Image from 'next/image'
import { HamburgerSpin } from 'react-animated-burgers'

import { AUTHOR } from '@/lib/constants'
import ThemeToggler from '@/components/ThemeToggler'
import { StyledHeader } from './styles'

const Header = ({ theme, themeToggler }) => {
  return (
    <StyledHeader>
      <Image
        src="/assets/authors/dastasoft.jpeg"
        alt={AUTHOR}
        width={50}
        height={50}
      />
      <span>{AUTHOR}</span>
      <ThemeToggler theme={theme} onToggle={themeToggler} />
      <HamburgerSpin />
    </StyledHeader>
  )
}

export default Header
