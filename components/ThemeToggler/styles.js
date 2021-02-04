import styled from 'styled-components'

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.UIText};
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.2rem;
  transition: all 0.5s linear;

  img {
    transition: all 0.5s linear;
  }

  img[alt='light-theme'] {
    transform: ${({ isLightTheme }) =>
      isLightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }

  img[alt='dark-theme'] {
    transform: ${({ isLightTheme }) =>
      isLightTheme ? 'translateY(-100px)' : 'translateY(0)'};
  }
`
