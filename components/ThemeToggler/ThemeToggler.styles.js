import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.UIText};
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.2rem;
  ${getGlobalTransition()}

  img {
    ${getGlobalTransition()}
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
