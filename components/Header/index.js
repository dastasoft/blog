import { useState } from 'react'
import Image from 'next/image'
import { HamburgerSpin } from 'react-animated-burgers'

import { AUTHOR } from '@/lib/constants'
import Link from 'next/link'
import ThemeToggler from '@/components/ThemeToggler'
import Menu from '@/components/Menu'

import { ICON_SIZES } from '@/lib/constants'

import { StyledHeader } from './Header.styles'

const Header = ({ theme, themeToggler }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <a>
            <Image
              src="/assets/authors/dastasoft.jpeg"
              alt={AUTHOR}
              {...ICON_SIZES}
              loading="eager"
              priority
            />
          </a>
        </Link>
        <Link href="/">
          <a>{AUTHOR}</a>
        </Link>
        <ThemeToggler theme={theme} onToggle={themeToggler} />
        <HamburgerSpin
          toggleButton={() => setMenuOpen(!menuOpen)}
          isActive={menuOpen}
        />
      </StyledHeader>
      <Menu isOpen={menuOpen} close={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
