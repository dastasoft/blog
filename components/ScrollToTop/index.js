import Image from 'next/image'

import { Container, Anchor } from './ScrollToTop.styles'

const ScrollToTop = () => {
  return (
    <Container>
      <Anchor href="#top" aria-label="Scroll to Top">
        <Image
          src="/assets/UI/arrow-alt-circle-up-solid.svg"
          alt="Scroll to Top Icon"
          layout="fill"
        />
      </Anchor>
    </Container>
  )
}

export default ScrollToTop
