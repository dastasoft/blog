import { Container, ImageContainer } from './ImageWrapper.styles'

const ImageWrapper = ({ children }) => {
  return (
    <Container>
      <ImageContainer>{children}</ImageContainer>
    </Container>
  )
}

export default ImageWrapper
