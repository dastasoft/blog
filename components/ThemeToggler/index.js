import Image from 'next/image'

import { Button } from './ThemeToggler.styles'

const ThemeToggler = ({ theme, onToggle }) => {
  const isLight = theme === 'light'
  return (
    <Button type="button" onClick={onToggle} isLightTheme={isLight}>
      <Image
        src="/assets/UI/sun.svg"
        alt="light-theme"
        width={18}
        height={18}
      />
      <Image
        src="/assets/UI/moon.svg"
        alt="dark-theme"
        width={18}
        height={18}
      />
    </Button>
  )
}

export default ThemeToggler
