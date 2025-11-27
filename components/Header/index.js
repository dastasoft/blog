import { useState } from 'react'
import Image from 'next/image'

import { AUTHOR } from '@/lib/constants'
import Link from 'next/link'
import ThemeToggler from '@/components/ThemeToggler'
import Menu from '@/components/Menu'
import MenuItems from '@/components/Menu/Items'
import SocialNetworks from '@/components/Menu/SocialNetworks'
import Hamburger from '@/components/Hamburger'

import { ICON_SIZES } from '@/lib/constants'

import { StyledHeader, Avatar, Navigation, HamburgerWrapper } from './Header.styles'

const Header = ({ theme, themeToggler }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <StyledHeader>
        <Link href="/">
          <Avatar>
            <Image
              src="/assets/authors/dastasoft.jpeg"
              alt={AUTHOR}
              {...ICON_SIZES}
              loading="eager"
              priority
            />
          </Avatar>
        </Link>
        <Link href="/">{AUTHOR}</Link>
        <ThemeToggler theme={theme} onToggle={themeToggler} />
        <Navigation>
          <MenuItems />
          <SocialNetworks />
        </Navigation>
        <HamburgerWrapper>
          <Hamburger
            onClick={() => setMenuOpen(!menuOpen)}
            isOpen={menuOpen}
          />
        </HamburgerWrapper>
      </StyledHeader>
      <Menu isOpen={menuOpen} close={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
