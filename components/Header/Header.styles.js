import styled from 'styled-components'

import { getGlobalTransition } from '@/components/GlobalStyle'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.UIText};
  ${getGlobalTransition()}
  display: grid;
  align-items: center;
  grid-template-columns: 3rem auto 3rem auto;
  grid-gap: 1rem;
  padding: 0 1rem;
  font-size: 20px;
  font-weight: 800;

  img {
    border-radius: 50%;
    justify-self: flex-start;
  }

  a {
    color: ${({ theme }) => theme.UIText};
    ${getGlobalTransition()}
  }

  button:last-child {
    justify-self: flex-end;

    div > span,
    div > span::after,
    div > span::before {
      ${getGlobalTransition()}
      background-color: ${({ theme }) => theme.UIText};
      z-index: 10;
    }
  }
`
