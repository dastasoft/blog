import { useState } from 'react'
import Image from 'next/image'
import { HamburgerSpin } from 'react-animated-burgers'

import { AUTHOR } from '@/lib/constants'
import Link from 'next/link'
import ThemeToggler from '@/components/ThemeToggler'
import Menu from '@/components/Menu'
import MenuItems from '@/components/Menu/Items'
import SocialNetworks from '@/components/Menu/SocialNetworks'

import { ICON_SIZES } from '@/lib/constants'

import { StyledHeader, Avatar, Navigation, Hamburger } from './Header.styles'

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
        <Link href="/">
          <a>{AUTHOR}</a>
        </Link>
        <ThemeToggler theme={theme} onToggle={themeToggler} />
        <Navigation>
          <MenuItems />
          <SocialNetworks />
        </Navigation>
        <Hamburger>
          <HamburgerSpin
            toggleButton={() => setMenuOpen(!menuOpen)}
            isActive={menuOpen}
          />
        </Hamburger>
      </StyledHeader>
      <Menu isOpen={menuOpen} close={() => setMenuOpen(false)} />
    </>
  )
}

export default Header
